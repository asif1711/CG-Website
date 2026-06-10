import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  ArrowLeft, 
  Network, 
  CircleDot,
  ArrowRight
} from 'lucide-react';

export default function OurTeamsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/50 to-white font-sans pt-[140px] lg:pt-[120px] xl:pt-[140px] 2xl:pt-[160px] pb-20 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10 animate-fade-in">
        
        {/* Navigation & Breadcrumb */}
        <div className="flex justify-center">
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "";
            }}
            className="inline-flex items-center gap-2 text-[#042F61]/70 hover:text-[#042F61] hover:translate-x-[-4px] transition-all font-bold text-xs uppercase tracking-widest cursor-pointer bg-slate-100/80 px-4 py-2.5 rounded-full border border-slate-200/50"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>
        </div>

        {/* Development Status Card */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden max-w-2xl mx-auto">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#042F61]/5 rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FDB913]/5 rounded-tr-full pointer-events-none" />
          
          <div className="relative z-10 space-y-6 flex flex-col items-center">
            {/* Status Batch */}
            <div className="inline-flex items-center gap-2 bg-[#042F61]/5 border border-[#042F61]/10 text-[#042F61] font-black text-[10px] uppercase tracking-widest px-4 py-2 rounded-full">
              <CircleDot className="w-3.5 h-3.5 text-[#FDB913] animate-pulse" />
              Our Teams Directory
            </div>

            {/* Title / Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#042F61] tracking-tight text-center leading-tight">
              This page is under development
            </h1>

            {/* Subtitle / Description */}
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium max-w-lg text-center">
              We are currently designing a comprehensive digital directory. Our new team showcase will feature multidisciplinary specialists across our human strategy, educational consulting, and learning operations units.
            </p>

            {/* Divider */}
            <div className="w-16 h-[2px] bg-[#042F61]/10 rounded-full my-4" />

            {/* Interactive Org Chart Option */}
            <div className="space-y-4 w-full">
              <p className="text-[#042F61] text-xs sm:text-sm font-bold tracking-tight">
                Would you like to explore our real-time company structure?
              </p>
              
              <a
                href="#org-chart"
                className="inline-flex items-center gap-3 bg-[#042F61] text-[#FDB913] font-black text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-full shadow-lg hover:bg-[#042F61]/90 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto justify-center group"
              >
                <Network className="w-4 h-4 text-[#FDB913]" />
                Explore Interactive Org Chart
                <ArrowRight className="w-4 h-4 text-[#FDB913] transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Info */}
        <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-[#042F61]/50 font-bold">
          <Users className="w-4 h-4" />
          Chelson Gordon Strategic Group &copy; 2026
        </div>

      </div>
    </div>
  );
}
