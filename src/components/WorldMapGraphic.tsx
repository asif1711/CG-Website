import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  graticulePath, 
  countries, 
  locations, 
  lines 
} from './worldMapData';

const WorldMapGraphic = () => {
  const [activeLoc, setActiveLoc] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "200px" });

  const HighlightDots = () => {
    const dots = [
      { x: 10, y: 5, r: 1.2, o: 0.5 },
      { x: -12, y: 8, r: 0.8, o: 0.3 },
      { x: 14, y: -10, r: 1.0, o: 0.4 },
      { x: -8, y: -14, r: 0.6, o: 0.2 },
      { x: 18, y: 2, r: 0.9, o: 0.35 },
      { x: -15, y: -5, r: 0.7, o: 0.25 },
      { x: 4, y: 16, r: 0.8, o: 0.3 },
      { x: -6, y: 10, r: 1.1, o: 0.45 },
    ];
    return (
      <g className="pointer-events-none">
        {dots.map((d, i) => (
          <circle 
            key={i} 
            cx={d.x} 
            cy={d.y} 
            r={d.r} 
            fill="var(--color-primary)" 
            fillOpacity={d.o} 
            className="animate-pulse" 
            style={{ animationDelay: `${i * 0.1}s`, animationDuration: `${2 + i * 0.2}s` }} 
          />
        ))}
      </g>
    );
  };

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
            <svg 
              viewBox="0 0 800 600"
              className="w-full h-full"
            >
              <defs>
                {/* Saturated gray dots for general landmasses */}
                <pattern id="landDots" x="0" y="0" width="5.5" height="5.5" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.3" fill="#94A3B8" />
                </pattern>
                {/* Brand Yellow dots for highlighted areas */}
                <pattern id="highlightDots" x="0" y="0" width="5.0" height="5.0" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2.0" fill="var(--color-accent)" />
                </pattern>

                {/* Mask for all landmasses EXCEPT highlighted ones */}
                <mask id="generalLandMask">
                  {countries.map((geo) => {
                    if (!geo.isHighlighted && geo.d) {
                      return (
                        <path
                          key={`mask-gen-${geo.id}`}
                          d={geo.d}
                          fill="white"
                          stroke="none"
                        />
                      );
                    }
                    return null;
                  })}
                </mask>

                {/* Mask for only highlighted operational areas */}
                <mask id="highlightLandMask">
                  {countries.map((geo) => {
                    if (geo.isHighlighted && geo.d) {
                      return (
                        <path
                          key={`mask-high-${geo.id}`}
                          d={geo.d}
                          fill="white"
                          stroke="none"
                        />
                      );
                    }
                    return null;
                  })}
                  {/* Manual buffers for small island nations and city states */}
                  {locations.map(loc => {
                    const radius = loc.name === "Singapore" ? 8 : loc.name === "Fiji" ? 12 : 0;
                    if (radius === 0) return null;
                    return (
                      <circle 
                        key={`mask-marker-${loc.name}`} 
                        cx={loc.x} 
                        cy={loc.y} 
                        r={radius} 
                        fill="white" 
                      />
                    );
                  })}
                </mask>
              </defs>

              {/* Background Graticule */}
              {graticulePath && (
                <path 
                  d={graticulePath} 
                  stroke="#F1F5F9" 
                  strokeWidth={0.5} 
                  opacity={0.3} 
                  fill="none" 
                />
              )}

              {/* Masked Dot Grids for Landmasses */}
              <rect width="100%" height="100%" fill="url(#landDots)" mask="url(#generalLandMask)" className="pointer-events-none" />
              <rect width="100%" height="100%" fill="url(#highlightDots)" mask="url(#highlightLandMask)" className="pointer-events-none" />

              {/* Country Outlines */}
              {countries.map((geo) => {
                if (!geo.d) return null;
                return (
                  <path
                    key={`outline-${geo.id}`}
                    d={geo.d}
                    fill="transparent"
                    stroke={geo.isHighlighted ? "var(--color-accent)" : "#E2E8F0"}
                    strokeWidth={geo.isHighlighted ? 0.6 : 0.3}
                    strokeOpacity={geo.isHighlighted ? 0.4 : 0.2}
                  />
                );
              })}

              {/* Network Connections */}
              <g stroke="var(--color-primary)" strokeWidth="0.6" strokeOpacity="0.25" fill="none">
                {lines.map((line) => (
                  <line
                    key={line.key}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    strokeDasharray="3,3"
                  />
                ))}
              </g>

              {/* Interactive Locations - Points */}
              {locations.map((loc) => (
                <g 
                  key={`point-${loc.name}`} 
                  transform={`translate(${loc.x}, ${loc.y})`}
                >
                  <g
                    className="cursor-pointer"
                    onMouseEnter={(e) => {
                      setActiveLoc(loc.name);
                      const rect = e.currentTarget.getBoundingClientRect();
                      const parent = document.querySelector('.group\\/map');
                      if (parent) {
                        const parentRect = parent.getBoundingClientRect();
                        setTooltipPos({
                          x: rect.left - parentRect.left + rect.width / 2,
                          y: rect.top - parentRect.top,
                        });
                      }
                    }}
                    onMouseLeave={() => setActiveLoc(null)}
                  >
                    <HighlightDots />

                    {/* Pulsating Rings (Brand Blue) */}
                    <motion.circle
                      r={activeLoc === loc.name ? "14" : "12"}
                      fill="transparent"
                      stroke="var(--color-primary)"
                      strokeWidth="1.5"
                      animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Core Point (Brand Blue) */}
                    <circle
                      r={activeLoc === loc.name ? 8 : 6}
                      fill="var(--color-primary)"
                      stroke="white"
                      strokeWidth="3"
                      className="transition-all duration-300"
                    />
                  </g>
                </g>
              ))}
            </svg>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-white" />
          )}
        </div>
      </div>

      {/* Absolute Tooltip - outside overflow-hidden container to allow full floating bounds */}
      <AnimatePresence>
        {activeLoc && tooltipPos && (() => {
          const loc = locations.find(l => l.name === activeLoc);
          if (!loc) return null;
          const isFiji = activeLoc === "Fiji";
          return (
            <div
              style={{
                position: 'absolute',
                left: `${tooltipPos.x}px`,
                top: `${tooltipPos.y}px`,
                transform: isFiji ? 'translate(-85%, -100%) translateY(-15px)' : 'translate(-50%, -100%) translateY(-15px)',
                zIndex: 40,
              }}
              className="pointer-events-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                className={`bg-primary text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl border border-white/10 relative transition-all duration-200 ${
                  loc.stats.length > 0 ? "p-6 w-[240px]" : "p-4 pb-5 w-[180px]"
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className={loc.stats.length > 0 ? "border-b border-white/10 pb-3" : "text-center"}>
                    <h4 className={`text-[16px] font-black uppercase tracking-widest text-accent leading-none ${loc.stats.length === 0 ? "text-center" : ""}`}>{loc.name}</h4>
                  </div>
                  {loc.stats.length > 0 && (
                    <div className="space-y-4">
                      {loc.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-6">
                          <span className="text-[18px] text-white font-medium whitespace-nowrap">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Arrow */}
                <div className={`absolute ${isFiji ? "left-[85%]" : "left-1/2"} -translate-x-1/2 -bottom-2 w-4 h-4 bg-primary rotate-45`} />
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
};

export default WorldMapGraphic;
