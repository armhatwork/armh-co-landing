'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { customEase } from '@/lib/utils/animation';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  index?: number;
}

function formatPrice(price: string) {
  if (price.toLowerCase().includes('custom')) {
    return { main: 'Custom', suffix: '/ month' };
  }

  const aedMatch = price.match(/^(AED\s*[\d,]+)/i);
  if (aedMatch) {
    return { main: aedMatch[1], suffix: '/ month' };
  }

  return { main: price, suffix: '' };
}

export default function PremiumPricingCard({
  title,
  price,
  description,
  features,
  featured = false,
  index = 0,
}: PricingCardProps) {
  const { main, suffix } = formatPrice(price);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: customEase, delay: index * 0.08 }}
      className={`
        relative flex h-full w-[min(88vw,340px)] shrink-0 snap-center flex-col
        md:w-auto md:shrink
        rounded-2xl border p-6 sm:p-7 lg:p-8
        transition-all duration-300
        ${featured
          ? 'border-gold-primary/50 bg-navy-primary text-white shadow-[0_20px_50px_rgba(10,22,40,0.35)] md:scale-[1.04] md:z-10'
          : 'border-border-light bg-white-primary text-navy-primary shadow-sm hover:border-gold-primary/30 hover:shadow-md'
        }
      `}
    >
      {featured && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-lg bg-gold-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
          Most Popular
        </div>
      )}

      <div className="mb-5 pt-2">
        <p className={`font-sans text-[10px] font-semibold uppercase tracking-[0.2em] mb-2 ${featured ? 'text-gold-primary' : 'text-gold-primary'}`}>
          {title}
        </p>
        <div className="flex items-end gap-1.5 flex-wrap">
          <span className={`font-serif text-4xl sm:text-[2.75rem] font-bold leading-none tracking-tight ${featured ? 'text-white' : 'text-navy-primary'}`}>
            {main}
          </span>
          {suffix && (
            <span className={`font-sans text-sm font-medium pb-1 ${featured ? 'text-text-on-dark-muted' : 'text-text-secondary'}`}>
              {suffix}
            </span>
          )}
        </div>
      </div>

      <p className={`font-sans text-sm leading-relaxed mb-6 ${featured ? 'text-text-on-dark-muted' : 'text-text-secondary'}`}>
        {description}
      </p>

      <div className={`h-px w-full mb-6 ${featured ? 'bg-white/10' : 'bg-border-light'}`} />

      <ul className="space-y-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${featured ? 'bg-gold-primary/15 text-gold-primary' : 'bg-gold-faint text-gold-primary'}`}>
              <Check className="h-3 w-3" strokeWidth={2.5} />
            </span>
            <span className={`font-sans text-sm leading-snug ${featured ? 'text-text-on-dark' : 'text-text-secondary'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
