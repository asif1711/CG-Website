import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Calendar, MapPin, Award, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { CourseData } from '../../data/coursesData';

interface FeaturedCourseCardProps {
  course: CourseData;
  onExplore?: () => void;
  onEnquire?: () => void;
}

export const FeaturedCourseCard: React.FC<FeaturedCourseCardProps> = ({
  course,
  onExplore,
  onEnquire,
}) => {
  const handleExploreClick = (e: React.MouseEvent) => {
    if (onExplore) {
      e.preventDefault();
      onExplore();
    }
    // Pure static navigation directly to href
  };

  const handleEnquireClick = (e: React.MouseEvent) => {
    if (onEnquire) {
      e.preventDefault();
      onEnquire();
    }
    // Otherwise allow direct navigation to https://chelsongordon.com/contact-us-page/
  };

  return (
    <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(4,47,97,0.08)] hover:shadow-[0_25px_60px_-15px_rgba(4,47,97,0.14)] transition-all duration-300 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Column: Substantial Course Image with Overlay Badges */}
        <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full overflow-hidden bg-slate-900">
          <img
            src={course.cardImage || course.heroImage}
            alt={course.title}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (!target.dataset.triedFallback) {
                target.dataset.triedFallback = 'true';
                target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80';
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#042F61]/90 via-[#042F61]/40 to-transparent" />

          {/* Floating Pill Badges on Image */}
          <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-2 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#042F61] text-xs font-black uppercase tracking-wider shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#FDB913]" />
              {course.code}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#042F61]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
              AQF Level {course.aqfLevel}
            </span>
          </div>

          <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDB913] text-[#042F61] text-[11px] font-extrabold uppercase tracking-wider mb-2 shadow-sm">
              <Calendar className="w-3 h-3 text-[#042F61]" />
              <span>{course.intake} Intake</span>
            </div>
            <p className="text-xs text-white/90 font-medium">
              {course.deliveryFormat} · Face-to-Face Learning
            </p>
          </div>
        </div>

        {/* Right Column: Detailed Information, Highlights & CTAs */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
          <div>
            {/* Category / Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#0072CE] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FDB913]" />
              <span>{course.classification}</span>
            </div>

            {/* Course Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-[28px] xl:text-3xl font-black text-[#042F61] tracking-tight leading-tight mb-4">
              {course.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              Develop practical capabilities in Python programming, machine learning, data engineering, generative AI and intelligent systems through a comprehensive course covering 19 units of competency.
            </p>

            {/* Structured Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-6 border-y border-slate-100 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0072CE] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="block font-bold text-[#042F61]">AQF Level {course.aqfLevel}</span>
                  <span className="text-slate-500">Diploma</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-[#0072CE] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="block font-bold text-[#042F61]">{course.totalUnits} Units</span>
                  <span className="text-slate-500">Competency based</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0072CE] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="block font-bold text-[#042F61]">Face-to-Face</span>
                  <span className="text-slate-500">On-campus</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <motion.a
              href="https://chelsongordon.com/courses-by-us"
              onClick={handleExploreClick}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0072CE] hover:bg-[#042F61] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#0072CE]/20 transition-all duration-200 group cursor-pointer"
            >
              <span>Explore Course</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://chelsongordon.com/contact-us-page/"
              onClick={handleEnquireClick}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-[#042F61] hover:text-[#0072CE] font-bold text-xs sm:text-sm uppercase tracking-wider border border-slate-300 shadow-sm transition-all duration-200 group cursor-pointer"
            >
              <span>Enquire Now</span>
            </motion.a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturedCourseCard;
