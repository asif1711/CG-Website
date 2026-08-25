import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, Sparkles } from 'lucide-react';

interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  content: string;
  side: 'left' | 'right';
  rating?: number;
  date?: string;
}

// Date formatter helper: converts ISO strings like "2026-08-10T04:12:31+00:00" to "10 August 2026"
function formatDate(dateStr?: string): string {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) {
      return dateStr;
    }
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(d);
  } catch {
    return dateStr;
  }
}

// Fallback dummy testimonials
const FALLBACK_RAW = [
  {
    name: 'Michael Anderson',
    company: 'Apex Global Management',
    service: 'Consulting Services',
    rating: 5,
    testimonial:
      'The team was professional, responsive and easy to work with throughout the entire process. We were very happy with the support provided.',
    date: '2026-07-15T00:00:00+00:00',
  },
  {
    name: 'Sarah Williams',
    company: 'Vanguard Horizon Group',
    service: 'Professional Services',
    rating: 5,
    testimonial:
      'Excellent communication and knowledgeable support from start to finish. The process was straightforward and well managed.',
    date: '2026-06-22T00:00:00+00:00',
  },
  {
    name: 'David Thompson',
    company: 'Crossroads Capital',
    service: 'Consulting',
    rating: 4,
    testimonial:
      'A reliable and professional team that understood our requirements and provided practical support when we needed it.',
    date: '2026-05-10T00:00:00+00:00',
  },
];

const FALLBACK_TESTIMONIALS: Testimonial[] = FALLBACK_RAW.map((item, idx) => ({
  id: `fallback-${idx}`,
  name: item.name,
  role: item.service ? `${item.company} · ${item.service}` : item.company,
  content: item.testimonial,
  side: idx % 2 === 0 ? 'left' : 'right',
  rating: item.rating,
  date: formatDate(item.date),
}));

const BUBBLE_DELAYS = [0.10, 0.45, 0.80];

export default function Testimonials() {
  // Initial state uses the 3 fallback testimonials for zero layout shift
  const [testimonials, setTestimonials] = useState<Testimonial[]>(FALLBACK_TESTIMONIALS);

  useEffect(() => {
    let isMounted = true;

    const fetchTestimonials = async () => {
      let apiData: any[] | null = null;

      // 1. Prefer relative endpoint
      try {
        const res = await fetch('/wp-json/cg/v1/testimonials', {
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          const json = await res.json();
          if (Array.isArray(json)) {
            apiData = json;
          }
        }
      } catch {
        // Relative fetch failed or offline
      }

      // 2. Absolute endpoint fallback if relative returned no data
      if (!apiData) {
        try {
          const res = await fetch('https://chelsongordon.com/wp-json/cg/v1/testimonials', {
            headers: { Accept: 'application/json' },
          });
          if (res.ok) {
            const json = await res.json();
            if (Array.isArray(json)) {
              apiData = json;
            }
          }
        } catch {
          // Absolute fetch failed or CORS blocked
        }
      }

      if (!isMounted) return;

      if (apiData && apiData.length > 0) {
        const mappedApi: Testimonial[] = apiData
          .map((item: any, idx: number) => {
            const name = item.name || 'Anonymous Client';
            const company = item.company || '';
            const service = item.service || '';
            let role = company;
            if (company && service) {
              role = `${company} · ${service}`;
            } else if (service) {
              role = service;
            } else if (!role) {
              role = item.role || 'Valued Client';
            }

            return {
              id: item.id || `api-${idx}`,
              name,
              role,
              content: item.testimonial || item.content || '',
              side: (idx % 2 === 0 ? 'left' : 'right') as 'left' | 'right',
              rating: Number(item.rating) || 5,
              date: formatDate(item.date),
            };
          })
          .filter((item) => item.content.trim().length > 0);

        if (mappedApi.length > 0) {
          let combined: Testimonial[] = [];
          if (mappedApi.length >= 3) {
            combined = mappedApi.slice(0, 3);
          } else {
            combined = [...mappedApi];
            const needed = 3 - mappedApi.length;
            for (let i = 0; i < needed; i++) {
              combined.push(FALLBACK_TESTIMONIALS[i]);
            }
          }

          // Re-assign alternating sides for clean layout
          combined = combined.map((item, idx) => ({
            ...item,
            side: idx % 2 === 0 ? 'left' : 'right',
          }));

          setTestimonials(combined);
        }
      }
    };

    fetchTestimonials();

    return () => {
      isMounted = false;
    };
  }, []);

  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-[#fafaf8] py-20 px-6 pb-24 md:py-24 md:px-8 overflow-hidden font-sans"
      style={{ 
        fontFamily: "'Montserrat', sans-serif"
      }}
    >
      {/* Dynamic CSS Shimmer Animation & Custom Styles */}
      <style>{`
        .gold-shimmer-text {
          background: linear-gradient(90deg, #c8920a 0%, #fdb913 40%, #c8920a 60%, #a87100 100%);
          background-size: 200% auto;
          animation: goldShimmer 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes goldShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .dot-grid-bg {
          background-image: radial-gradient(circle, rgba(4,47,97,0.07) 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      {/* Decorative Background Orbs & Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top-Right Gold Orb */}
        <div
          className="absolute rounded-full"
          style={{
            width: '520px',
            height: '520px',
            top: '0px',
            right: '-160px',
            background: 'radial-gradient(circle, rgba(253,185,19,0.06) 0%, transparent 65%)',
          }}
        />

        {/* Bottom-Left Navy Orb */}
        <div
          className="absolute rounded-full"
          style={{
            width: '440px',
            height: '440px',
            bottom: '-120px',
            left: '-120px',
            background: 'radial-gradient(circle, rgba(4,47,97,0.06) 0%, transparent 65%)',
          }}
        />

        {/* Dot Grid Overlay - smoothly masked at top so there is no hard cut */}
        <div 
          className="absolute inset-0 dot-grid-bg" 
          style={{
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100px, rgba(0,0,0,1) 240px)',
            maskImage: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100px, rgba(0,0,0,1) 240px)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          {/* Eyebrow Row with Flanking Gradient Lines */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div
              className="h-[1px] w-12 sm:w-20"
              style={{ background: 'linear-gradient(90deg, transparent, #fdb913)' }}
            />
            <span
              className="text-[12px] font-bold uppercase tracking-[0.2em]"
              style={{ color: '#c8920a' }}
            >
              Client Feedback & Stories
            </span>
            <div
              className="h-[1px] w-12 sm:w-20"
              style={{ background: 'linear-gradient(90deg, #fdb913, transparent)' }}
            />
          </div>

          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-[2.25rem] font-extrabold tracking-tight leading-[1.1] mb-3"
            style={{ color: '#042f61' }}
          >
            Trusted by Leaders <span className="gold-shimmer-text">Worldwide</span>
          </h2>

          {/* Subheading */}
          <p
            className="text-sm font-medium max-w-lg mx-auto leading-[1.75] tracking-[0.01em]"
            style={{ color: 'rgba(4,47,97,0.75)' }}
          >
            Real experiences and testimonials from executives, legal leaders, and venture founders who work with Chelson Gordon.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-8">
            <div className="text-center">
              <div className="text-2xl font-extrabold gold-shimmer-text">99.4%</div>
              <div
                className="text-[12px] font-semibold tracking-[0.12em] uppercase mt-1"
                style={{ color: 'rgba(4,47,97,0.7)' }}
              >
                Client Satisfaction
              </div>
            </div>

            <div
              className="hidden sm:block w-[1px] h-8"
              style={{ background: 'rgba(4,47,97,0.15)' }}
            />

            <div className="text-center">
              <div className="text-2xl font-extrabold gold-shimmer-text">500+</div>
              <div
                className="text-[12px] font-semibold tracking-[0.12em] uppercase mt-1"
                style={{ color: 'rgba(4,47,97,0.7)' }}
              >
                Projects Delivered
              </div>
            </div>

            <div
              className="hidden sm:block w-[1px] h-8"
              style={{ background: 'rgba(4,47,97,0.15)' }}
            />

            <div className="text-center">
              <div className="text-2xl font-extrabold gold-shimmer-text">4.9/5</div>
              <div
                className="text-[12px] font-semibold tracking-[0.12em] uppercase mt-1"
                style={{ color: 'rgba(4,47,97,0.7)' }}
              >
                Client Rating
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chat Feed - Displaying exactly 3 testimonials */}
        <div className="max-w-[680px] mx-auto flex flex-col gap-5">
          {testimonials.map((item, index) => {
            const isLeft = item.side === 'left';
            const delay = BUBBLE_DELAYS[index] || 0.1 * (index + 1);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
                className={`flex items-end gap-2.5 ${isLeft ? 'justify-start' : 'justify-end'}`}
              >
                {/* Left Avatar */}
                {isLeft && (
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold tracking-[0.05em] select-none shrink-0 mb-3"
                    style={{
                      background: 'linear-gradient(135deg, #042f61 0%, #083580 100%)',
                      color: '#fdb913',
                    }}
                  >
                    {getInitials(item.name)}
                  </div>
                )}

                {/* Chat Bubble Container & Timestamp */}
                <div className={`flex flex-col ${isLeft ? 'items-start' : 'items-end'} max-w-[85%] sm:max-w-[72%]`}>
                  <div
                    className="relative p-3.5 px-4 pb-3"
                    style={{
                      background: isLeft
                        ? 'linear-gradient(135deg, #042f61 0%, #083580 100%)'
                        : 'linear-gradient(135deg, #fdb913 0%, #e8a80b 100%)',
                      borderRadius: isLeft ? '4px 18px 18px 18px' : '18px 4px 18px 18px',
                      boxShadow: isLeft
                        ? '0 8px 32px rgba(4,47,97,0.22), 0 1px 4px rgba(4,47,97,0.1)'
                        : '0 8px 32px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)',
                    }}
                  >
                    {/* Top Row: Rating & Verified Badge */}
                    <div className="flex items-center justify-between gap-3 mb-2">
                      {/* 5 Stars */}
                      <div className="flex items-center gap-0.5">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-current"
                            style={{ color: isLeft ? '#fdb913' : '#042f61' }}
                          />
                        ))}
                      </div>

                      {/* Verified Badge */}
                      <div className="flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                          <circle
                            cx="10"
                            cy="10"
                            r="9"
                            fill={isLeft ? '#fdb913' : '#042f61'}
                          />
                          <path
                            d="M6 10.5l2.5 2.5 5.5-5.5"
                            stroke={isLeft ? '#042f61' : '#fdb913'}
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span
                          className="text-[12px] font-medium"
                          style={{ color: isLeft ? 'rgba(255,255,255,0.45)' : 'rgba(4,47,97,0.55)' }}
                        >
                          Verified
                        </span>
                      </div>
                    </div>

                    {/* Body Message */}
                    <p
                      className="text-[14px] font-normal leading-[1.65] tracking-[0.01em] my-1"
                      style={{ color: isLeft ? '#ffffff' : '#042f61' }}
                    >
                      "{item.content}"
                    </p>

                    {/* Author Info */}
                    <div className="mt-2.5 pt-2 border-t border-white/10 flex flex-col">
                      <span
                        className="text-[12px] font-bold"
                        style={{ color: isLeft ? '#fdb913' : '#021a38' }}
                      >
                        {item.name}
                      </span>
                      <span
                        className="text-[12px] font-normal"
                        style={{ color: isLeft ? 'rgba(255,255,255,0.6)' : 'rgba(4,47,97,0.6)' }}
                      >
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Avatar */}
                {!isLeft && (
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold tracking-[0.05em] select-none shrink-0 mb-3"
                    style={{
                      background: 'linear-gradient(135deg, #fdb913 0%, #c8920a 100%)',
                      color: '#042f61',
                    }}
                  >
                    {getInitials(item.name)}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <p
            className="text-[14px] font-normal mb-5"
            style={{ color: 'rgba(4,47,97,0.45)' }}
          >
            Join hundreds of satisfied clients who trust Chelson Gordon
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Primary CTA */}
            <motion.a
              href="mailto:support.coordinator@chelsongordon.com?subject=Inquiry%20via%20Website"
              whileHover={{
                scale: 1.02,
                y: -2,
                boxShadow: '0 12px 36px rgba(253,185,19,0.5)',
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold tracking-[0.04em] transition-all cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #fdb913 0%, #c8920a 100%)',
                color: '#042f61',
                boxShadow: '0 8px 28px rgba(253,185,19,0.35)',
              }}
            >
              <span>Work With Us</span>
              <Sparkles className="w-4 h-4" />
            </motion.a>

            {/* Secondary CTA: Navigates directly to https://chelsongordon.com/feedback/ */}
            <motion.a
              href="https://chelsongordon.com/feedback/"
              whileHover={{
                scale: 1.02,
                y: -2,
                backgroundColor: 'rgba(4,47,97,0.09)',
                borderColor: '#fdb913',
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer"
              style={{
                background: 'rgba(4,47,97,0.05)',
                border: '1.5px solid rgba(4,47,97,0.18)',
                color: '#042f61',
              }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Leave Feedback</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
