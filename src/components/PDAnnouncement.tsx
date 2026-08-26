import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Info } from 'lucide-react';

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
 * Partial SVG Dot Grid Pattern Component
 * Uses clean SVG patterns and partial clustered masks to spice up the background
 */
const SvgPartialDotGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none" aria-hidden="true">
      {/* SVG Pattern Definitions */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          {/* Base Navy Dot Grid */}
          <pattern
            id="pd-grid-navy"
            x="0"
            y="0"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill="#042F61" fillOpacity="0.14" />
          </pattern>

          {/* Accent Blue Dot Grid */}
          <pattern
            id="pd-grid-blue"
            x="0"
            y="0"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill="#0072CE" fillOpacity="0.18" />
          </pattern>

          {/* Denser Accent Dot Grid */}
          <pattern
            id="pd-grid-dense"
            x="0"
            y="0"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#0072CE" fillOpacity="0.12" />
          </pattern>
        </defs>
      </svg>

      {/* Cluster 1: Top-Right Cluster behind the icon & header */}
      <div 
        className="absolute -top-10 right-4 sm:right-12 w-72 sm:w-96 h-72 sm:h-96 opacity-90"
        style={{
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 72%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 72%)',
        }}
      >
        <svg className="w-full h-full">
          <rect width="100%" height="100%" fill="url(#pd-grid-blue)" />
        </svg>
      </div>

      {/* Cluster 2: Bottom-Left Cluster beneath the CTA button & headline */}
      <div 
        className="absolute -bottom-14 -left-10 w-80 sm:w-[440px] h-72 sm:h-[380px] opacity-80"
        style={{
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%)',
        }}
      >
        <svg className="w-full h-full">
          <rect width="100%" height="100%" fill="url(#pd-grid-navy)" />
        </svg>
      </div>

      {/* Cluster 3: Structured Partial Accent Matrix near the right column list */}
      <div 
        className="absolute top-1/2 -right-8 -translate-y-1/2 w-64 h-64 opacity-50 hidden lg:block"
        style={{
          maskImage: 'radial-gradient(circle at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 75%)',
          WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 75%)',
        }}
      >
        <svg className="w-full h-full">
          <rect width="100%" height="100%" fill="url(#pd-grid-dense)" />
        </svg>
      </div>

      {/* Cluster 4: Top-Left Subtle Watermark Dot Matrix */}
      <div 
        className="absolute top-6 left-12 w-48 h-36 opacity-40 hidden md:block"
        style={{
          maskImage: 'radial-gradient(ellipse at 40% 40%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 40% 40%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)',
        }}
      >
        <svg className="w-full h-full">
          <rect width="100%" height="100%" fill="url(#pd-grid-navy)" />
        </svg>
      </div>
    </div>
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
      {/* Partial SVG Dot Grid background patterns */}
      <SvgPartialDotGrid />

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

              {/* Action Buttons with matching text & SVG colors and uppercase label */}
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
                  href="mailto:professionaldevelopment@chelsongordon.com?subject=Enquiry%20about%20"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-[#042F61] hover:text-[#0072CE] font-bold text-sm uppercase tracking-wider border border-slate-300 shadow-sm transition-all duration-200 group"
                >
                  <Info className="w-4 h-4 text-[#042F61] group-hover:text-[#0072CE] transition-colors" />
                  <span>GET MORE INFO</span>
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
                src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/PD%20custom%20icon.svg?v=1"
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
