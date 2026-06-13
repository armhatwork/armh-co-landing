'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  client: string;
  company: string;
  location: string;
}

interface MarqueeSliderProps {
  testimonials: Testimonial[];
}

export default function MarqueeSlider({ testimonials }: MarqueeSliderProps) {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-12 sm:py-20 bg-white-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-navy-primary tracking-tight text-center">
          What Our Clients Say
        </h2>
      </div>

      <div
        className="relative overflow-hidden w-full"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onTouchCancel={() => setIsPaused(false)}
      >
        <div
          className={`animate-marquee gap-4 sm:gap-8 flex ${
            isPaused ? '[animation-play-state:paused]' : ''
          } hover:[animation-play-state:paused]`}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] max-w-[400px] sm:w-[360px] md:w-[400px] bg-white-primary border border-border-light rounded-2xl p-5 sm:p-8 shadow-subtle"
            >
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gold-primary fill-gold-primary"
                    />
                  ))}
                </div>
                <p className="font-sans text-text-secondary leading-relaxed italic text-sm md:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-primary font-bold text-base sm:text-lg">
                    {testimonial.client.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-sans font-bold text-navy-primary tracking-tight truncate">
                    {testimonial.client}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-text-secondary truncate">
                    {testimonial.company} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-white-secondary to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-white-secondary to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
