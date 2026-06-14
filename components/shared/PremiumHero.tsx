'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SplitText from './SplitText';
import PremiumButton from './PremiumButton';
import { customEase } from '@/lib/utils/animation';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

interface PremiumHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText: string;
  ctaHref: string;
  backgroundVideo?: string;
}

export default function PremiumHero({
  title,
  subtitle,
  description = 'International accounting expertise. Local regulatory precision. Built for businesses that demand both.',
  ctaText,
  ctaHref,
  backgroundVideo,
}: PremiumHeroProps) {
  const reducedMotion = useReducedMotion();
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setShouldPlayVideo(window.innerWidth >= 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen, { passive: true });
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-white-primary overflow-hidden pt-24 sm:pt-28">
      {backgroundVideo && !reducedMotion && shouldPlayVideo && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white-primary/70 via-white-primary/50 to-white-primary/75" />
        </>
      )}
      {backgroundVideo && (reducedMotion || !shouldPlayVideo) && (
        <div className="absolute inset-0 bg-gradient-to-b from-white-secondary to-white-primary" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: customEase }}
        >
          <p className="font-sans text-navy-primary text-sm font-medium tracking-[0.15em] uppercase mb-6">
            {subtitle}
          </p>
        </motion.div>

        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-navy-primary tracking-tight mb-6 sm:mb-8 leading-[1.1]">
          <SplitText text={title} delay={reducedMotion ? 0 : 0.3} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: reducedMotion ? 0 : 0.8, ease: customEase }}
          className="font-sans text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: reducedMotion ? 0 : 1, ease: customEase }}
        >
          <PremiumButton href={ctaHref}>{ctaText}</PremiumButton>
        </motion.div>
      </div>
    </section>
  );
}
