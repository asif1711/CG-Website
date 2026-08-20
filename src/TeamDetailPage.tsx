import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { TEAMS_DATA } from './components/Teams/teamData';
import { getTeamIcon } from './components/Teams/TeamCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TeamDetailPageProps {
  slug: string;
  onNavigateBack?: () => void;
}

export default function TeamDetailPage({ slug, onNavigateBack }: TeamDetailPageProps) {
  // Normalize slug to match with or without leading/trailing slashes
  const normalizedSlug = slug.replace(/\/+$/, '') || '/';
  const team = TEAMS_DATA.find((t) => t.slug === normalizedSlug) || TEAMS_DATA[0];
  const TeamIcon = getTeamIcon(team.id);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${team.name} - Chelson Gordon`;
    return () => {
      document.title = originalTitle;
    };
  }, [team]);

  const handleBack = () => {
    if (onNavigateBack) {
      onNavigateBack();
      return;
    }
    window.history.pushState({}, '', '/our-people');
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavigateToSlug = (targetSlug: string) => {
    window.history.pushState({}, '', targetSlug);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans pt-[90px] lg:pt-[95px] xl:pt-[115px] 2xl:pt-[130px] pb-20 selection:bg-primary selection:text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-primary/80 hover:text-primary hover:-translate-x-1 transition-all font-bold text-xs uppercase tracking-widest cursor-pointer bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Teams</span>
          </button>

          <span className="text-xs font-semibold text-slate-400">
            Route: <code className="bg-slate-100 text-primary px-2 py-0.5 rounded font-mono">{team.slug}</code>
          </span>
        </div>

        {/* Hero Header for this Team */}
        <div className="relative rounded-3xl overflow-hidden bg-primary-dark text-white border border-slate-200/80 shadow-md mb-8">
          <div className="absolute inset-0 z-0">
            <img
              src={team.image}
              alt={team.imageAlt || team.name}
              className="w-full h-full object-cover object-center filter saturate-[1.05] opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-primary-dark/40" />
          </div>

          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
              <div className="w-5 h-5 rounded-full bg-accent text-primary flex items-center justify-center">
                <TeamIcon className="w-3 h-3" />
              </div>
              <span className="text-[11px] font-bold tracking-wider text-accent uppercase">
                {team.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
              {team.name}
            </h1>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {team.description}
            </p>
          </div>
        </div>

        {/* Team View Workspace Area (Ready for custom design) */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm relative text-center min-h-[300px] flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/40 text-primary flex items-center justify-center mb-4">
            <TeamIcon className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">
            {team.name} View
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-lg mb-6">
            This dedicated team view is now connected to <code className="text-primary font-mono font-semibold">{team.slug}</code>. You can build and customize the detailed layout here.
          </p>

          {/* Quick switcher to other team views */}
          <div className="pt-6 border-t border-slate-100 w-full max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              Switch to another team view
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {TEAMS_DATA.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleNavigateToSlug(t.slug)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                    t.slug === team.slug
                      ? 'bg-primary text-white border-primary shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> All Teams
          </button>
          <a
            href="https://chelsongordon.com/careers/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-widest text-xs transition-all shadow-sm group"
          >
            <span>Join This Team</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
}
