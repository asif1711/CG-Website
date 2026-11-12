import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, BookOpen } from 'lucide-react';
import { ALL_COURSES, CourseData } from '../../data/coursesData';
import { FeaturedCourseCard } from './FeaturedCourseCard';

interface CoursesSectionProps {
  courses?: CourseData[];
  onNavigateToCourse?: (slug: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  courses = ALL_COURSES,
  onNavigateToCourse,
}) => {
  return (
    <section 
      id="cg-courses-section"
      className="cg-courses-section relative py-20 sm:py-24 lg:py-28 bg-[#F4F7FB] overflow-hidden"
    >
      {/* Subtle ambient lighting gradients consistent with Chelson Gordon branding */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(4,47,97,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#042F61]/90 backdrop-blur-md text-[#FFB800] text-xs font-extrabold uppercase tracking-[0.25em] mb-5 shadow-sm border border-[#042F61]/20"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
            <span>OUR COURSE DEVELOPMENT</span>
          </motion.div>

          {/* Primary Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042F61] tracking-tight leading-tight mb-4 font-sans"
          >
            Our Accredited Courses
          </motion.h2>

          {/* Supporting Subheading */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg sm:text-xl font-bold text-[#0072CE] mb-4"
          >
            Developed with Industry. Designed for the Future.
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            We develop industry-focused training programs designed to address emerging technologies and evolving professional requirements. Our courses bring together technical knowledge and practical capabilities to help learners prepare for the opportunities of tomorrow.
          </motion.p>
        </div>

        {/* Featured Course Showcase */}
        <div className="space-y-8">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 + idx * 0.1 }}
            >
              <FeaturedCourseCard
                course={course}
                onExplore={
                  onNavigateToCourse
                    ? () => onNavigateToCourse(course.slug)
                    : undefined
                }
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;
