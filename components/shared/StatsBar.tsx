'use client';

import { motion } from 'framer-motion';
import { Users, CheckCircle2, Clock, Briefcase, TrendingUp, ShieldCheck, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { customEase } from '@/lib/utils/animation';

interface StatItem {
  number: string;
  label: string;
  icon?: string;
}

interface StatsBarProps {
  stats: StatItem[];
  market?: 'uk' | 'uae';
}

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  check: CheckCircle2,
  clock: Clock,
  briefcase: Briefcase,
  trending: TrendingUp,
  shield: ShieldCheck,
  building: Building2,
};

const marketCopy = {
  uk: {
    eyebrow: 'Our Track Record',
    title: 'Numbers That Speak for Themselves',
    subtitle: 'Delivering reliable accounting and compliance for UK SMEs.',
  },
  uae: {
    eyebrow: 'Our Track Record',
    title: 'Numbers That Speak for Themselves',
    subtitle: 'Trusted by businesses across all seven Emirates.',
  },
};

const StatsBar = ({ stats, market = 'uk' }: StatsBarProps) => {
  const copy = marketCopy[market];

  return (
    <section className="relative overflow-hidden bg-navy-primary py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,162,39,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_40%,transparent_100%)] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: customEase }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="font-sans text-gold-primary tracking-[0.2em] text-[10px] md:text-xs font-semibold uppercase mb-3">
            {copy.eyebrow}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
            {copy.title}
          </h2>
          <p className="font-sans text-text-on-dark-muted text-sm md:text-base max-w-2xl mx-auto">
            {copy.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon ? iconMap[stat.icon] : undefined;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: customEase, delay: index * 0.08 }}
                className="group relative"
              >
                <div className="relative h-full rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 md:p-7 lg:p-8 transition-all duration-300 hover:border-gold-primary/35 hover:bg-white/[0.07] hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {Icon && (
                    <div className="mb-4 inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gold-primary/10 border border-gold-primary/20 text-gold-primary">
                      <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={1.75} />
                    </div>
                  )}

                  <div className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gold-primary leading-none tracking-tight mb-3">
                    {stat.number}
                  </div>

                  <div className="w-8 h-0.5 bg-gold-primary/40 mb-3 group-hover:w-12 group-hover:bg-gold-primary/70 transition-all duration-300" />

                  <div className="font-sans text-white text-xs md:text-sm font-medium leading-snug">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
