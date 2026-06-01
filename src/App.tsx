/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, animate, useInView } from 'motion/react';
import { 
  ArrowRight, 
  Linkedin, 
  ChevronRight, 
  ChevronLeft, 
  Menu, 
  X, 
  ExternalLink,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  Play,
  ShieldCheck,
  ClipboardCheck,
  LineChart,
  Download,
  ShoppingBag,
  Plus,
  Minus,
  Languages,
  ChevronDown,
  RefreshCw
} from 'lucide-react';
import { NeatGradient } from "@firecms/neat";
import OrgChart from "./OrgChart";

// --- Types ---
interface TeamMember {
  name: string;
  role: string;
  description: string;
  highlights: string[];
  linkedin: string;
  image: string;
}

interface PortfolioItem {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  logo: string;
}

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
}

const LANGUAGES = [
  { name: 'Arabic', code: 'AR', english: 'Arabic', native: 'عربي' },
  { name: 'Chinese', code: 'ZH', english: 'Chinese', native: '中国人' },
  { name: 'Hindi', code: 'HI', english: 'Hindi', native: 'हिन्दी' },
  { name: 'Thai', code: 'TH', english: 'Thai', native: 'ไทย' },
  { name: 'Vietnamese', code: 'VI', english: 'Vietnamese', native: 'Tiếng Việt' },
];

// --- Components ---

const CountingNumber = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest))
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref} className="notranslate">{displayValue}{suffix}</span>;
};

import { 
  BRAND_CONFIG,
  HERO_VIDEO_URL,
  STATS,
  LOGO_URL,
  LOGO_WHITE_URL
} from './constants';

const getLangDisplay = (selected: string) => {
  switch (selected) {
    case 'English': return 'ENG';
    case 'Arabic': return 'ARA';
    case 'Chinese': return 'CHI';
    case 'Hindi': return 'HIN';
    case 'Thai': return 'THA';
    case 'Vietnamese': return 'VIE';
    default: return 'ENG';
  }
};

const LanguageSelector = ({ isScrolled, selectedLang, onLanguageChange }: { isScrolled: boolean; selectedLang: string; onLanguageChange: (code: string, name: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 lg:px-2.5 xl:px-4 py-2 lg:py-2 xl:py-2.5 rounded-lg xl:rounded-xl text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-all border shadow-sm notranslate bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-md"
        translate="no"
        style={isScrolled ? { backgroundColor: 'rgba(4, 47, 97, 0.05)', color: '#042F61', borderColor: 'rgba(4, 47, 97, 0.1)' } : {}}
      >
        <Languages className="w-3.5 h-3.5" />
        <span className="inline">{getLangDisplay(selectedLang)}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="absolute right-0 mt-3 w-[270px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-[100]"
          >
            <div className="py-2">
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ backgroundColor: 'rgba(249, 115, 22, 0.08)', x: 3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onLanguageChange('EN', 'English');
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-5 py-4 border-b border-orange-100 bg-orange-50/50 text-[10.5px] font-extrabold uppercase tracking-widest text-[#042F61] transition-all text-left group notranslate"
                translate="no"
              >
                <RefreshCw className="w-3.5 h-3.5 text-orange-500 transition-transform duration-500 group-hover:rotate-180" />
                <span className="text-orange-950 font-black">Reset to English</span>
              </motion.button>
              {LANGUAGES.map((lang, idx) => (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.04, duration: 0.2 }}
                  whileHover={{ 
                    x: 3, 
                    backgroundColor: selectedLang === lang.name ? 'rgb(4, 47, 97)' : 'rgba(4, 47, 97, 0.04)' 
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onLanguageChange(lang.code, lang.name);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-5 py-3.5 text-[11px] font-bold uppercase tracking-widest transition-all notranslate ${
                    selectedLang === lang.name 
                      ? 'bg-[#042F61] text-white font-black' 
                      : 'text-primary'
                  }`}
                  translate="no"
                >
                  <span className="whitespace-nowrap">{lang.english}</span>
                  <span className={`w-[1px] h-3.5 flex-shrink-0 ${selectedLang === lang.name ? 'bg-white/30' : 'bg-[#042F61]/20'}`} />
                  <span className={`whitespace-nowrap text-[12px] font-bold normal-case tracking-normal ${selectedLang === lang.name ? 'text-white' : 'text-[#042F61]'}`}>{lang.native}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem('selected_language_name') || 'English';
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Initial language detection from cookie or localStorage
    const getCookie = (name: string) => {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.startsWith(name + '=')) {
          let val = c.substring(name.length + 1);
          if (val.startsWith('"') && val.endsWith('"')) {
            val = val.slice(1, -1);
          }
          return decodeURIComponent(val);
        }
      }
      return null;
    };

    const currentTrans = getCookie('googtrans');
    if (currentTrans) {
      let lang = currentTrans.split('/').pop()?.toUpperCase() || '';
      lang = lang.replace(/["\s]/g, '');
      if (lang === 'EN') {
        setSelectedLang('English');
        localStorage.setItem('selected_language_name', 'English');
      } else if (lang) {
        const found = LANGUAGES.find(l => l.code === (lang === 'ZH-CN' ? 'ZH' : lang));
        if (found) {
          setSelectedLang(found.name);
          localStorage.setItem('selected_language_name', found.name);
        }
      }
    } else {
      const saved = localStorage.getItem('selected_language_name');
      if (saved) {
        setSelectedLang(saved);
      }
    }

    // Add Google Translate script if not already present
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'ar,zh-CN,hi,th,vi',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'google_translate_element');
    };

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (langCode: string, langName: string) => {
    setSelectedLang(langName);
    localStorage.setItem('selected_language_name', langName);
    let targetCode = langCode.toLowerCase();
    if (targetCode === 'zh') targetCode = 'zh-CN';
    
    const domain = window.location.hostname;
    const domainParts = domain.split('.');

    if (targetCode === 'en') {
      // Robust cookie purge across all paths and domains/subdomains
      const expireStr = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
      const paths = ["/", "/en/", "/en-US/"];
      const domains = [
        "", 
        domain, 
        `.${domain}`,
        domainParts.slice(-2).join('.'),
        `.${domainParts.slice(-2).join('.')}`
      ];
      
      for (const d of domains) {
        for (const p of paths) {
          document.cookie = `googtrans=; path=${p}; ${d ? `domain=${d};` : ''} ${expireStr}`;
          document.cookie = `googtrans=; ${d ? `domain=${d};` : ''} ${expireStr}`;
        }
      }

      // Try calling Google Translate's built-in Restore
      try {
        const iframe = document.querySelector('iframe.goog-te-banner-frame') as HTMLIFrameElement;
        if (iframe && iframe.contentDocument) {
          const restoreBtn = iframe.contentDocument.getElementById('BannerRestoreBtn') || iframe.contentDocument.querySelector('.goog-te-button button');
          if (restoreBtn) {
            (restoreBtn as HTMLElement).click();
          }
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      const cookieValue = `/en/${targetCode}`;
      
      // Set the translation cookie across domains & subdomains
      document.cookie = `googtrans=${cookieValue}; path=/`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=.${domain}`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain}`;
      
      if (domainParts.length > 2) {
        const parentDomain = domainParts.slice(1).join('.');
        document.cookie = `googtrans=${cookieValue}; path=/; domain=.${parentDomain}`;
        document.cookie = `googtrans=${cookieValue}; path=/; domain=${parentDomain}`;
      }
    }

    const googleCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googleCombo) {
      googleCombo.value = targetCode === 'en' ? '' : targetCode;
      googleCombo.dispatchEvent(new Event('change'));
      if (targetCode === 'en') {
        setTimeout(() => {
          window.location.reload();
        }, 150);
      }
    } else {
      setTimeout(() => {
        const retryCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (retryCombo) {
          retryCombo.value = targetCode === 'en' ? '' : targetCode;
          retryCombo.dispatchEvent(new Event('change'));
          if (targetCode === 'en') {
            setTimeout(() => {
              window.location.reload();
            }, 150);
          }
        } else {
          window.location.reload();
        }
      }, 500);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-full mx-auto w-full px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-[4%] h-[120px] lg:h-[100px] xl:h-[120px] 2xl:h-[140px] flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center gap-3">
             <img 
               src={isScrolled ? LOGO_URL : (logoError ? LOGO_URL : LOGO_WHITE_URL)} 
               alt="Chelson Gordon Logo" 
               className={`h-[145px] md:h-[125px] lg:h-[110px] xl:h-[145px] 2xl:h-[170px] w-auto transition-all transform origin-left ${!isScrolled && logoError ? 'brightness-0 invert' : ''}`}
               onError={() => !isScrolled && setLogoError(true)}
               referrerPolicy="no-referrer"
             />
          </a>
        </div>

        {/* Right Section: Nav + Buttons */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-8 justify-end ml-auto min-w-0">
          {/* Nav links */}
          <div className="flex items-center gap-3.5 xl:gap-5 2xl:gap-7 mr-1 xl:mr-2 flex-shrink-0">
            {['About Us', 'Our Services', 'Our People', 'Careers'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-all hover:text-accent whitespace-nowrap ${isScrolled ? 'text-primary' : 'text-white'}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3 flex-shrink-0">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1 px-2.5 lg:px-2.5 xl:px-4 py-2 lg:py-2 xl:py-2.5 rounded-lg xl:rounded-xl text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap shadow-md border border-transparent ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-accent hover:text-primary' 
                  : 'bg-accent text-primary hover:bg-primary hover:text-white'
              }`}
            >
              Get in Touch <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1 px-2.5 lg:px-2.5 xl:px-4 py-2 lg:py-2 xl:py-2.5 rounded-lg xl:rounded-xl text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap shadow-sm border border-transparent ${
                isScrolled 
                  ? 'bg-accent text-primary hover:bg-primary hover:text-white' 
                  : 'bg-primary text-white hover:bg-accent hover:text-primary'
              }`}
            >
              Company Profile <Download className="w-3.5 h-3.5" />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1 px-2.5 lg:px-2.5 xl:px-4 py-2 lg:py-2 xl:py-2.5 rounded-lg xl:rounded-xl text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border shadow-sm ${isScrolled ? 'bg-primary/5 text-primary border-primary/10 hover:bg-primary/10' : 'bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-md'}`}
            >
              CG Resources <ShoppingBag className="w-3.5 h-3.5" />
            </motion.button>

            <LanguageSelector 
              isScrolled={isScrolled} 
              selectedLang={selectedLang}
              onLanguageChange={changeLanguage}
            />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden ml-auto relative z-[60]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={isScrolled || mobileMenuOpen ? 'text-primary' : 'text-white'} size={32} /> : <Menu className={isScrolled ? 'text-primary' : 'text-white'} size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto h-screen"
          >
            <div className="flex flex-col p-6 pt-20 pb-10">
              <div className="flex flex-col gap-5 mb-10">
                {['About Us', 'Our Services', 'Our People', 'Careers'].map((item, idx) => (
                  <motion.a 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-black text-primary uppercase tracking-tighter hover:text-accent transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              <div className="space-y-4">
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-extrabold uppercase tracking-widest text-sm shadow-xl"
                >
                  Get in Touch <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <div className="grid grid-cols-2 gap-3">
                  <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-accent text-primary font-bold uppercase tracking-widest text-[10px] shadow-md"
                  >
                    Company Profile <Download className="w-4 h-4" />
                  </motion.button>

                  <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-primary/5 text-primary border border-primary/10 font-bold uppercase tracking-widest text-[10px]"
                  >
                    Resources <ShoppingBag className="w-4 h-4" />
                  </motion.button>
                </div>

                <div className="pt-8 mt-8 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-4 notranslate" translate="no">
                    <Languages className="w-4 h-4 text-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40">Select Language</span>
                  </div>

                  {/* Mobile Reset to English Button */}
                  <motion.button 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      changeLanguage('EN', 'English');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 mb-3.5 py-3.5 rounded-xl border border-orange-200 bg-orange-50/50 text-orange-950 text-[10px] font-extrabold uppercase tracking-widest transition-all active:scale-95 notranslate"
                    translate="no"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-orange-500" />
                    <span>Reset to English</span>
                  </motion.button>

                  <div className="grid grid-cols-2 gap-2">
                    {LANGUAGES.map((lang, idx) => (
                      <motion.button 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + idx * 0.05 }}
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code, lang.name);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex flex-col items-center justify-center gap-1.5 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 notranslate ${
                          selectedLang === lang.name 
                            ? 'bg-primary text-white shadow-lg' 
                            : 'bg-primary/5 text-primary border border-primary/10 hover:bg-accent'
                        }`}
                        translate="no"
                      >
                        <span className="whitespace-nowrap">{lang.english}</span>
                        <div className={`w-6 h-[1px] ${selectedLang === lang.name ? 'bg-white/30' : 'bg-primary/20'}`} />
                        <span className={`text-[11px] font-bold normal-case tracking-normal select-none ${selectedLang === lang.name ? 'text-white' : 'text-primary'}`}>{lang.native}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center lg:items-start xl:items-center overflow-hidden lg:pb-0 xl:pb-0">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-primary-dark">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          width="1920"
          height="1080"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover w-auto h-auto max-w-none"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-12 lg:pt-[220px] xl:pt-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-[42px] xl:text-[47px] text-white leading-[1.2] mb-6 lg:mb-10 font-semibold tracking-tight text-balance">
              Empowering the Future of Vocational Education Compliance
            </h1>
            <p className="text-lg lg:text-base xl:text-xl text-white/80 mb-8 lg:mb-6 xl:mb-12 max-w-xl leading-relaxed font-medium">
              We deliver end-to-end consultancy solutions for Australia’s VET sector, specialising in RTO and CRICOS registration, compliance, and operational support.
            </p>
            <div className="flex flex-wrap gap-6 items-center lg:pb-12 xl:pb-0">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white hover:bg-accent hover:text-primary px-8 py-4 xl:px-10 xl:py-5 rounded-full font-extrabold uppercase tracking-widest text-[12px] xl:text-[13px] flex items-center gap-3 transition-all shadow-2xl group border border-transparent"
              >
                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex flex-col items-end gap-10 xl:gap-16"
          >
            <div className="bg-white/10 backdrop-blur-2xl p-6 xl:p-10 rounded-[2rem] xl:rounded-[2.5rem] border border-white/20 w-64 xl:w-80 shadow-2xl">
              <div className="text-4xl xl:text-6xl font-black text-accent mb-2 xl:mb-3 tabular-nums">
                <CountingNumber value={50} suffix="+" />
              </div>
              <div className="text-white/60 text-[10px] xl:text-xs font-bold tracking-[0.2em] uppercase">RTOs Supported</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Logos = () => {
  const logos = [
    { name: "AIBT", url: "https://aibtglobal.edu.au/u", logo: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/AIBT.svg" },
    { name: "AIBT-I", url: "https://aibti.edu.au", logo: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/AIBT-I.svg" },
    { name: "AVTA", url: "https://avta.edu.au", logo: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/AVTA.svg" },
    { name: "NPA", url: "https://npa.edu.au", logo: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/NPA.svg", scale: 0.75 },
    { name: "REACH", url: "https://reachcollege.edu.au", logo: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/REACH.svg" },
    { name: "BIC", url: "https://brooklyn.edu.au", logo: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/BIC.svg" },
    { name: "HJ", url: "https://hjaustralianinstitute.edu.au", logo: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/HJ.svg" },
    { name: "PIVOT", url: "http://pivoteducation.edu.au", logo: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/PIVOT.svg", scale: 1.2 },
    { name: "PROFOUND", url: "https://profound.nsw.edu.au", logo: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/PROFOUND.svg" },
  ];

  const LogoItem = ({ item }: { item: { name: string, url: string, logo: string, scale?: number }, key?: string | number }) => {
    const [hasError, setHasError] = useState(false);
    
    return (
      <motion.a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center shrink-0"
        whileHover={{ scale: 1.1, y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        style={{ width: '180px', height: '80px' }}
      >
        {item.logo && !hasError ? (
          <img 
            src={item.logo} 
            alt={item.name} 
            onError={() => {
              console.error(`Failed to load logo for ${item.name}: ${item.logo}`);
              setHasError(true);
            }}
            className="object-contain opacity-100" 
            style={{ 
              width: '180px', 
              height: '80px',
              transform: item.scale ? `scale(${item.scale})` : 'none'
            }}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="text-xl md:text-2xl font-black tracking-tighter text-primary whitespace-nowrap">
            {item.name}
          </div>
        )}
      </motion.a>
    );
  };

  return (
    <section className="border-b border-gray-100 bg-white overflow-hidden h-[120px] lg:h-[110px] xl:h-[120px] flex items-center relative">
      {/* Premium edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      
      <div className="w-full flex items-center">
        <motion.div 
          className="flex items-center gap-12 md:gap-16 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* We display the list twice for a seamless loop */}
          {[...logos, ...logos].map((logo, idx) => (
            <LogoItem key={`${logo.name}-${idx}`} item={logo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker,
  Sphere,
  Graticule,
  Line
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const WorldMapGraphic = () => {
  const [activeLoc, setActiveLoc] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  
  const locations = [
    { 
      name: "India", 
      coordinates: [78.9629, 20.5937], 
      stats: [
        { label: "Kolkata", value: 40 },
        { label: "Udaipur", value: 8 }
      ]
    },
    { 
      name: "Thailand", 
      coordinates: [100.9925, 15.8700], 
      stats: [
        { label: "Bangkok", value: 14 }
      ]
    },
    { 
      name: "Philippines", 
      coordinates: [121.7740, 12.8797], 
      stats: [
        { label: "Core Team", value: 14 }
      ]
    },
    { 
      name: "Singapore", 
      coordinates: [103.851959, 1.290270], 
      stats: [
        { label: "Global Hub", value: 6 }
      ]
    },
    { 
      name: "Australia", 
      coordinates: [133.7751, -25.2744], 
      stats: [
        { label: "Brisbane", value: 8 },
        { label: "Sydney", value: 2 }
      ]
    },
    { 
      name: "Fiji", 
      coordinates: [178.4419, -18.1416], 
      stats: [
        { label: "Lautoka", value: 10 }
      ]
    },
  ];

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
    <div className="relative w-full aspect-[4/3]">
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
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[12px] font-black text-primary uppercase tracking-widest">{loc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 w-full h-full">
          <ComposableMap 
            projection="geoMercator"
            projectionConfig={{
              scale: 320,
              center: [125, 0]
            }}
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
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const name = geo.properties.name;
                    const isHighlighted = ["Australia", "India", "Thailand", "Philippines", "Singapore", "Fiji"].includes(name);
                    return !isHighlighted ? (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="white"
                        stroke="none"
                      />
                    ) : null;
                  })
                }
              </Geographies>
            </mask>

            {/* Mask for only highlighted operational areas */}
            <mask id="highlightLandMask">
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const name = geo.properties.name;
                    const isHighlighted = ["Australia", "India", "Thailand", "Philippines", "Singapore", "Fiji"].includes(name);
                    return isHighlighted ? (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="white"
                        stroke="none"
                      />
                    ) : null;
                  })
                }
              </Geographies>
              {/* Manual buffers for small island nations and city states */}
              {locations.map(loc => (
                <Marker key={`mask-marker-${loc.name}`} coordinates={loc.coordinates as [number, number]}>
                  <circle r={loc.name === "Singapore" ? "8" : loc.name === "Fiji" ? "12" : "0"} fill="white" />
                </Marker>
              ))}
            </mask>
          </defs>

          <Graticule stroke="#F1F5F9" strokeWidth={0.5} opacity={0.3} />

          <rect width="100%" height="100%" fill="url(#landDots)" mask="url(#generalLandMask)" className="pointer-events-none" />
          <rect width="100%" height="100%" fill="url(#highlightDots)" mask="url(#highlightLandMask)" className="pointer-events-none" />

          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties.name;
                const isHighlighted = ["Australia", "India", "Thailand", "Philippines", "Singapore", "Fiji"].includes(name);
                return (
                  <Geography
                    key={`outline-${geo.rsmKey}`}
                    geography={geo}
                    fill="transparent"
                    stroke={isHighlighted ? "var(--color-accent)" : "#E2E8F0"}
                    strokeWidth={isHighlighted ? 0.6 : 0.3}
                    strokeOpacity={isHighlighted ? 0.4 : 0.2}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Network Connections */}
          <g stroke="var(--color-primary)" strokeWidth="0.6" strokeOpacity="0.25" fill="none">
            {/* Hub-and-Spoke from Singapore */}
            {locations.map((loc) => {
              if (loc.name === "Singapore") return null;
              return (
                <Line
                  key={`line-hub-${loc.name}`}
                  from={loc.coordinates as [number, number]}
                  to={[103.851959, 1.290270]} // Singapore HQ
                  strokeDasharray="3,3"
                />
              );
            })}
            {/* Additional interconnects for mesh feel */}
            <Line from={[133.7751, -25.2744]} to={[178.4419, -18.1416]} strokeDasharray="3,3" /> {/* Aus - Fiji */}
            <Line from={[78.9629, 20.5937]} to={[100.9925, 15.8700]} strokeDasharray="3,3" /> {/* India - Thailand */}
            <Line from={[121.7740, 12.8797]} to={[103.851959, 1.290270]} strokeDasharray="3,3" /> {/* Phil - Sing */}
          </g>

          {/* Interactive Locations - Points */}
          {locations.map((loc) => (
            <Marker key={`point-${loc.name}`} coordinates={loc.coordinates as [number, number]}>
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
            </Marker>
          ))}
        </ComposableMap>
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
                className="bg-primary text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-6 border border-white/10 relative w-[240px]"
              >
                <div className="flex flex-col gap-4">
                  <div className="border-b border-white/10 pb-3">
                    <h4 className="text-[16px] font-black uppercase tracking-widest text-accent leading-none">{loc.name}</h4>
                  </div>
                  <div className="space-y-4">
                    {loc.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-6">
                        {!(loc.name === "Singapore" || loc.name === "Philippines") && (
                          <span className="text-[18px] text-white font-medium whitespace-nowrap">{stat.label}</span>
                        )}
                        <span 
                          className="text-[16px] text-white whitespace-nowrap"
                          style={{ fontWeight: 650 }}
                        >
                          {stat.value} Staff
                        </span>
                      </div>
                    ))}
                  </div>
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

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-[91px] xl:py-24 bg-gradient-to-b from-[#042F61]/[0.18] via-[#042F61]/[0.04] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <WorldMapGraphic />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            className="lg:pl-12"
          >
            <h2 className="text-4xl leading-tight mb-8 text-primary max-w-md">
             Globally Connected Expertise.
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
             We combine international presence with multidisciplinary expertise to deliver tailored and results-oriented solutions. Our collaborative approach supports organisations in achieving efficiency, innovation, and long-term success.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-bold text-primary border-b-2 border-accent pb-1 hover:gap-4 transition-all mb-12">
              More about Our Presence <ArrowRight className="w-4 h-4" />
            </a>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-100">
              <div>
                <div className="text-3xl font-bold text-primary">
                  <CountingNumber value={50} suffix="+" />
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">RTOs Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">
                  <CountingNumber value={7} />
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Global Locations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">
                  <CountingNumber value={20} suffix="+" />
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Experienced Consultants</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



const AccordionItem = ({ id, number, title, description, isActive, onClick }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={false}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        backgroundColor: isActive 
          ? (isHovered ? 'rgba(241, 245, 249, 1.0)' : 'rgba(241, 245, 249, 0.92)') 
          : (isHovered ? 'rgba(241, 245, 249, 0.45)' : 'rgba(255, 255, 255, 0)'),
        paddingLeft: (isActive || isHovered) ? '24px' : '0px',
        paddingRight: (isActive || isHovered) ? '24px' : '0px',
        marginLeft: (isActive || isHovered) ? '-24px' : '0px',
        marginRight: (isActive || isHovered) ? '-24px' : '0px',
        borderRadius: (isActive || isHovered) ? '30px' : '0px',
        borderColor: (isActive || isHovered) ? 'rgba(243, 244, 246, 0)' : 'rgba(243, 244, 246, 1)'
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      className="border-b py-8 cursor-pointer select-none"
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <motion.span 
            animate={{ color: isActive ? '#042F61' : '#021E3D' }}
            transition={{ duration: 0.2 }}
            className="font-bold text-lg"
          >
            {number}
          </motion.span>
          <motion.h3 
            animate={{ color: isActive ? '#042F61' : '#021E3D' }}
            transition={{ duration: 0.2 }}
            className="text-xl font-bold"
          >
            {title}
          </motion.h3>
        </div>
        <motion.div 
          animate={{ 
            rotate: isActive ? 90 : 0, 
            backgroundColor: isActive ? '#042F61' : '#f3f4f6', 
            color: isActive ? '#ffffff' : '#021E3D',
            scale: isActive ? 1.05 : 1
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="p-2.5 rounded-full flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key={`${id}-content`}
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ 
              height: 'auto', 
              opacity: 1, 
              y: 0,
              transition: {
                height: { type: 'spring', stiffness: 150, damping: 20 },
                opacity: { duration: 0.25 },
                y: { type: 'spring', stiffness: 200, damping: 18 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0, 
              y: -10,
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.15 },
                y: { duration: 0.15 }
              }
            }}
            className="overflow-hidden ml-16"
          >
            <div className="pt-4 pb-1">
              <p className="leading-relaxed max-w-xl text-[#042F61]">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};



const Capabilities = () => {
  const [activeTab, setActiveTab] = useState('01');
  const items = [
    { id: '01', title: 'RTO Solutions', description: 'We deliver end-to-end regulatory, compliance, legal, and audit support across approvals, re-registrations, and ongoing governance requirements.' },
    { id: '02', title: 'Academic Operations', description: 'We help strengthening academic operations through compliant documentation, process optimisation, and quality assurance to support regulatory alignment, operational efficiency, and audit readiness.' },
    { id: '03', title: 'Resources', description: 'We provide compliant training and assessment resources aligned with Australian qualification standards to support quality delivery, efficiency, and improved learner outcomes.' },
    { id: '04', title: 'Transnational Programs', description: 'We deliver flexible transnational education solutions with integrated training, assessment, and quality assurance support to ensure consistent quality, compliance, and successful global delivery. ' },
  ];

  return (
    <section id="investment-criteria" className="py-24 lg:py-[91px] xl:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl leading-[1.1] mb-8 text-[#042F61]">
              Strategic Solutions. Built for VET organisations.
            </h2>
            <div className="flex flex-col gap-8 max-w-sm">
               <p className="text-[#021E3D] text-lg opacity-90">
                We deliver end-to-end practical, compliance-focused solutions across RTO operations with structured planning in multiple countries.
              </p>
              <motion.button 
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold w-fit shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
              >
                Discover more{' '}
                <motion.span
                  variants={{
                    initial: { x: 0 },
                    hover: { x: 5 }
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                  className="inline-block"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </div>
          </div>

          <div className="flex flex-col">
            {items.map((item) => (
              <AccordionItem 
                key={item.id}
                id={item.id}
                number={item.id}
                title={item.title}
                description={item.description}
                isActive={activeTab === item.id}
                onClick={() => setActiveTab(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  
  const items = [
    { 
      name: 'Marketing Team', 
      category: 'Strategic Communications', 
      logo: 'MK', 
      image: 'https://storage.googleapis.com/chelsongordon/com.chelsongordon/images/MARKETING.webp',
      description: 'Elevating the brand with compliant marketing resources that enhance student engagement, strengthen visibility, and drive enrolment confidence.',
      color: '#2d3436'
    },
    { 
      name: 'Consultant Team', 
      category: 'Regulatory Advisory', 
      logo: 'CT', 
      image: 'https://storage.googleapis.com/chelsongordon/com.chelsongordon/images/CONSULTANCY.webp',
      description: 'We support organisations with ongoing training, regulatory guidance, compliant resources, and operational assistance to maintain audit readiness and compliance confidence.',
      color: '#0984e3'
    },
    { 
      name: 'Human Strategy Team', 
      category: 'Talent & Culture', 
      logo: 'HS', 
      image: 'https://storage.googleapis.com/chelsongordon/com.chelsongordon/images/HR.webp',
      description: 'We deliver strategic workforce and talent solutions that support organisational performance and sustainable growth.',
      color: '#6c5ce7'
    },
    { 
      name: 'Learning & Academic Operations Team', 
      category: 'Educational Excellence', 
      logo: 'LA', 
      image: 'https://storage.googleapis.com/chelsongordon/com.chelsongordon/images/L%26O.webp',
      description: 'We help enhancing RTO performance through compliant documentation, quality assurance, and audit-ready systems that strengthen training delivery, academic operations, and learner outcomes.',
      color: '#00b894'
    },
    { 
      name: 'Executive Assistant Team', 
      category: 'Business Support', 
      logo: 'EA', 
      image: 'https://storage.googleapis.com/chelsongordon/com.chelsongordon/images/EXECUTIVE.webp',
      description: 'We deliver seamless executive, administrative, and financial support to ensure efficient operations and organisational effectiveness.',
      color: '#00b894'
    }
  ];

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section id="portfolio" className="pt-16 pb-24 lg:pt-[59px] lg:pb-[91px] xl:pt-16 xl:pb-24 bg-gray-50/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 mb-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="w-12 h-1 bg-accent rounded-full" />
              <span className="text-primary font-extrabold uppercase tracking-[2px] text-[18px] md:text-[25px]">Meet Our Teams</span>
            </div>
            <h2 className="text-[24px] md:text-[30px] text-primary font-semibold tracking-tight leading-[1.1] max-w-xl">
              A Global Team Built on Expertise, Innovation, and Industry Insight
            </h2>
          </div>
          <div className="flex gap-4">
            <a href="#org-chart" className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-primary-light transition-all flex items-center gap-2 group">
               Explore Our Teams <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center h-[600px] md:h-[520px] [perspective:1000px] max-w-[1400px] mx-auto group">
        {/* Navigation Arrows */}
        <div className="absolute inset-x-2 md:inset-x-10 flex justify-between items-center z-50 pointer-events-none">
          <button 
            onClick={prev}
            className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-md border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all group pointer-events-auto shadow-2xl"
          >
            <ChevronLeft className="w-6 h-6 md:w-10 md:h-10 group-active:scale-90 transition-transform" />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-md border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all group pointer-events-auto shadow-2xl"
          >
            <ChevronRight className="w-6 h-6 md:w-10 md:h-10 group-active:scale-90 transition-transform" />
          </button>
        </div>

        <div className="relative w-full h-full flex justify-center items-center">
          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              // Calculate relative position
              let position = i - index;
              if (position < -2) position += items.length;
              if (position > 2) position -= items.length;

              const isActive = position === 0;
              const isVisible = Math.abs(position) <= 1;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8, x: position * (window.innerWidth < 768 ? 300 : 400), zIndex: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0.25,
                    scale: isActive ? 1 : 0.85,
                    x: position * (window.innerWidth < 768 ? 200 : 350),
                    zIndex: isActive ? 10 : 0,
                    filter: isActive ? 'blur(0px)' : 'blur(8px)',
                    rotateY: position * 15,
                  }}
                  exit={{ opacity: 0, scale: 0.5, x: position * (window.innerWidth < 768 ? 400 : 500) }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20, 
                    mass: 0.8,
                    opacity: { duration: 0.4 }
                  }}
                  className="absolute w-[95%] md:w-[800px] h-[550px] md:h-[480px]"
                >
                  <div className="bg-white/30 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full border border-white/50">
                    <div className="h-auto md:h-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white/60 backdrop-blur-md">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl md:text-4xl font-bold text-primary mb-2 md:mb-4 leading-tight tracking-tight">{item.name}</h3>
                        <p className="hidden md:block text-gray-500 text-xs md:text-base leading-relaxed mb-4 md:mb-6 font-medium">
                          {item.description}
                        </p>
                      </div>
                      <button className="flex items-center justify-center gap-3 text-white font-bold text-[10px] md:text-sm uppercase tracking-widest bg-primary/90 backdrop-blur-md hover:bg-accent hover:text-primary border border-white/20 p-4 md:p-6 rounded-xl md:rounded-2xl w-fit px-8 md:px-10 transition-all hover:shadow-xl">
                        View Team <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex-1 md:h-full md:w-1/2 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-primary/10" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Principles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cards = [
    { 
      title: "Integrated compliance, legal, academic, and operational support for RTOs and CRICOS providers.", 
      icon: <ShieldCheck className="w-8 h-8" /> 
    },
    { 
      title: "Improving audit readiness, operational efficiency, and student experience outcomes.", 
      icon: <ClipboardCheck className="w-8 h-8" /> 
    },
    { 
      title: "End-to-end solutions supporting provider growth, performance, and compliance confidence.", 
      icon: <LineChart className="w-8 h-8" /> 
    }
  ];

  useEffect(() => {
    let gradientInstance: any = null;

    if (canvasRef.current) {
      const config = {
        colors: [
          {
            color: '#021E3D',
            enabled: true,
          },
          {
            color: '#064082',
            enabled: true,
          },
          {
            color: '#042F61',
            enabled: true,
          },
          {
            color: '#5982D9',
            enabled: true,
          },
          {
            color: '#c81d25',
            enabled: false,
          },
          {
            color: '#A8E6CF',
            enabled: false,
          },
        ],
        speed: 6.5,
        horizontalPressure: 4,
        verticalPressure: 3,
        waveFrequencyX: 0,
        waveFrequencyY: 0,
        waveAmplitude: 0,
        shadows: 2,
        highlights: 7,
        colorBrightness: 0.9,
        colorSaturation: 4,
        wireframe: false,
        colorBlending: 5,
        backgroundColor: '#042F61',
        backgroundAlpha: 1,
        grainScale: 0,
        grainSparsity: 0,
        grainIntensity: 0,
        grainSpeed: 0,
        resolution: 0.5,
        yOffset: 0,
        yOffsetWaveMultiplier: 1.5,
        yOffsetColorMultiplier: 1.8,
        yOffsetFlowMultiplier: 2,
        flowDistortionA: 0.4,
        flowDistortionB: 3,
        flowScale: 3.3,
        flowEase: 0.53,
        flowEnabled: false,
        enableProceduralTexture: false,
        textureVoidLikelihood: 0.06,
        textureVoidWidthMin: 10,
        textureVoidWidthMax: 500,
        textureBandDensity: 0.8,
        textureColorBlending: 0.06,
        textureSeed: 333,
        textureEase: 0.75,
        proceduralBackgroundColor: '#003FFF',
        textureShapeTriangles: 20,
        textureShapeCircles: 15,
        textureShapeBars: 15,
        textureShapeSquiggles: 10,
        domainWarpEnabled: false,
        domainWarpIntensity: 0,
        domainWarpScale: 3,
        vignetteIntensity: 0,
        vignetteRadius: 0.8,
        fresnelEnabled: false,
        fresnelPower: 2,
        fresnelIntensity: 0.5,
        fresnelColor: '#FFFFFF',
        iridescenceEnabled: false,
        iridescenceIntensity: 0.5,
        iridescenceSpeed: 1,
        bloomIntensity: 0,
        bloomThreshold: 0.7,
        chromaticAberration: 0,
      };

      try {
        gradientInstance = new NeatGradient({
          ref: canvasRef.current,
          ...config
        });
      } catch (err) {
        console.error("Failed to initialize NeatGradient Instance:", err);
      }

      // Proactively search and remove any generated watermark link
      const removeWatermark = () => {
        const watermark = document.querySelector('a[href*="neat.firecms"]') || document.getElementById('XiSVi8');
        if (watermark) {
          watermark.remove();
        }
      };

      removeWatermark();
      const watermarkInterval = setInterval(removeWatermark, 100);

      const handleScroll = () => {
        if (gradientInstance) {
          try {
            gradientInstance.yOffset = window.scrollY;
          } catch (e) {
            // handle silently
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        clearInterval(watermarkInterval);
        window.removeEventListener("scroll", handleScroll);
        if (gradientInstance && typeof gradientInstance.destroy === "function") {
          try {
            gradientInstance.destroy();
          } catch (e) {
            // handle silently
          }
        }
      };
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center py-16 lg:py-[59px] xl:py-16 overflow-hidden bg-[#042F61]">
      {/* Animated Neat Gradient Canvas Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <canvas id="gradient" ref={canvasRef} style={{ width: '100%', height: '100%' }} className="pointer-events-none opacity-70" />
      </div>
      
      {/* Brand Accent Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent rounded-full blur-[180px] z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.03, 0.08, 0.03],
          x: [0, -100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-accent rounded-full blur-[180px] z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-accent bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 font-bold uppercase tracking-[0.15em] text-xs md:text-sm"
            style={{ wordSpacing: '0.4em' }}
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-ping" /> 360° Compliance & Support
          </motion.div>
          <h2 
            className="text-4xl md:text-[3.5rem] text-white tracking-[0.02em] mb-4"
            style={{ fontWeight: 750 }}
          >
            {"Why Partner With Us?".split("").map((char, i) => (
              <motion.span
                key={char + i}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.03,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="inline-block whitespace-pre"
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 100, 
                  scale: 0.8,
                  filter: "blur(15px)",
                  rotateX: 15
                },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  filter: "blur(0px)",
                  rotateX: 0,
                  transition: {
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 group hover:bg-white/10 hover:border-accent/50 transition-all cursor-default relative overflow-hidden h-full flex flex-col justify-start"
              style={{ perspective: 1200 }}
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-8 p-5 bg-white/5 rounded-2xl w-fit text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-xl">
                {card.icon}
              </div>
              <p className="text-xl md:text-2xl text-white/90 font-bold leading-relaxed tracking-tight group-hover:text-white transition-colors">
                {card.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const HearFromOurTeam = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videos = [
    {
      name: "Peace Kunthongkaew",
      role: "Senior Consultant",
      image: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/images/peace.webp",
      videoUrl: "https://www.youtube.com/watch?v=egkNxxqoRdw"
    },
    {
      name: "Srija Acharjee",
      role: "Executive Assistant",
      image: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/images/srija.webp",
      videoUrl: "https://www.youtube.com/watch?v=kCpGdjSULkc&pp=0gcJCQQLAYcqIYzv"
    }
  ];

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  useEffect(() => {
    if (isPlaying) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isPlaying, videos.length]);

  const next = () => {
    setIsPlaying(false);
    setIndex((prev) => (prev + 1) % videos.length);
  };
  const prev = () => {
    setIsPlaying(false);
    setIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="pt-8 md:pt-24 pb-12 md:pb-24 lg:pt-[91px] lg:pb-[91px] xl:pt-24 xl:pb-24 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 md:gap-3 text-accent mb-4 md:mb-6 uppercase text-xs md:text-sm font-extrabold tracking-[0.2em] md:tracking-[0.3em] px-6 py-2.5 md:px-8 md:py-3.5 bg-[#042F61]/90 backdrop-blur-md border border-[#042F61]/10 rounded-full shadow-[0_12px_30px_-10px_rgba(4,47,97,0.3)] select-none"
            style={{ wordSpacing: 'var(--word-spacing, 8px)' }}
          >
            <span className="w-5 md:w-8 h-[1px] bg-accent/60" /> Hear From Our Team
          </motion.div>
          <h2 className="text-primary tracking-tight text-center w-full text-3xl md:text-[40px] font-bold">Inside Chelson Gordon</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative group px-4 md:px-8">
          {/* Main Player Carousel Stack */}
          <div className="relative aspect-video w-full bg-transparent">
            {videos.map((video, i) => {
              const isActive = i === index;
              return (
                <motion.div
                  key={i}
                  style={{
                    zIndex: isActive ? 30 : 10,
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    x: isActive ? "0%" : (i - index < 0 ? "-28.75%" : "28.75%"),
                    y: isActive ? "0%" : "0%",
                    opacity: isActive ? 1 : 0.5,
                    filter: "none",
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 22,
                  }}
                  className={`absolute inset-0 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden bg-gray-900 border transition-shadow duration-500 ${
                    isActive 
                      ? 'shadow-[0_32px_64px_-16px_rgba(4,47,97,0.35)] border-white/20' 
                      : 'shadow-[0_16px_36px_-12px_rgba(0,0,0,0.4)] border-white/10 cursor-pointer'
                  }`}
                  onClick={() => {
                    if (!isActive) {
                      setIsPlaying(false);
                      setIndex(i);
                    }
                  }}
                >
                  {isActive && isPlaying ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(video.videoUrl)}?autoplay=1`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img 
                        src={video.image} 
                        alt={video.name} 
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isActive ? 'opacity-60' : 'opacity-40'}`}
                      />
                      
                      {isActive && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsPlaying(true);
                            }}
                            className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl z-20 cursor-pointer ring-[16px] md:ring-[24px] ring-white/20 backdrop-blur-xl transition-all"
                          >
                            <Play className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary ml-1" />
                          </motion.button>
                        </div>
                      )}

                      {!isActive && (
                        <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                          <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/25 text-white font-bold text-[10px] uppercase tracking-widest">
                            CLICK TO VIEW
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* Back Button when playing */}
                  {isActive && isPlaying && (
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlaying(false);
                      }}
                      className="absolute top-6 left-8 z-50 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-white/20 transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back to Spotlight
                    </motion.button>
                  )}

                  {(!isPlaying || !isActive) && (
                    <div 
                      className={`absolute bottom-3 md:bottom-4 left-3 md:left-8 right-3 md:right-8 h-12 md:h-24 bg-white/10 backdrop-blur-2xl rounded-[1rem] md:rounded-[1.5rem] border border-white/20 px-4 md:px-8 flex items-center justify-between shadow-2xl overflow-hidden z-30 transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-80'
                      }`}
                    >
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      
                      <div className="flex flex-col">
                        <span className="text-white/60 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-0 md:mb-1">Member Spotlight</span>
                        <span className="text-white font-bold text-xs md:text-lg truncate max-w-[120px] md:max-w-none">{video.name}</span>
                      </div>

                      <div className="flex items-center">
                         <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(video.videoUrl, '_blank');
                          }}
                          className="flex items-center gap-2 md:gap-4 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 px-2.5 md:px-5 py-1 md:py-2.5 rounded-full transition-all cursor-pointer shadow-lg group/visit"
                         >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-8 md:h-8">
                              <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                              <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            <span className="text-white uppercase tracking-[0.1em] md:tracking-[0.2em] text-[8px] md:text-sm font-bold">Visit</span>
                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white group-hover/visit:translate-x-1 transition-transform" />
                         </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Carousel Controls - Below Video Card */}
          <div className="flex justify-between items-center mt-6 md:mt-8 px-2 md:px-4">
            <button 
              onClick={prev}
              className="px-4 md:px-8 py-2 md:py-3 bg-white border border-gray-100 rounded-xl md:rounded-2xl flex items-center gap-1 md:gap-3 shadow-md hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 group"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 group-active:scale-90" />
              <span className="uppercase tracking-widest text-[10px] md:text-sm font-bold">Prev</span>
            </button>

            <div className="flex gap-2 md:gap-3">
              {videos.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => { setIsPlaying(false); setIndex(i); }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-8 md:w-12 bg-primary' : 'w-3 md:w-4 bg-gray-200'}`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="px-4 md:px-8 py-2 md:py-3 bg-white border border-gray-100 rounded-xl md:rounded-2xl flex items-center gap-1 md:gap-3 shadow-md hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 group"
            >
              <span className="uppercase tracking-widest text-[10px] md:text-sm font-bold">Next</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-active:scale-90" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};



const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        // 70% yellow (accent), 30% white
        this.color = Math.random() < 0.7 ? '#FDB913' : '#FFFFFF';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        const pulse = Math.sin(Date.now() / 1000 + (this.x * 0.01)) * 0.2 + 0.8;
        ctx.fillStyle = this.color === '#FDB913' ? `rgba(253, 185, 19, ${0.6 * pulse})` : `rgba(255, 255, 255, ${0.4 * pulse})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() / 1000;

      // Draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120);
            const isAnyYellow = particles[i].color === '#FDB913' || particles[j].color === '#FDB913';
            const isBothYellow = particles[i].color === '#FDB913' && particles[j].color === '#FDB913';
            
            if (isBothYellow) {
              const pulse = Math.sin(time * 2 + i) * 0.3 + 0.7;
              ctx.strokeStyle = `rgba(253, 185, 13, ${opacity * 0.6 * pulse})`;
              ctx.lineWidth = 1.2;
            } else if (isAnyYellow) {
              ctx.strokeStyle = `rgba(253, 185, 13, ${opacity * 0.3})`;
              ctx.lineWidth = 0.6;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
              ctx.lineWidth = 0.4;
            }

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animateParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-primary" />;
};

const Connect = () => {
  const words = {
    work: "work".split(""),
    together: "together!".split("")
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.34, 1.56, 0.64, 1] as const // Custom bounce ease for slot machine feel
      }
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden" style={{ perspective: '2000px' }}>
      <ParticleField />
      
      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span 
            className="text-white/60 text-xs md:text-sm font-bold uppercase tracking-[0.2em]"
            style={{ wordSpacing: '0.4em' }}
          >
            Is your institution ready to grow?
          </span>
        </motion.div>

        <div className="relative inline-block mb-12">
          <h2 className="text-6xl md:text-[8rem] text-white font-bold leading-[0.9] tracking-tighter">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mr-6"
            >
              Let's
            </motion.span>
            
            {/* Work Animation */}
            <motion.span 
              className="text-accent underline decoration-white/20 underline-offset-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {words.work.map((char, i) => (
                <motion.span
                  key={`work-${i}`}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            
            <br />
            
            {/* Together Animation */}
            <motion.span
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {words.together.map((char, i) => (
                <motion.span
                  key={`together-${i}`}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#FDB913', 
              color: '#042F61',
              boxShadow: '0 20px 25px -5px rgba(253, 185, 19, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-2xl flex items-center gap-3 mx-auto group"
          >
            Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Dynamic circle accents */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-white opacity-10 rounded-full blur-[100px] z-0"
      />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative pt-8 pb-6 md:pt-12 md:pb-8 lg:pt-8 lg:pb-6 overflow-hidden text-primary/80 bg-white border-t border-gray-100 h-auto">
      <div className="max-w-[1440px] mx-auto w-full px-8 md:px-16 lg:px-12 xl:px-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-12 xl:gap-20 mb-8 md:mb-12 lg:mb-8 items-start">
          {/* Logo & About Section */}
          <div className="w-full md:w-5/12 flex flex-col justify-start">
            <div className="space-y-2 md:space-y-3 mb-4 md:mb-5 lg:mb-4">
              <a href="/" className="flex items-center gap-3 md:gap-4 group cursor-pointer decoration-none">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-10 group-hover:opacity-30 transition-opacity" />
                  <img 
                    src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/CG_plain.webp" 
                    alt="Chelson Gordon Logo" 
                    className="h-8 md:h-12 w-auto relative z-10 transition-transform group-hover:scale-105 duration-500"
                    style={{ transform: 'scale(1.2)' }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-primary font-bold text-[14px] md:text-[20px] lg:text-[18px] xl:text-[20px] tracking-widest leading-tight uppercase" style={{ wordSpacing: '0.2em' }}>Chelson Gordon</span>
                  <span className="text-primary font-bold text-[12px] md:text-[16px] lg:text-[14px] xl:text-[16px] tracking-[0.1em] uppercase leading-none">Consultancy</span>
                </div>
              </a>
              <div className="h-[1.5px] w-full max-w-[280px] md:max-w-[340px] bg-accent/40" />
            </div>

            <p className="text-gray-500 text-[11px] md:text-sm lg:text-[10px] xl:text-[13px] leading-relaxed max-w-lg lg:max-w-md xl:max-w-lg font-medium text-justify opacity-90">
              All content and materials on this website are protected under the Australian Copyright Act 1968, with all rights reserved by Chelson Gordon Consultancy Pty Ltd. No part of this website may be reproduced, stored, transmitted, distributed, or otherwise used in any form without prior written permission. Unauthorised use may result in penalties for copyright infringement.
            </p>
          </div>
          
          {/* Contact Details with vertical border */}
          <div className="w-full md:w-4/12 md:border-l border-gray-100 md:pl-10 lg:pl-8 xl:pl-12">
            <div className="mb-3 lg:mb-2">
              <h4 className="font-bold text-primary mb-1 text-base lg:text-lg tracking-tight">Contact Us</h4>
              <div className="h-0.5 w-16 lg:w-20 bg-accent/60" />
            </div>
            <ul className="space-y-3 md:space-y-5 lg:space-y-3 xl:space-y-5 mt-3 md:mt-6 lg:mt-4">
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 md:p-2 bg-primary/5 rounded-lg text-primary border border-primary/10 group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all duration-300">
                  <img src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/phone-in-talk.svg" alt="Phone" className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-4 md:gap-x-8 lg:gap-x-4 xl:gap-x-8">
                  <a href="tel:+61499994530" className="hover:text-accent text-primary transition-colors font-bold text-[12px] md:text-sm lg:text-[11px] xl:text-sm tracking-tight whitespace-nowrap">+61 499 994 530</a>
                  <a href="tel:+66621744994" className="hover:text-accent text-primary transition-colors font-bold text-[12px] md:text-sm lg:text-[11px] xl:text-sm tracking-tight whitespace-nowrap">+66 62 174 4994</a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 md:p-2 bg-primary/5 rounded-lg text-primary border border-primary/10 group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all duration-300">
                  <img src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/email.svg" alt="Email" className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="mailto:support.coordinator@chelsongordon.com" className="hover:text-accent text-primary transition-colors font-bold text-[11px] md:text-sm lg:text-[10px] xl:text-[13px] tracking-tight block truncate">support.coordinator@chelsongordon.com</a>
                </div>
              </li>
              <li className="flex items-center gap-4 pt-1 lg:pt-0">
                <div className="flex items-center gap-3">
                  <a 
                    href="https://www.instagram.com/chelsongordonofficial?igsh=MXhwc3o2ZTRieXJyaQ==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 md:p-2 bg-primary/5 rounded-lg text-primary border border-primary/10 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 shadow-sm"
                  >
                    <img src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/instagram.svg" alt="Instagram" className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@ChelsonGordonConsultancy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 md:p-2 bg-primary/5 rounded-lg text-primary border border-primary/10 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 shadow-sm"
                  >
                    <img src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/youtube.svg" alt="Youtube" className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/15r9QeRt2x/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 md:p-2 bg-primary/5 rounded-lg text-primary border border-primary/10 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 shadow-sm"
                  >
                    <img src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/facebook.svg" alt="Facebook" className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Action Column with vertical border */}
          <div className="w-full md:w-3/12 md:border-l border-gray-100 md:pl-10 lg:pl-8 xl:pl-12 flex flex-col items-center justify-center self-stretch">
            <motion.button 
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
            </motion.button>
          </div>
        </div>

        <div className="pt-3 md:pt-4 lg:pt-3 border-t border-gray-100 flex flex-col items-center gap-2 md:gap-2">
          <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-24 lg:gap-x-10 xl:gap-x-20 gap-y-1.5 md:gap-y-2">
            {['Terms of use', 'Privacy Policy', 'Cancellation & Refund'].map(item => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-500 hover:text-accent transition-colors font-bold text-[12px] md:text-xs lg:text-[10px] xl:text-xs tracking-wider uppercase px-1 py-0.5"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-[11px] md:text-[14px] lg:text-[11px] xl:text-[14px] tracking-normal md:tracking-[0.1em] uppercase font-bold text-center px-4" style={{ wordSpacing: '0.1em', fontWeight: 700 }}>
            © 2026 Chelson Gordon Consultancy. <br className="md:hidden" /> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      if (window.location.hash === '#org-chart' || window.location.hash === '#our-people') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isOrgChart = currentHash === '#org-chart' || currentHash === '#our-people';

  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          {isOrgChart ? (
            <motion.div
              key="org-chart-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <OrgChart onBack={() => { window.location.hash = ""; }} />
            </motion.div>
          ) : (
            <motion.div
              key="landing-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />
              <About />
              <Logos />
              <Capabilities />
              <Portfolio />
              <Principles />
              <HearFromOurTeam />
              <Connect />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
