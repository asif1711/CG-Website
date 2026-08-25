import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { TEAMS_DATA } from './teamData';
import { TeamCard, getTeamIcon } from './TeamCard';
import { ArrowRight, UserCheck, ArrowUpRight } from 'lucide-react';

interface DotGridProps {
  className?: string;
  rows?: number;
  cols?: number;
  color?: string;
  dotSize?: number;
  gap?: number;
  opacity?: number;
}

const DotGrid: React.FC<DotGridProps> = ({
  className = '',
  rows = 5,
  cols = 6,
  color = '#042F61',
  dotSize = 3.5,
  gap = 14,
  opacity = 0.4,
}) => {
  const width = (cols - 1) * gap + dotSize;
  const height = (rows - 1) * gap + dotSize;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={c * gap + dotSize / 2}
            cy={r * gap + dotSize / 2}
            r={dotSize / 2}
            fill={color}
            opacity={opacity}
          />
        ))
      )}
    </svg>
  );
};

export const TeamsSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const row1Teams = TEAMS_DATA.filter((t) => t.row === 1);
  const row2Teams = TEAMS_DATA.filter((t) => t.row === 2);

  // Exact normalized flex weights (Sum is ALWAYS 100 for zero-jitter interpolation)
  // Row 1: [0] Learning (wide 50%), [1] Consultant (25%), [2] Human Strategy (25%)
  const getRow1FlexWeight = (teamId: string, isWideByDefault?: boolean) => {
    if (prefersReducedMotion) {
      return isWideByDefault ? 50 : 25;
    }

    if (!hoveredId || !row1Teams.some((t) => t.id === hoveredId)) {
      return isWideByDefault ? 50 : 25; // Default rest state (50 + 25 + 25 = 100)
    }

    if (hoveredId === 'learning-academic-team') {
      return teamId === 'learning-academic-team' ? 58 : 21; // 58 + 21 + 21 = 100
    }

    if (hoveredId === 'consultant-team') {
      if (teamId === 'consultant-team') return 48;
      if (teamId === 'learning-academic-team') return 27;
      if (teamId === 'human-strategy-team') return 25;
      return 25; // 48 + 27 + 25 = 100
    }

    if (hoveredId === 'human-strategy-team') {
      if (teamId === 'human-strategy-team') return 48;
      if (teamId === 'learning-academic-team') return 27;
      if (teamId === 'consultant-team') return 25;
      return 25; // 48 + 27 + 25 = 100
    }

    return isWideByDefault ? 50 : 25;
  };

  // Row 2: [0] Assistant (25%), [1] Operational (wide 50%), [2] Marketing (25%)
  const getRow2FlexWeight = (teamId: string, isWideByDefault?: boolean) => {
    if (prefersReducedMotion) {
      return isWideByDefault ? 50 : 25;
    }

    if (!hoveredId || !row2Teams.some((t) => t.id === hoveredId)) {
      return isWideByDefault ? 50 : 25; // Default rest state (25 + 50 + 25 = 100)
    }

    if (hoveredId === 'operational-support-team') {
      return teamId === 'operational-support-team' ? 58 : 21; // 21 + 58 + 21 = 100
    }

    if (hoveredId === 'executive-assistant-team') {
      if (teamId === 'executive-assistant-team') return 48;
      if (teamId === 'operational-support-team') return 27;
      if (teamId === 'marketing-team') return 25;
      return 25; // 48 + 27 + 25 = 100
    }

    if (hoveredId === 'marketing-team') {
      if (teamId === 'marketing-team') return 48;
      if (teamId === 'operational-support-team') return 27;
      if (teamId === 'executive-assistant-team') return 25;
      return 25; // 25 + 27 + 48 = 100
    }

    return isWideByDefault ? 50 : 25;
  };

  const handleCardClick = (slug: string) => {
    // Ensure slug has trailing slash if requested, and clear any residual hash
    const targetUrl = slug.endsWith('/') ? slug : `${slug}/`;
    window.history.pushState({}, '', targetUrl);
    window.location.hash = '';
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section className="relative w-full min-h-screen bg-[#FAFAFA] text-slate-900 pt-2 sm:pt-4 md:pt-5 pb-12 md:pb-16 lg:pb-20 overflow-hidden font-sans selection:bg-primary selection:text-white">
      {/* Subtle background ambiance matching homepage style */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-slate-100/70 to-transparent rounded-full pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-50/30 to-transparent rounded-full pointer-events-none blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Top Header: Title, Subtitle, and Join Us Button */}
        <div className="mb-6 lg:mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-2">
            <div>
              <h1 className="text-[28px] font-bold text-primary tracking-tight leading-tight mt-[20px]">
                Meet our teams
              </h1>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-medium mt-2.5 max-w-2xl leading-relaxed">
                A global team united by expertise, purpose, and impact.
              </p>
            </div>

            {/* Join Us CTA Button */}
            <div className="pt-2 md:pt-0 flex-shrink-0">
              <motion.a
                href="https://chelsongordon.com/careers/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-xl bg-accent text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-widest text-xs transition-all shadow-sm group border border-transparent whitespace-nowrap"
              >
                <span>Join Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TEAM CARDS GALLERY CONTAINER WITH DECORATIVE DOT GRIDS   */}
        {/* ======================================================== */}
        <div className="relative">
          {/* Dot Grid 1: Top-Left in Brand Blue (1:1 Square Matrix, resting partially behind card) */}
          <div className="absolute -top-8 -left-6 sm:-left-8 lg:-left-10 pointer-events-none z-0 hidden sm:block">
            <DotGrid
              rows={8}
              cols={8}
              color="#042F61"
              opacity={0.36}
              dotSize={3.5}
              gap={16}
            />
          </div>

          {/* Dot Grid 2: Middle-Right in Brand Yellow (1:1 Square Matrix 8x8, resting partially behind card) */}
          <div className="absolute top-[48%] -right-6 sm:-right-8 lg:-right-10 -translate-y-1/2 pointer-events-none z-0 hidden sm:block">
            <DotGrid
              rows={8}
              cols={8}
              color="#FDB913"
              opacity={0.65}
              dotSize={3.5}
              gap={16}
            />
          </div>

          {/* Dot Grid 3: Bottom-Left in Brand Blue (1:1 Square Matrix 8x8, resting partially behind card) */}
          <div className="absolute -bottom-8 -left-6 sm:-left-8 lg:-left-10 pointer-events-none z-0 hidden sm:block">
            <DotGrid
              rows={8}
              cols={8}
              color="#042F61"
              opacity={0.36}
              dotSize={3.5}
              gap={16}
            />
          </div>

          {/* DESKTOP / TABLET ACCORDION GALLERY (50% : 25% : 25% and 25% : 50% : 25%) */}
          <div className="hidden lg:flex flex-col gap-5 xl:gap-6 relative z-[1]">
            {/* ROW 1: [ Learning & Academic (50%) ] [ Consultant (25% 1:1) ] [ Human Strategy (25% 1:1) ] */}
            <div className="flex items-stretch gap-5 xl:gap-6 w-full">
              {row1Teams.map((team) => (
                <TeamCard
                  key={team.id}
                  team={team}
                  isActive={hoveredId === team.id}
                  isHoveredAny={Boolean(hoveredId && row1Teams.some(t => t.id === hoveredId))}
                  flexWeight={getRow1FlexWeight(team.id, team.isWideByDefault)}
                  onHover={setHoveredId}
                  onClick={handleCardClick}
                />
              ))}
            </div>

            {/* ROW 2: [ Executive Assistant (25% 1:1) ] [ Operational Support (50%) ] [ Marketing (25% 1:1) ] */}
            <div className="flex items-stretch gap-5 xl:gap-6 w-full">
              {row2Teams.map((team) => (
                <TeamCard
                  key={team.id}
                  team={team}
                  isActive={hoveredId === team.id}
                  isHoveredAny={Boolean(hoveredId && row2Teams.some(t => t.id === hoveredId))}
                  flexWeight={getRow2FlexWeight(team.id, team.isWideByDefault)}
                  onHover={setHoveredId}
                  onClick={handleCardClick}
                />
              ))}
            </div>
          </div>

          {/* MOBILE / TABLET ADAPTIVE GALLERY (Single Overlay Cards) */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 relative z-[1]">
            {TEAMS_DATA.map((team) => {
              const TeamIcon = getTeamIcon(team.id);
              const imagePositionClass = 
                team.id === 'consultant-team' 
                  ? 'object-right' 
                  : team.id === 'human-strategy-team' 
                  ? 'object-left' 
                  : 'object-center';

              return (
                <div
                  key={team.id}
                  onClick={() => handleCardClick(team.slug)}
                  className="relative h-[320px] sm:h-[350px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-sm border border-slate-200/80 transition-all duration-300 group hover:border-primary hover:shadow-lg"
                  role="link"
                  aria-label={`View ${team.name}`}
                >
                  {/* Background Image with grayscale -> natural full-color on hover */}
                  <img
                    src={team.image}
                    alt={team.imageAlt || team.name}
                    className={`absolute inset-0 w-full h-full object-cover ${imagePositionClass} filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500`}
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Neutral bottom scrim for clean, crisp text legibility (no blue gradient overlay) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 via-35% to-transparent pointer-events-none" />

                  {/* Brand Premium Blue Border on Hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100 border-2 border-primary z-[5]"
                  />

                  {/* Overlaid Content */}
                  <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10 text-white">
                    {/* Top: Custom SVG Team Icon Badge + Tooltip helper */}
                    <div className="flex items-center justify-between gap-2">
                      <div 
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full shadow-sm transition-all duration-300 border flex-shrink-0 bg-primary text-white border-white/20 group-hover:bg-accent group-hover:text-primary group-hover:border-accent/40"
                        title={team.category}
                      >
                        <TeamIcon className="w-4 h-4" />
                      </div>

                      <div className="inline-flex items-center gap-1 text-white/80 text-[11px] font-medium tracking-wide">
                        <span>Click to view team</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-white leading-tight tracking-tight drop-shadow-sm mb-1.5 group-hover:text-accent transition-colors">
                        {team.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal line-clamp-3 drop-shadow-sm mt-1">
                        {team.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Button: Connect With Our Leadership */}
        <div className="mt-8 sm:mt-10 flex items-center justify-end">
          <motion.a
            href="https://chelsongordon.com/contact-us-page/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-white hover:bg-accent hover:text-primary font-bold uppercase tracking-widest text-xs transition-all shadow-sm group border border-transparent whitespace-nowrap"
          >
            <UserCheck className="w-4 h-4 text-accent group-hover:text-primary transition-colors" />
            <span>Connect With Our Leadership</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default TeamsSection;
