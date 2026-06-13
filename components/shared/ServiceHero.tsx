'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { customEase } from '@/lib/utils/animation';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  videoSrc?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function ServiceHero({
  eyebrow,
  title,
  description,
  videoSrc,
  primaryCta = { label: 'Get a Quote', href: '/contact' },
  secondaryCta = { label: 'Book Consultation', href: '/contact' },
}: ServiceHeroProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-charcoal-950 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20 px-4 relative overflow-hidden">
      {videoSrc && !reducedMotion && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      {videoSrc && reducedMotion && (
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-navy-primary opacity-90" />
      )}
      <div className="absolute inset-0 bg-charcoal-950/45" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: customEase }}
        >
          <p className="font-sans text-gold-primary text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            {eyebrow}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-[1.15]">
            {title}
          </h1>
          <p className="font-sans text-text-on-dark text-base sm:text-lg md:text-xl max-w-3xl mb-6 sm:mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={primaryCta.href}
              className="bg-gold-primary text-charcoal-950 px-6 sm:px-8 py-3 min-h-[48px] rounded-lg font-semibold hover:bg-gold-secondary transition-colors text-center flex items-center justify-center touch-manipulation"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="border border-gold-primary text-gold-primary px-6 sm:px-8 py-3 min-h-[48px] rounded-lg font-semibold hover:bg-gold-primary hover:text-charcoal-950 transition-colors text-center flex items-center justify-center touch-manipulation"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
