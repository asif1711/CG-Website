import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Download, 
  ShoppingBag, 
  MessageSquare, 
  Languages, 
  ChevronDown, 
  RefreshCw 
} from 'lucide-react';
import { 
  LOGO_URL, 
  LOGO_WHITE_URL 
} from '../constants';

const LANGUAGES = [
  { name: 'Arabic', code: 'AR', english: 'Arabic', native: 'عربي' },
  { name: 'Chinese', code: 'ZH', english: 'Chinese', native: '中国人' },
  { name: 'Hindi', code: 'HI', english: 'Hindi', native: 'हिन्दी' },
  { name: 'Thai', code: 'TH', english: 'Thai', native: 'ไทย' },
  { name: 'Vietnamese', code: 'VI', english: 'Vietnamese', native: 'Tiếng Việt' },
];

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

interface LanguageSelectorProps {
  isScrolled: boolean;
  selectedLang: string;
  onLanguageChange: (code: string, name: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  isScrolled, 
  selectedLang, 
  onLanguageChange 
}) => {
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
        className="flex items-center gap-1 min-[1600px]:gap-1.5 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all border shadow-sm notranslate bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-md"
        translate="no"
        style={isScrolled ? { backgroundColor: 'rgba(4, 47, 97, 0.05)', color: '#042F61', borderColor: 'rgba(4, 47, 97, 0.1)' } : {}}
      >
        <Languages className="w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" />
        <span className="inline">{getLangDisplay(selectedLang)}</span>
        <ChevronDown className={`w-2.5 h-2.5 min-[1600px]:w-3 min-[1600px]:h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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

const NAV_LINKS = [
  { name: 'About Us', href: 'https://chelsongordon.com/who-we-are/' },
  { name: 'Our Services', href: 'https://chelsongordon.com/our-services/' },
  { name: 'Our People', href: 'https://chelsongordon.com/our-team/' },
  { name: 'Careers', href: 'https://chelsongordon.com/careers/' },
];

export interface NavbarProps {
  forceSolid?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ forceSolid }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem('selected_language_name') || 'English';
  });

  const activeScrolled = isScrolled || forceSolid;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${activeScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-full mx-auto w-full px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-[4%] h-[120px] lg:h-[100px] xl:h-[120px] 2xl:h-[140px] flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState(null, '', '/');
              window.location.hash = "";
              window.dispatchEvent(new Event('popstate'));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3"
          >
             <img 
               src={activeScrolled ? LOGO_URL : (logoError ? LOGO_URL : LOGO_WHITE_URL)} 
               alt="Chelson Gordon Logo" 
               className={`mt-0 md:-mt-[20px] lg:mt-[5px] h-[145px] md:h-[125px] lg:h-[110px] xl:h-[145px] 2xl:h-[170px] w-auto transition-all transform origin-left ${!activeScrolled && logoError ? 'brightness-0 invert' : ''}`}
               onError={() => !activeScrolled && setLogoError(true)}
               referrerPolicy="no-referrer"
               decoding="async"
               fetchPriority="high"
             />
          </a>
        </div>

        {/* Right Section: Nav + Buttons */}
        <div className="hidden lg:flex items-center justify-end ml-auto min-w-0 flex-shrink-0">
          {/* Single Row: Nav links + Action Buttons */}
          <div className="flex items-center gap-[20px] min-[1600px]:gap-[30px] justify-end flex-shrink-0">
            {/* Nav links */}
            <div className="flex items-center gap-[30px] min-[1600px]:gap-[40px] mr-1 xl:mr-2 min-[1600px]:mr-2 flex-shrink-0">
              {NAV_LINKS.map((item) => {
                const isInternal = item.href.startsWith('/') || item.href.startsWith('#');
                const isCareers = item.name === 'Careers';
                return (
                  <a 
                    key={item.name} 
                    href={item.href}
                    target={isInternal ? undefined : "_blank"}
                    rel={isInternal ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if (isInternal) {
                        e.preventDefault();
                        if (item.href.startsWith('#')) {
                          window.location.hash = item.href;
                        } else {
                          window.history.pushState(null, '', item.href);
                          window.dispatchEvent(new Event('popstate'));
                        }
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={`${isCareers ? 'hidden min-[1600px]:inline-block' : 'inline-block'} text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-all hover:text-accent whitespace-nowrap ${activeScrolled ? 'text-primary' : 'text-white'}`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-[12px] min-[1600px]:gap-3 flex-shrink-0">
              <motion.a 
                href="https://chelsongordon.com/contact-us-page/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap shadow-md border border-transparent ${
                  activeScrolled 
                    ? 'bg-primary text-white hover:bg-accent hover:text-primary' 
                    : 'bg-accent text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Get in Touch <ArrowRight className="w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" />
              </motion.a>
              
              <motion.a 
                href="https://storage.googleapis.com/chelsongordon/com.chelsongordon/CG%20-%20Company%20Handbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap shadow-sm border border-transparent ${
                  activeScrolled 
                    ? 'bg-accent text-primary hover:bg-primary hover:text-white' 
                    : 'bg-primary text-white hover:bg-accent hover:text-primary'
                }`}
              >
                Company Profile <Download className="w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" />
              </motion.a>

              {/* Feedback button - "Feedback" on standard laptop (<1600px), "Leave a Feedback" on large monitors (>=1600px) */}
              <motion.a 
                href="https://chelsongordon.com/feedback/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap shadow-sm border border-transparent ${
                  activeScrolled 
                    ? 'bg-primary text-white hover:bg-accent hover:text-primary' 
                    : 'bg-accent text-primary hover:bg-primary hover:text-white'
                }`}
              >
                <span className="inline min-[1600px]:hidden">Feedback</span>
                <span className="hidden min-[1600px]:inline">Leave a Feedback</span>
                <MessageSquare className="w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" />
              </motion.a>

              <motion.a 
                href="https://cgresources.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap border shadow-sm ${activeScrolled ? 'bg-primary/5 text-primary border-primary/10 hover:bg-primary/10' : 'bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-md'}`}
              >
                CG Resources <ShoppingBag className="w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" />
              </motion.a>

              <LanguageSelector 
                isScrolled={activeScrolled} 
                selectedLang={selectedLang}
                onLanguageChange={changeLanguage}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden ml-auto relative z-[60]" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className={activeScrolled || mobileMenuOpen ? 'text-primary' : 'text-white'} size={32} /> : <Menu className={activeScrolled ? 'text-primary' : 'text-white'} size={32} />}
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
                {NAV_LINKS.map((item, idx) => {
                  const isInternal = item.href.startsWith('/') || item.href.startsWith('#');
                  return (
                    <motion.a 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      key={item.name} 
                      href={item.href}
                      target={isInternal ? undefined : "_blank"}
                      rel={isInternal ? undefined : "noopener noreferrer"}
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        if (isInternal) {
                          e.preventDefault();
                          if (item.href.startsWith('#')) {
                            window.location.hash = item.href;
                          } else {
                            window.history.pushState(null, '', item.href);
                            window.dispatchEvent(new Event('popstate'));
                          }
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      className="text-4xl font-black text-primary uppercase tracking-tighter hover:text-accent transition-colors"
                    >
                      {item.name}
                    </motion.a>
                  );
                })}
              </div>

              <div className="space-y-4">
                <motion.a 
                  href="https://chelsongordon.com/contact-us-page/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-extrabold uppercase tracking-widest text-sm shadow-xl"
                >
                  Get in Touch <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <div className="grid grid-cols-2 gap-3">
                  <motion.a 
                    href="https://storage.googleapis.com/chelsongordon/com.chelsongordon/CG%20-%20Company%20Handbook.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-accent text-primary font-bold uppercase tracking-widest text-[10px] shadow-md"
                  >
                    Company Profile <Download className="w-4 h-4" />
                  </motion.a>

                  <motion.a 
                    href="https://cgresources.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-primary/5 text-primary border border-primary/10 font-bold uppercase tracking-widest text-[10px]"
                  >
                    Resources <ShoppingBag className="w-4 h-4" />
                  </motion.a>
                </div>

                <motion.a 
                  href="https://chelsongordon.com/feedback/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-accent text-primary font-extrabold uppercase tracking-widest text-sm shadow-xl"
                >
                  Leave a Feedback <MessageSquare className="w-5 h-5" />
                </motion.a>

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

export default Navbar;
