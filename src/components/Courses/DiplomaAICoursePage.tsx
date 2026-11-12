import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft,
  Award, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  Mail, 
  Globe, 
  Terminal, 
  Cpu, 
  Database, 
  Network, 
  BrainCircuit, 
  ShieldCheck, 
  UserCheck, 
  Code2, 
  ExternalLink,
  ChevronRight,
  Clock
} from 'lucide-react';
import { DIPLOMA_AI_COURSE } from '../../data/coursesData';
import { CourseCurriculum } from './CourseCurriculum';

interface DiplomaAICoursePageProps {
  onNavigateHome?: () => void;
}

export const DiplomaAICoursePage: React.FC<DiplomaAICoursePageProps> = ({ onNavigateHome }) => {
  const course = DIPLOMA_AI_COURSE;
  const gravityFormMountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Diploma of Machine Learning and Artificial Intelligence Technology | Chelson Gordon';
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const t1 = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);

    const t2 = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 180);

    // Update meta description if meta tag exists
    let metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription?.getAttribute('content') || '';
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Explore the Diploma of Machine Learning and Artificial Intelligence Technology (11480NAT), covering Python programming, machine learning, data engineering, generative AI and AI systems.'
      );
    }

    // WordPress Gravity Form mounting support (compatible with WordPress workflow)
    const mountContainer = gravityFormMountRef.current || document.getElementById('course-enquiry-gravity-form-mount');
    const hiddenSource = document.getElementById('cg-hidden-gform-course-enquiry') || document.getElementById('cg-hidden-gform-source');
    if (mountContainer && hiddenSource) {
      const formElement = hiddenSource.querySelector('form, .gform_wrapper') || hiddenSource.firstElementChild;
      if (formElement && !mountContainer.contains(formElement)) {
        mountContainer.replaceChildren(formElement);
      }
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.title = originalTitle;
      if (metaDescription && originalDescription) {
        metaDescription.setAttribute('content', originalDescription);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
    }
  };

  const handleBackHome = (e: React.MouseEvent) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    } else if (typeof window !== 'undefined') {
      if (
        !window.location.hostname.includes('chelsongordon.com') ||
        window.location.origin.includes('ais-') ||
        window.location.origin.includes('localhost')
      ) {
        e.preventDefault();
        window.history.pushState(null, '', '/');
        window.dispatchEvent(new Event('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const learningAreaIcons = [
    Terminal,
    Cpu,
    Database,
    Network,
    BrainCircuit,
    ShieldCheck,
  ];

  return (
    <div 
      id="cg-diploma-ai-course"
      className="cg-diploma-ai-course min-h-screen bg-white font-sans text-slate-800 selection:bg-[#0072CE]/20 selection:text-[#042F61]"
    >
      {/* ========================================================================= */}
      {/* SECTION 01 — HERO                                                        */}
      {/* ========================================================================= */}
      <section className="relative pt-[180px] sm:pt-[190px] lg:pt-[180px] xl:pt-[200px] 2xl:pt-[220px] pb-16 lg:pb-24 bg-[#F4F7FB] overflow-hidden border-b border-slate-200/80">
        {/* Subtle Ambient Decorative Watermark & Gradients */}
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
          aria-hidden="true"
        >
          <div className="absolute top-[160px] right-[40px] w-0 h-0 overflow-visible origin-top-left transform rotate-90 text-[64px] lg:text-[88px] font-black tracking-widest text-[#042F61]/[0.04] uppercase leading-none whitespace-nowrap select-none">
            11480NAT · AI DIPLOMA
          </div>
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(253,185,19,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8">
            <a 
              href="/" 
              onClick={handleBackHome}
              className="hover:text-[#0072CE] transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-600">Courses</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#042F61] font-bold truncate max-w-[240px] sm:max-w-none">
              11480NAT Diploma of AI
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#042F61] text-[#FFB800] text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-sm"
              >
                <Award className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>NATIONALLY ACCREDITED COURSE · 11480NAT</span>
              </motion.div>

              {/* H1 Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-black text-[#042F61] tracking-tight leading-[1.12] mb-6 font-sans"
              >
                Diploma of Machine Learning and Artificial Intelligence Technology
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-medium"
              >
                Develop the skills to implement, deploy and manage artificial intelligence and machine learning systems. Explore Python programming, predictive modelling, data engineering, generative AI and intelligent business solutions through a comprehensive, industry-focused course.
              </motion.p>

              {/* Information Highlights Pills */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
              >
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                    <Award className="w-3.5 h-3.5 text-[#0072CE]" />
                    <span>Level</span>
                  </div>
                  <span className="text-sm sm:text-base font-black text-[#042F61]">AQF Level 5</span>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#0072CE]" />
                    <span>Curriculum</span>
                  </div>
                  <span className="text-sm sm:text-base font-black text-[#042F61]">19 Units</span>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0072CE]" />
                    <span>Delivery</span>
                  </div>
                  <span className="text-sm sm:text-base font-black text-[#042F61]">Face-to-Face</span>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#0072CE]" />
                    <span>Intake</span>
                  </div>
                  <span className="text-sm sm:text-base font-black text-[#042F61]">Jan 2027</span>
                </div>
              </motion.div>

              {/* Intake Message Notice */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex items-center gap-3 p-3.5 px-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950 text-xs sm:text-sm font-semibold mb-8"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 animate-ping" />
                <span>
                  <strong>First Intake - January 2027 :</strong> Enrolments Opening Soon.<br/>Register your early interest today.
                </span>
              </motion.div>

              {/* Hero CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('enquiry')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0072CE] hover:bg-[#042F61] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#0072CE]/25 transition-all duration-200 group cursor-pointer"
                >
                  <span>Enquire About This Course</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('curriculum')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-[#042F61] hover:text-[#0072CE] font-bold text-xs sm:text-sm uppercase tracking-wider border border-slate-300 shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Course Curriculum</span>
                </button>
              </motion.div>
            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group"
              >
                <img
                  src={course.heroImage}
                  alt="AI systems development and machine learning workstation"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042F61]/90 via-[#042F61]/30 to-transparent" />

                {/* Floating Glass Overlay Card at bottom of Hero Image */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-xl text-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#0072CE]">
                      Nationally Accredited
                    </span>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-[#042F61]">
                      11480NAT
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#042F61] leading-snug">
                    Field of Education: Computer Science (0201)
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Accredited by ASQA · 19 Units of Competency
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — COURSE OVERVIEW                                             */}
      {/* ========================================================================= */}
      <section id="overview" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0072CE] block mb-3">
                COURSE OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#042F61] tracking-tight leading-tight mb-6">
                Building Practical Skills for the Future of AI
              </h2>

              <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
                {course.overviewParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Official Credential Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="block text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Course Code
                  </span>
                  <span className="text-xl font-black text-[#042F61] mt-1 block">
                    11480NAT
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="block text-xs uppercase font-bold text-slate-400 tracking-wider">
                    AQF Level
                  </span>
                  <span className="text-xl font-black text-[#042F61] mt-1 block">
                    Level 5 Diploma
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="block text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Total Curriculum
                  </span>
                  <span className="text-xl font-black text-[#042F61] mt-1 block">
                    19 Units
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Callout Box */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#042F61] to-[#021e3d] rounded-[2rem] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.3)_0%,transparent_70%)] blur-2xl pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                    <Sparkles className="w-6 h-6 text-[#FFB800]" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 tracking-tight">
                    Industry-Focused Qualification
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    Designed to bridge the growing gap between academic technology concepts and real-world enterprise implementation of AI and ML systems.
                  </p>

                  <ul className="space-y-3 text-sm text-white/90">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" />
                      <span>End-to-end AI systems lifecycle</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" />
                      <span>Enterprise Generative AI applications</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" />
                      <span>Cloud deployment and MLOps pipelines</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" />
                      <span>Responsible governance and auditing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — WHAT YOU WILL LEARN                                         */}
      {/* ========================================================================= */}
      <section id="what-you-will-learn" className="py-20 lg:py-24 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0072CE] block mb-3">
              WHAT YOU WILL LEARN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042F61] tracking-tight leading-tight mb-4">
              Explore the Technologies Shaping Tomorrow
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Six core domains structured to take learners from foundational code and data analysis to advanced enterprise deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {course.learningAreas.map((area, idx) => {
              const IconComp = learningAreaIcons[idx] || Sparkles;
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#0072CE]/10 text-[#0072CE] flex items-center justify-center group-hover:bg-[#0072CE] group-hover:!text-white transition-all duration-300">
                        <IconComp className="w-6 h-6 text-[#0072CE] group-hover:!text-white transition-colors duration-300" />
                      </div>
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-500">
                        {area.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#042F61] tracking-tight mb-3 group-hover:text-[#0072CE] transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — COURSE CURRICULUM (19 UNITS)                                */}
      {/* ========================================================================= */}
      <section id="curriculum" className="py-20 lg:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0072CE] block mb-3">
              COMPREHENSIVE QUALIFICATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042F61] tracking-tight leading-tight mb-4">
              Explore the Course Curriculum
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              All 19 nationally registered units of competency covering fundamental ICT disciplines and specialised artificial intelligence technologies.
            </p>
          </div>

          <CourseCurriculum units={course.units} officialSource={course.officialSource} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — WHO IS THIS COURSE FOR?                                     */}
      {/* ========================================================================= */}
      <section id="audience" className="py-20 lg:py-24 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0072CE] block mb-3">
              WHO SHOULD ENROL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042F61] tracking-tight leading-tight mb-4">
              Who Is This Course Designed For?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tailored for learners and professionals seeking practical capabilities across modern applied artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.audiences.map((audience, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#042F61]/10 flex items-center justify-center text-[#042F61] mb-5">
                    <UserCheck className="w-5 h-5 text-[#042F61]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#042F61] tracking-tight mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-8 italic">
            * Note: These are suggested target audiences based on curriculum alignment, not official entry eligibility criteria.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — PRACTICAL CAPABILITIES                                      */}
      {/* ========================================================================= */}
      <section id="capabilities" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0072CE] block mb-3">
              APPLIED COMPETENCIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042F61] tracking-tight leading-tight mb-4">
              Turn Technical Knowledge into Practical Capabilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Graduates develop tangible, production-ready capabilities aligned directly with modern enterprise technology requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {course.capabilities.map((cap, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-[#0072CE]/30 hover:bg-white hover:shadow-md transition-all duration-200 flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0072CE]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0072CE]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — TRAINING AND INTAKE                                         */}
      {/* ========================================================================= */}
      <section id="intake" className="py-20 lg:py-24 bg-[#042F61] text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.3)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#FFB800] text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
            <Clock className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>ADVERTISED INTAKE SCHEDULE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
            Take the Next Step into the Future of AI
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Prepare for the upcoming intake of the Diploma of Machine Learning and Artificial Intelligence Technology. Early enquiries are now open.
          </p>

          {/* Intake Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="block text-xs uppercase font-extrabold text-[#FFB800] tracking-wider mb-1">
                First Intake
              </span>
              <span className="text-2xl font-black text-white">
                January 2027
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="block text-xs uppercase font-extrabold text-[#FFB800] tracking-wider mb-1">
                Delivery Format
              </span>
              <span className="text-2xl font-black text-white">
                Face-to-Face
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="block text-xs uppercase font-extrabold text-[#FFB800] tracking-wider mb-1">
                Enrolment Status
              </span>
              <span className="text-xl sm:text-2xl font-black text-white">
                Opening Soon
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection('enquiry')}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFB800] hover:bg-white text-[#042F61] font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all duration-200 cursor-pointer"
          >
            <span>Express Your Interest</span>
            <ArrowRight className="w-4 h-4 text-[#042F61]" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — ENQUIRY                                                     */}
      {/* ========================================================================= */}
      <section id="enquiry" className="py-20 lg:py-24 bg-[#F4F7FB] scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0072CE] block mb-3">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042F61] tracking-tight leading-tight mb-4">
              Interested in the Diploma of Machine Learning and Artificial Intelligence Technology?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Get in touch with Chelson Gordon Consultancy to express your interest and receive further information about the upcoming January 2027 intake.
            </p>
          </div>

          {/* Contact Direct Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <a
              href={course.contact.phoneLink}
              className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0072CE] transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0072CE]/10 text-[#0072CE] flex items-center justify-center mb-4 group-hover:bg-[#0072CE] group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                Direct Telephone
              </span>
              <span className="text-lg font-black text-[#042F61] group-hover:text-[#0072CE] transition-colors">
                {course.contact.phoneFormatted}
              </span>
              <span className="text-xs text-[#0072CE] font-bold mt-2">
                Click to Call
              </span>
            </a>

            {/* Email */}
            <a
              href={course.contact.emailLink}
              className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0072CE] transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0072CE]/10 text-[#0072CE] flex items-center justify-center mb-4 group-hover:bg-[#0072CE] group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                Course Enquiries Email
              </span>
              <span className="text-sm sm:text-base font-black text-[#042F61] group-hover:text-[#0072CE] transition-colors break-all">
                {course.contact.email}
              </span>
              <span className="text-xs text-[#0072CE] font-bold mt-2">
                Click to Email
              </span>
            </a>

            {/* Website */}
            <a
              href={course.contact.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0072CE] transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0072CE]/10 text-[#0072CE] flex items-center justify-center mb-4 group-hover:bg-[#0072CE] group-hover:text-white transition-colors">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                Website
              </span>
              <span className="text-base font-black text-[#042F61] group-hover:text-[#0072CE] transition-colors">
                chelsongordon.com
              </span>
              <span className="text-xs text-[#0072CE] font-bold mt-2 flex items-center gap-1">
                <span>Visit Site</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>

          {/* Dedicated Gravity Form Mount Container (for future WordPress integration) */}
          <div 
            id="course-enquiry-gravity-form-mount"
            ref={gravityFormMountRef}
            className="w-full"
            data-form-purpose="diploma-ai-enquiry"
          />
        </div>
      </section>
    </div>
  );
};

export default DiplomaAICoursePage;
