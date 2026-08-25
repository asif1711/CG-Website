import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface TopAnnouncementBannerProps {
  isScrolled?: boolean;
}

export const TopAnnouncementBanner: React.FC<TopAnnouncementBannerProps> = ({ isScrolled = false }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const pdSection = document.getElementById('pd-announcement');
    if (pdSection) {
      pdSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.history.pushState(null, '', '/#pd-announcement');
      window.dispatchEvent(new Event('popstate'));
      setTimeout(() => {
        const el = document.getElementById('pd-announcement');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  };

  return (
    <aside 
      aria-label="Professional Development Announcement"
      className={`w-full relative z-50 transition-colors duration-500 overflow-hidden select-none border-b ${
        isScrolled 
          ? 'bg-[#021A38] border-white/10' 
          : 'bg-[#01142B]/90 border-white/10 backdrop-blur-md'
      }`}
    >
      {/* Top Glass Highlight Rim / Lens Specular Effect (matching reference design) */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/80 via-sky-200 to-transparent pointer-events-none opacity-80" 
      />
      {/* Centered Specular Glow Halo */}
      <div 
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[22px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.45)_0%,rgba(14,165,233,0.15)_45%,transparent_75%)] pointer-events-none blur-[4px]" 
      />
      {/* Subtle Downward Ambient Sheen */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_120%_at_50%_0%,rgba(56,189,248,0.08),transparent_80%)] pointer-events-none" 
      />

      <a
        href="#pd-announcement"
        onClick={handleClick}
        className="group relative flex items-center justify-center gap-2 sm:gap-2.5 px-4 py-2 sm:py-2.5 text-center cursor-pointer transition-all duration-300"
      >
        <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs md:text-[13px] text-white/90 group-hover:text-white font-medium tracking-normal transition-colors">
          <span className="hidden sm:inline">Join our upcoming Professional Development Sessions — practical, expert-led workshops for VET leaders</span>
          <span className="inline sm:hidden">Join our Professional Development Sessions</span>
        </span>

        <motion.span 
          className="inline-flex items-center text-sky-400 group-hover:text-sky-300 transition-colors"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
        >
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </motion.span>
      </a>
    </aside>
  );
};
