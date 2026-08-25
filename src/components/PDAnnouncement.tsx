import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface PDPoint {
  id: string;
  number: string;
  title: string;
}

const PD_POINTS: PDPoint[] = [
  {
    id: 'point-1',
    number: '01',
    title: 'Industry Experts with Vast Experience'
  },
  {
    id: 'point-2',
    number: '02',
    title: 'VET Regulatory Trends'
  },
  {
    id: 'point-3',
    number: '03',
    title: 'Interactive and Skill based professional development sessions'
  }
];

/**
 * Dynamic Interactive/Ambient Dot Grid Pattern
 * Renders a crisp background of subtle pulsating dots and gentle floating constellation nodes.
 */
const DynamicDotPattern: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    // Floating dynamic nodes for extra subtle depth
    const floatingDots = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1.2,
      baseAlpha: Math.random() * 0.12 + 0.04,
      color: Math.random() > 0.4 ? '#0072CE' : '#042F61'
    }));

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const spacing = 32;
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      // 1. Grid matrix dots with smooth ambient ripple
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          
          // Subtle wave calculation for organic pulsation
          const wave = Math.sin(time + i * 0.25 + j * 0.25);
          const alpha = 0.03 + (wave + 1) * 0.025; // alpha oscillates subtly between 0.03 and 0.08
          
          ctx.beginPath();
          ctx.arc(x, y, 1.1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(4, 47, 97, ${alpha})`;
          ctx.fill();
        }
      }

      // 2. Floating accent constellation dots
      floatingDots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;

        const pulse = (Math.sin(time * 2 + dot.x) + 1) * 0.5;
        const currentAlpha = dot.baseAlpha + pulse * 0.08;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        
        if (dot.color === '#0072CE') {
          ctx.fillStyle = `rgba(0, 114, 206, ${currentAlpha})`;
        } else {
          ctx.fillStyle = `rgba(4, 47, 97, ${currentAlpha})`;
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};

export const PDAnnouncement: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(PD_POINTS[0].id);

  return (
    <section 
      id="pd-announcement"
      aria-label="PD Announcement"
      className="relative bg-white border-b border-slate-200/80 py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Subtle dynamic dot background pattern */}
      <DynamicDotPattern />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Main Typography, Subtitle & Action Buttons   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8 sm:space-y-10">
            <div>
              {/* Main Headline */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl text-[#042F61] tracking-tight leading-[1.08] text-balance font-sans"
              >
                <span className="block font-bold">Join Our</span>
                <span className="block text-[#0072CE] font-extrabold">Professional</span>
                <span className="block text-[#0072CE] font-accent font-extrabold tracking-normal">Development</span>
                <span className="block font-extrabold">Sessions</span>
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Subheading / Value Proposition with highlighted accent words in darker font color */}
              <p className="text-xl sm:text-2xl text-slate-700 font-medium leading-snug tracking-tight max-w-lg">
                Build <span className="font-accent font-bold text-[#042F61]">skills</span>, grow your <span className="font-accent font-bold text-[#042F61]">expertise</span>, and advance your <span className="font-accent font-bold text-[#042F61]">career</span>.
              </p>

              {/* Action Buttons with matching text & SVG colors and uppercase labels */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.a
                  href="https://chelsongordon.com/book-a-pd-session/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0072CE] hover:bg-[#042F61] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#0072CE]/25 transition-all duration-300 group"
                >
                  <span>JOIN NOW</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="https://chelsongordon.com/contact-us-page/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-[#042F61] font-bold text-sm uppercase tracking-wider border border-slate-300 shadow-sm transition-all duration-200 group"
                >
                  <span>LEARN MORE</span>
                  <ArrowUpRight className="w-4 h-4 text-[#042F61] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Integrated SVG Graphic + Numbered Points   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-8">
            
            {/* Top-Right Integrated Graphic: Custom PD Icon */}
            <div className="flex justify-end items-center pb-2">
              <motion.img
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                src={`https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/PD%20custom%20icon.svg?v=${Date.now()}`}
                alt="PD custom icon"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 3 Numbered Points List with matching typography, continuous full-width rules, and no description/yellow dot */}
            <div className="divide-y divide-slate-200/90 border-t border-b border-slate-200/90">
              {PD_POINTS.map((point) => {
                const isActive = activeId === point.id;

                return (
                  <div
                    key={point.id}
                    onClick={() => setActiveId(point.id)}
                    onMouseEnter={() => setActiveId(point.id)}
                    className="py-6 sm:py-7 cursor-pointer transition-colors duration-200 group select-none"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      {/* Number: Montserrat ExtraBold / Sans */}
                      <span 
                        className={`text-base sm:text-lg lg:text-xl font-extrabold tracking-tight transition-colors duration-200 font-sans ${
                          isActive ? 'text-[#0072CE]' : 'text-slate-800 group-hover:text-[#0072CE]'
                        }`}
                      >
                        {point.number}
                      </span>
                      
                      {/* Title: Montserrat / Sans - Normal case */}
                      <h3 
                        className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight font-sans transition-colors duration-200 ${
                          isActive ? 'text-[#0072CE]' : 'text-slate-800 group-hover:text-[#0072CE]'
                        }`}
                      >
                        {point.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
export default PDAnnouncement;
