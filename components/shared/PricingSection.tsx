'use client';

import { motion } from 'framer-motion';
import PremiumPricingCard from '@/components/shared/PremiumPricingCard';
import type { PricingTier } from '@/lib/data/pricing';
import { customEase } from '@/lib/utils/animation';

const marketCopy = {
  uk: {
    eyebrow: 'Pricing',
    title: 'Transparent Pricing',
    subtitle: 'Custom monthly packages tailored to your business size, transaction volume, and compliance needs.',
    footnote: 'Every package is quoted individually — no hidden fees, no surprises.',
  },
  uae: {
    eyebrow: 'Pricing',
    title: 'Transparent Pricing',
    subtitle: 'Fixed monthly packages for mainland and free zone businesses across the UAE.',
    footnote: 'All prices exclude 5% UAE VAT.',
  },
};

interface PricingSectionProps {
  tiers: PricingTier[];
  market: 'uk' | 'uae';
}

export default function PricingSection({ tiers, market }: PricingSectionProps) {
  const copy = marketCopy[market];
  const mobileTiers = [...tiers].sort((a, b) => Number(b.highlighted) - Number(a.highlighted));

  return (
    <section className="relative overflow-hidden bg-white-secondary py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(201,162,39,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: customEase }}
          className="text-center mb-10 md:mb-14 max-w-3xl mx-auto"
        >
          <p className="font-sans text-gold-primary tracking-[0.2em] text-[10px] md:text-xs font-semibold uppercase mb-3">
            {copy.eyebrow}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-navy-primary tracking-tight mb-3">
            {copy.title}
          </h2>
          <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed">
            {copy.subtitle}
          </p>
        </motion.div>

        {/* Mobile: swipeable cards */}
        <div className="md:hidden -mx-5 px-5">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {mobileTiers.map((tier, index) => (
              <PremiumPricingCard
                key={tier.tier}
                title={tier.tier}
                price={tier.price}
                description={tier.note}
                features={tier.features}
                featured={tier.highlighted}
                index={index}
              />
            ))}
          </div>
          <p className="text-center text-[11px] text-text-muted font-sans mt-2">
            Swipe to compare plans →
          </p>
        </div>

        {/* Desktop: elevated grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-7 items-stretch">
          {tiers.map((tier, index) => (
            <PremiumPricingCard
              key={tier.tier}
              title={tier.tier}
              price={tier.price}
              description={tier.note}
              features={tier.features}
              featured={tier.highlighted}
              index={index}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center font-sans text-xs md:text-sm text-text-muted mt-8 md:mt-10"
        >
          {copy.footnote}
        </motion.p>
      </div>
    </section>
  );
}
