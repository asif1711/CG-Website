import React from 'react';
import { TeamInfo } from './types';
import { 
  BookOpen, 
  Compass, 
  Users, 
  ClipboardCheck, 
  Settings, 
  Megaphone,
  ArrowUpRight,
  LucideIcon
} from 'lucide-react';

interface TeamCardProps {
  team: TeamInfo;
  isActive: boolean;
  isHoveredAny: boolean;
  flexWeight: number;
  onHover: (id: string | null) => void;
  onClick?: (slug: string) => void;
}

export const getTeamIcon = (id: string): LucideIcon => {
  switch (id) {
    case 'learning-academic-team':
      return BookOpen;
    case 'consultant-team':
      return Compass;
    case 'human-strategy-team':
      return Users;
    case 'executive-assistant-team':
      return ClipboardCheck;
    case 'operational-support-team':
      return Settings;
    case 'marketing-team':
      return Megaphone;
    default:
      return Users;
  }
};

export const TeamCard: React.FC<TeamCardProps> = ({
  team,
  isActive,
  isHoveredAny,
  flexWeight,
  onHover,
  onClick,
}) => {
  const TeamIcon = getTeamIcon(team.id);

  const handleClick = () => {
    if (onClick) {
      onClick(team.slug);
    }
  };

  const getImagePositionClass = () => {
    if (team.id === 'consultant-team') {
      return isActive ? 'object-center' : 'object-right';
    }
    if (team.id === 'human-strategy-team') {
      return 'object-left';
    }
    return 'object-center';
  };

  return (
    <div
      style={{
        flexGrow: flexWeight,
        flexShrink: 1,
        flexBasis: 0,
        transition: 'flex-grow 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease',
        willChange: 'flex-grow',
      }}
      className={`relative h-[290px] sm:h-[310px] md:h-[330px] lg:h-[310px] xl:h-[340px] 2xl:h-[360px] min-w-0 rounded-2xl xl:rounded-3xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm border border-slate-200/80 transform-gpu group ${
        isHoveredAny && !isActive ? 'opacity-80 lg:opacity-75' : 'opacity-100'
      }`}
      tabIndex={0}
      onMouseEnter={() => onHover(team.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(team.id)}
      onBlur={() => onHover(null)}
      onClick={handleClick}
      role="link"
      aria-label={`View ${team.name}`}
    >
      {/* Background Image with smooth zoom and grayscale -> natural full-color on hover */}
      <img
        src={team.image}
        alt={team.imageAlt || team.name}
        className={`absolute inset-0 w-full h-full object-cover ${getImagePositionClass()} transition-all duration-500 ease-out transform-gpu ${
          isActive 
            ? 'grayscale-0 scale-105' 
            : 'grayscale contrast-[1.05] scale-100'
        }`}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
      />

      {/* Neutral dark bottom scrim for clean, crisp text legibility (no blue gradient overlay) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 via-35% to-transparent pointer-events-none transition-opacity duration-300" />

      {/* Brand Premium Blue Border on Hover/Active */}
      <div 
        className={`absolute inset-0 rounded-2xl xl:rounded-3xl pointer-events-none transition-all duration-500 z-[5] ${
          isActive 
            ? 'opacity-100 border-2 border-primary' 
            : 'opacity-0 border-2 border-transparent'
        }`}
      />

      {/* Overlaid Content Container */}
      <div className="absolute inset-0 p-5 sm:p-6 xl:p-7 flex flex-col justify-between z-10 text-white select-none pointer-events-none">
        {/* Top Header: Badge + Subtle "Click to view team" tooltip */}
        <div className="flex items-center justify-between gap-2 pointer-events-auto">
          {/* Custom SVG Team Icon Badge */}
          <div 
            className={`inline-flex items-center justify-center w-8 h-8 xl:w-9 xl:h-9 rounded-full shadow-sm transition-all duration-300 border flex-shrink-0 ${
              isActive 
                ? 'bg-accent text-primary border-accent/40 shadow-md' 
                : 'bg-primary text-white border-white/20 group-hover:bg-accent group-hover:text-primary group-hover:border-accent/40'
            }`}
            title={team.category}
          >
            <TeamIcon className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
          </div>

          {/* Subtle UI/UX tooltip */}
          <div
            className={`inline-flex items-center gap-1 text-white/85 text-[11px] font-medium tracking-wide transition-all duration-300 transform-gpu ${
              isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}
          >
            <span className="drop-shadow-sm">Click to view team</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </div>
        </div>

        {/* Bottom Content: Anchored container with smooth delayed text fade-in */}
        <div className="w-full transform-gpu">
          <h3 className="font-bold text-base sm:text-lg xl:text-xl text-white leading-tight tracking-tight drop-shadow-sm group-hover:text-accent transition-colors duration-200">
            {team.name}
          </h3>

          {/* Smooth Fade & Slide-In with slight entry delay to prevent reflow jitter */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out transform-gpu ${
              isActive 
                ? 'max-h-24 opacity-100 translate-y-0 mt-1.5 delay-100' 
                : 'max-h-0 opacity-0 translate-y-2 mt-0 duration-200'
            }`}
          >
            <p className="text-xs sm:text-[13px] xl:text-[13.5px] text-white/90 leading-relaxed font-normal drop-shadow-sm pb-0.5 line-clamp-3">
              {team.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
