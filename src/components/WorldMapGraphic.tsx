import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
// @ts-ignore
import mapSvg from "./world-map.optimized.svg?raw";

interface Stat {
  label: string;
  value: number;
}

const WorldMapGraphic = () => {
  const [activeLoc, setActiveLoc] = useState<string | null>(null);
  const [activeStats, setActiveStats] = useState<Stat[]>([]);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "200px" });

  useEffect(() => {
    if (!isInView || !containerRef.current) return;

    const container = containerRef.current;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const g = target.closest('.map-location') as SVGGElement | null;
      
      if (g) {
        const name = g.getAttribute('data-name');
        const statsStr = g.getAttribute('data-stats');
        if (!name) return;

        setActiveLoc((prev) => {
          if (prev !== name) {
            if (statsStr) {
              try {
                setActiveStats(JSON.parse(statsStr));
              } catch {
                setActiveStats([]);
              }
            } else {
              setActiveStats([]);
            }
            return name;
          }
          return prev;
        });

        const rect = g.getBoundingClientRect();
        const parent = container.querySelector('.group\\/map');
        if (parent) {
          const parentRect = parent.getBoundingClientRect();
          setTooltipPos({
            x: rect.left - parentRect.left + rect.width / 2,
            y: rect.top - parentRect.top,
          });
        }
      } else {
        setActiveLoc((prev) => {
          if (prev !== null) {
            setActiveStats([]);
            return null;
          }
          return prev;
        });
      }
    };

    const handleMouseLeave = () => {
      setActiveLoc((prev) => {
        if (prev !== null) {
          setActiveStats([]);
          return null;
        }
        return prev;
      });
    };

    container.addEventListener('mouseover', handleMouseOver);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseover', handleMouseOver);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isInView]);

  return (
    <div ref={containerRef} className="relative w-full aspect-[4/3]">
      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm group/map relative">
        {/* Overlays - Set to lower z-index */}
        <div className="absolute top-8 right-8 flex flex-col gap-4 pointer-events-none z-10">
          <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full border border-gray-100 shadow-xl flex items-center gap-4">
            <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
            <span 
              className="text-[12px] uppercase tracking-[0.2em] text-primary whitespace-nowrap"
              style={{ fontWeight: 700 }}
            >
              Global Presence
            </span>
          </div>
        </div>

        {/* Legend - Left bottom aligned list, transparent - Hidden on mobile */}
        <div className="absolute bottom-12 left-10 hidden md:flex flex-col gap-4 pointer-events-none z-10">
          <div className="flex flex-col items-start gap-4 p-0">
            {['Australia', 'India', 'Thailand', 'Singapore', 'Philippines', 'Fiji'].map((loc) => (
              <div key={loc} className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[12px] font-black text-primary uppercase tracking-widest">{loc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 w-full h-full">
          {isInView ? (
            <div 
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: mapSvg }} 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-white" />
          )}
        </div>
      </div>

      {/* Absolute Tooltip - outside overflow-hidden container to allow full floating bounds */}
      <AnimatePresence>
        {activeLoc && tooltipPos && (
          <div
            style={{
              position: 'absolute',
              left: `${tooltipPos.x}px`,
              top: `${tooltipPos.y}px`,
              transform: activeLoc === "Fiji" ? 'translate(-85%, -100%) translateY(-15px)' : 'translate(-50%, -100%) translateY(-15px)',
              zIndex: 40,
            }}
            className="pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              className={`bg-primary text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl border border-white/10 relative transition-all duration-200 ${
                activeStats.length > 0 ? "p-6 w-[240px]" : "p-4 pb-5 w-[180px]"
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className={activeStats.length > 0 ? "border-b border-white/10 pb-3" : "text-center"}>
                  <h4 className={`text-[16px] font-black uppercase tracking-widest text-accent leading-none ${activeStats.length === 0 ? "text-center" : ""}`}>{activeLoc}</h4>
                </div>
                {activeStats.length > 0 && (
                  <div className="space-y-4">
                    {activeStats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-6">
                        <span className="text-[18px] text-white font-medium whitespace-nowrap">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Arrow */}
              <div className={`absolute ${activeLoc === "Fiji" ? "left-[85%]" : "left-1/2"} -translate-x-1/2 -bottom-2 w-4 h-4 bg-primary rotate-45`} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorldMapGraphic;
