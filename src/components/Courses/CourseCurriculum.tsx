import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ExternalLink, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { CurriculumUnit } from '../../data/coursesData';

interface CourseCurriculumProps {
  units: CurriculumUnit[];
  officialSource: string;
}

export const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ units, officialSource }) => {
  // Store expanded unit codes
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({
    'NAT11480001': true, // Keep first core AI unit expanded by default
  });

  const foundationUnits = units.filter((u) => u.group === 'foundation');
  const specialisedUnits = units.filter((u) => u.group === 'specialised');

  const allCodes = units.map((u) => u.code);
  const isAllExpanded = allCodes.every((code) => expandedUnits[code]);

  const toggleUnit = (code: string) => {
    setExpandedUnits((prev) => ({
      ...prev,
      [code]: !prev[code],
    }));
  };

  const handleExpandAll = () => {
    const nextState: Record<string, boolean> = {};
    allCodes.forEach((code) => {
      nextState[code] = true;
    });
    setExpandedUnits(nextState);
  };

  const handleCollapseAll = () => {
    setExpandedUnits({});
  };

  return (
    <div className="w-full">
      {/* Top Controls Bar: Counter Badges & Expand/Collapse All */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#042F61] text-white">
            <BookOpen className="w-3.5 h-3.5 text-[#FDB913]" />
            19 Units of Competency
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            <Layers className="w-3.5 h-3.5 text-[#0072CE]" />
            4 ICT Foundation Units
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0072CE]/10 text-[#0072CE] border border-[#0072CE]/20">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0072CE]" />
            15 Specialised AI Units
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={isAllExpanded ? handleCollapseAll : handleExpandAll}
            className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#042F61] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-200 hover:border-[#0072CE] cursor-pointer"
          >
            {isAllExpanded ? 'Collapse All' : 'Expand All Units'}
          </button>
        </div>
      </div>

      {/* Curriculum Groups */}
      <div className="space-y-10">
        {/* GROUP A — ICT Foundation Units */}
        <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-5 border-b border-slate-200">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0072CE]">
                Group A · 4 Units
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#042F61] tracking-tight">
                ICT Foundation Units
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Core technical capabilities across network security, database queries, testing, and client problem resolution.
            </p>
          </div>

          <div className="space-y-3">
            {foundationUnits.map((unit, index) => {
              const isExpanded = !!expandedUnits[unit.code];
              return (
                <div
                  key={unit.code}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'border-[#0072CE]/40 shadow-md ring-1 ring-[#0072CE]/20'
                      : 'border-slate-200/80 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleUnit(unit.code)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleUnit(unit.code);
                      }
                    }}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0072CE]"
                  >
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 pr-2">
                      <span className="shrink-0 font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-[#042F61] border border-slate-200">
                        {unit.code}
                      </span>
                      <span className="font-semibold text-sm sm:text-base text-slate-800 leading-snug">
                        {unit.title}
                      </span>
                    </div>
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 bg-[#0072CE]/10 text-[#0072CE]' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#042F61]">National Competency Unit:</span>
                          <span className="font-mono text-slate-700">{unit.code}</span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-600">AQF Level 5 Aligned</span>
                        </div>
                        <a
                          href={`${officialSource}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold text-[#0072CE] hover:text-[#042F61] transition-colors"
                        >
                          <span>training.gov.au details</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* GROUP B — Specialised AI and Machine Learning Units */}
        <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-5 border-b border-slate-200">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0072CE]">
                Group B · 15 Units
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#042F61] tracking-tight">
                Specialised AI & Machine Learning Units
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Comprehensive accredited units spanning machine learning, Python programming, generative AI, MLOps, ethics, and governance.
            </p>
          </div>

          <div className="space-y-3">
            {specialisedUnits.map((unit, index) => {
              const isExpanded = !!expandedUnits[unit.code];
              return (
                <div
                  key={unit.code}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'border-[#0072CE]/40 shadow-md ring-1 ring-[#0072CE]/20'
                      : 'border-slate-200/80 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleUnit(unit.code)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleUnit(unit.code);
                      }
                    }}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0072CE]"
                  >
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 pr-2">
                      <span className="shrink-0 font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#0072CE]/10 text-[#0072CE] border border-[#0072CE]/20">
                        {unit.code}
                      </span>
                      <span className="font-semibold text-sm sm:text-base text-slate-800 leading-snug">
                        {unit.title}
                      </span>
                    </div>
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 bg-[#0072CE]/10 text-[#0072CE]' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#042F61]">National Accredited Unit:</span>
                          <span className="font-mono text-slate-700">{unit.code}</span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-600">Unit {index + 5} of 19</span>
                        </div>
                        <a
                          href={`${officialSource}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold text-[#0072CE] hover:text-[#042F61] transition-colors"
                        >
                          <span>View on training.gov.au</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Official ASQA & Training.gov.au Accreditation Note */}
      <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#042F61]/10 flex items-center justify-center shrink-0">
            <Layers className="w-5 h-5 text-[#042F61]" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-[#042F61]">
              National Course Code: 11480NAT · AQF Level 5
            </p>
            <p className="text-xs text-slate-500">
              Registered with Australian Skills Quality Authority (ASQA) · Currency: 23 Oct 2026 – 22 Oct 2031
            </p>
          </div>
        </div>

        <a
          href={officialSource}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#042F61] hover:bg-[#0072CE] transition-all duration-200 shadow-sm whitespace-nowrap"
        >
          <span>Official Registration</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default CourseCurriculum;
