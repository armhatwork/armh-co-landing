'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { pricingCardVariants } from '@/lib/utils/animation';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
}

export default function PremiumPricingCard({
  title,
  price,
  description,
  features,
  ctaText,
  ctaHref,
  featured = false,
}: PricingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Use lower threshold on mobile to support tall vertical cards
  const isInView = useInView(ref, { amount: isMobile ? 0.15 : 0.4 });
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setIsFocused(isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white-primary
        border ${featured ? 'border-gold-primary shadow-[0_0_20px_rgba(201,162,39,0.1)]' : 'border-border-light'}
        p-8
      `}
      variants={pricingCardVariants}
      initial="initial"
      animate={isFocused ? 'focus' : 'initial'}
    >
      {featured && (
        <motion.div
          className="absolute top-0 right-0 bg-gold-primary text-white-primary text-xs font-bold px-4 py-2 rounded-bl-xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          POPULAR
        </motion.div>
      )}

      <div className="relative z-10">
        <h3 className="font-sans text-2xl font-bold text-navy-primary tracking-tight mb-2">
          {title}
        </h3>
        
        <div className="mb-4">
          <span className="font-sans text-4xl font-bold text-navy-primary tracking-tight">
            {price}
          </span>
          {price !== 'Custom' && (
            <span className="text-text-secondary ml-2 font-medium">/month</span>
          )}
        </div>
        
        <p className="font-sans text-text-secondary mb-6 leading-relaxed text-sm md:text-base">
          {description}
        </p>
        
        <ul className="space-y-3.5 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 text-text-secondary"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              <div className="w-5 h-5 rounded-full bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
              </div>
              <span className="text-sm font-medium leading-normal">{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        <motion.a
          href={ctaHref}
          className={`
            block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 text-sm tracking-wide
            ${featured
              ? 'bg-gold-primary hover:bg-gold-secondary text-white-primary hover:shadow-[0_4px_20px_rgba(201,162,39,0.25)]'
              : 'bg-white-secondary hover:bg-gray-light border border-gold-primary text-gold-primary hover:shadow-[0_4px_15px_rgba(201,162,39,0.1)]'
            }
          `}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {ctaText}
        </motion.a>
      </div>
    </motion.div>
  );
}
