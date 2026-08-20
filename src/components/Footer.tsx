import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Users } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-3.5 pb-4 md:pt-4.5 md:pb-5.5 overflow-hidden text-primary/80 bg-[#F8FAFC] border-t border-slate-200/60 h-auto font-sans">
      <div className="max-w-full w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-12 xl:gap-20 mb-3 md:mb-4 items-stretch">
          {/* Logo & About Section */}
          <div className="w-full md:w-5/12 flex flex-col justify-start">
            <div className="space-y-2 md:space-y-3 mb-3 md:mb-3.5 lg:mb-3">
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, '', '/');
                  window.location.hash = "";
                  window.dispatchEvent(new Event('popstate'));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-4 group cursor-pointer decoration-none"
              >
                <div className="relative flex items-center justify-center">
                  <img 
                    src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/CG_plain.webp" 
                    alt="Chelson Gordon Logo" 
                    className="h-14 md:h-[72px] w-auto relative z-10 transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-0.5 filter group-hover:brightness-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-primary font-bold text-[14px] md:text-[20px] lg:text-[18px] xl:text-[20px] tracking-widest leading-tight uppercase" style={{ wordSpacing: '0.15em' }}>Chelson Gordon</span>
                  <span className="text-primary font-bold text-[12px] md:text-[16px] lg:text-[14px] xl:text-[16px] uppercase leading-none" style={{ letterSpacing: '0.66em', marginRight: '-0.66em' }}>Consultancy</span>
                </div>
              </a>
              <div className="h-[1.5px] w-full max-w-[280px] md:max-w-[340px] bg-accent/40" />
            </div>

            <p className="text-slate-700 text-[11px] md:text-sm lg:text-[10px] xl:text-[13px] leading-relaxed max-w-lg lg:max-w-md xl:max-w-lg font-medium text-justify">
              All content and materials on this website are protected under the Australian Copyright Act 1968, with all rights reserved by Chelson Gordon Consultancy Pty Ltd. No part of this website may be reproduced, stored, transmitted, distributed, or otherwise used in any form without prior written permission. Unauthorised use may result in penalties for copyright infringement.
            </p>
          </div>
          
          {/* Contact Details with vertical border */}
          <div className="w-full md:w-4/12 md:pl-10 lg:pl-8 xl:pl-12 relative flex flex-col justify-start self-stretch">
            <div className="hidden md:block absolute left-0 top-[2%] bottom-[2%] w-[1.5px] bg-gradient-to-b from-transparent via-[#042F61]/40 to-transparent rounded-full filter blur-[0.5px] opacity-50" />
            <div className="mb-3 lg:mb-2">
              <h4 className="font-bold text-primary mb-1 text-base lg:text-lg tracking-tight">Contact Us</h4>
              <div className="h-0.5 w-16 lg:w-20 bg-accent/60" />
            </div>
            <ul className="space-y-3 md:space-y-5 lg:space-y-3 xl:space-y-5 mt-3 md:mt-6 lg:mt-4">
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 md:p-2 bg-primary/5 rounded-lg text-primary border border-primary/10 group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all duration-300">
                  <img src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/call.svg" alt="Phone" className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" loading="lazy" decoding="async" />
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-4 md:gap-x-8 lg:gap-x-4 xl:gap-x-8">
                  <a href="tel:+61499994530" className="hover:text-accent text-primary transition-colors font-bold text-[12px] md:text-sm lg:text-[11px] xl:text-sm tracking-tight whitespace-nowrap">+61 499 994 530</a>
                  <a href="tel:+66621744994" className="hover:text-accent text-primary transition-colors font-bold text-[12px] md:text-sm lg:text-[11px] xl:text-sm tracking-tight whitespace-nowrap">+66 62 174 4994</a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 md:p-2 bg-primary/5 rounded-lg text-primary border border-primary/15 group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all duration-300">
                  <img src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/email.svg" alt="Email" className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" loading="lazy" decoding="async" />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="mailto:support.coordinator@chelsongordon.com" className="hover:text-accent text-primary transition-colors font-bold text-[11px] md:text-sm lg:text-[10px] xl:text-[13px] tracking-tight block truncate">support.coordinator@chelsongordon.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Action Column with vertical border */}
          <div className="w-full md:w-3/12 md:pl-10 lg:pl-8 xl:pl-12 flex flex-col items-center justify-center self-stretch relative">
            <div className="hidden md:block absolute left-0 top-[2%] bottom-[2%] w-[1.5px] bg-gradient-to-b from-transparent via-[#042F61]/40 to-transparent rounded-full filter blur-[0.5px] opacity-50" />
            <motion.a 
              href="https://mycg.chelsongordon.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 md:py-4 lg:px-5 lg:py-3.5 xl:px-8 xl:py-4 rounded-xl flex items-center gap-3 font-extrabold text-[11px] md:text-[12px] lg:text-[10px] xl:text-[12px] tracking-widest uppercase shadow-lg border transition-all duration-300 relative overflow-hidden group lg:whitespace-nowrap"
            >
              <motion.div 
                variants={{
                  initial: { backgroundColor: '#042F61', borderColor: '#042F61' },
                  hover: { backgroundColor: '#FDB913', borderColor: '#FDB913', scale: 1.05 }
                }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0 z-0"
              />
              <div className="relative z-10 flex items-center gap-3">
                <motion.div 
                  variants={{ 
                    initial: { color: '#FDB913', x: 0 }, 
                    hover: { color: '#042F61', x: -2 } 
                  }} 
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Users className="w-5 h-5" />
                </motion.div>
                <motion.span 
                  variants={{ 
                    initial: { color: '#FFFFFF' }, 
                    hover: { color: '#042F61' } 
                  }} 
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  Staff Intranet
                </motion.span>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Divider Line with Gradient of Brand Blue and Dark Premium Blue */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#042F61]/15 via-[#021E3D]/50 via-[#042F61]/15 to-transparent rounded-full filter blur-[0.5px] opacity-60 mt-1 mb-2.5 md:mt-1.5 md:mb-3.5" />

        <div className="pt-0 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 w-full">
          {/* Left Aligned Copyright */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
            <p className="text-[#042F61] text-[12px] md:text-sm tracking-wide uppercase font-extrabold text-center lg:text-left" style={{ wordSpacing: '0.05em' }}>
              © 2026 Chelson Gordon Consultancy. All Rights Reserved.
            </p>
          </div>

          {/* Centered Policies */}
          <div className="w-full lg:w-4/12 flex justify-center font-sans font-medium">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1.5">
              {[
                { name: 'Terms of use', href: 'https://chelsongordon.com/terms-and-conditions/' },
                { name: 'Privacy Policy', href: 'https://chelsongordon.com/privacy-policy/' },
                { name: 'Cancellation & Refund', href: 'https://chelsongordon.com/cancellation-and-refunds/' }
              ].map(item => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-accent transition-colors font-bold text-[11px] md:text-xs tracking-wider uppercase whitespace-nowrap cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Aligned Social Media Links */}
          <div className="w-full lg:w-3/12 flex items-center justify-center lg:justify-end gap-3 shrink-0">
            <a 
              href="https://www.linkedin.com/company/92809574/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-[#042F61]/5 rounded-lg text-primary border border-[#042F61]/10 hover:bg-[#042F61] hover:border-[#042F61] transition-all duration-300 shadow-sm"
              style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Linkedin className="w-[23px] h-[23px] md:w-[27px] md:h-[27px] text-[#042F61] group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.instagram.com/chelsongordonofficial?igsh=MXhwc3o2ZTRieXJyaQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-[#042F61]/5 rounded-lg border border-[#042F61]/10 hover:bg-[#042F61] hover:border-[#042F61] transition-all duration-300 shadow-sm"
              style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/instagram.svg" alt="Instagram" className="w-[23px] h-[23px] md:w-[27px] md:h-[27px] transition-all group-hover:brightness-0 group-hover:invert" loading="lazy" decoding="async" />
            </a>
            <a 
              href="https://www.youtube.com/@ChelsonGordonConsultancy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-[#042F61]/5 rounded-lg border border-[#042F61]/10 hover:bg-[#042F61] hover:border-[#042F61] transition-all duration-300 shadow-sm"
              style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/youtube.svg" alt="Youtube" className="w-[23px] h-[23px] md:w-[27px] md:h-[27px] transition-all group-hover:brightness-0 group-hover:invert" loading="lazy" decoding="async" />
            </a>
            <a 
              href="https://www.facebook.com/share/15r9QeRt2x/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-[#042F61]/5 rounded-lg border border-[#042F61]/10 hover:bg-[#042F61] hover:border-[#042F61] transition-all duration-300 shadow-sm"
              style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/facebook.svg" alt="Facebook" className="w-[23px] h-[23px] md:w-[27px] md:h-[27px] transition-all group-hover:brightness-0 group-hover:invert" loading="lazy" decoding="async" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
