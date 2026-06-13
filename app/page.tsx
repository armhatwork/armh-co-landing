'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { customEase } from '@/lib/utils/animation';

export default function RootPage() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    try {
      const savedMarket = localStorage.getItem('armh_market');
      if (savedMarket === 'uk') {
        router.push('/uk');
      } else if (savedMarket === 'uae') {
        router.push('/uae');
      }
    } catch (error) {
      console.warn('Unable to access localStorage:', error);
    }
  }, [router]);

  const handleMarketSelect = (market: 'uk' | 'uae') => {
    try {
      localStorage.setItem('armh_market', market);
      document.cookie = `armh_market=${market}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    } catch (error) {
      console.warn('Unable to set localStorage:', error);
    }
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-white-secondary flex items-center justify-center px-4 py-12 md:py-20">
        <div className="max-w-5xl w-full text-center animate-pulse">
          <div className="h-12 md:h-16 bg-gray-light/60 rounded-lg w-64 mx-auto mb-4" />
          <div className="h-4 bg-gray-light/60 rounded w-48 mx-auto mb-6" />
          <div className="h-5 bg-gray-light/60 rounded w-full max-w-2xl mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="h-52 bg-white-primary rounded-2xl border border-border-light shadow-subtle" />
            <div className="h-52 bg-white-primary rounded-2xl border border-border-light shadow-subtle" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-white-secondary via-white-primary to-white-secondary flex items-center justify-center px-4 py-8 sm:py-12 md:py-20 relative overflow-hidden pb-safe">
      {/* Soft ambient light orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-navy-primary/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: customEase }}
        className="max-w-5xl w-full text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: customEase, delay: 0.1 }}
        >
          <p className="font-sans tracking-[0.3em] text-xs font-semibold uppercase text-gold-primary mb-5">
            Select Your Market
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-navy-primary mb-4 tracking-tight leading-[1.1]">
            ARMH & Co
          </h1>
          <p className="font-sans tracking-[0.2em] text-xs font-bold uppercase text-text-muted mb-6">
            Chartered Accountants & Tax Advisors
          </p>
          <p className="font-sans text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            International accounting expertise. Local regulatory precision. Built for businesses that demand{' '}
            <span className="text-gold-primary font-semibold">both</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: customEase, delay: 0.25 }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12"
          style={{ perspective: '1200px' }}
        >
          {[
            { market: 'uk' as const, href: '/uk', flag: '/flags/uk.svg', label: 'United Kingdom', sub: 'HMRC · Companies House · ACCA Regulated' },
            { market: 'uae' as const, href: '/uae', flag: '/flags/uae.svg', label: 'United Arab Emirates', sub: 'VAT · Corporate Tax · ACCA · All 7 Emirates' },
          ].map((card, i) => (
            <Link
              key={card.market}
              href={card.href}
              onClick={() => handleMarketSelect(card.market)}
              className="group block"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: customEase, delay: 0.35 + i * 0.1 }}
                whileHover={{ y: -10, rotateX: 4, rotateY: i === 0 ? 3 : -3, scale: 1.02 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="bg-white-primary border border-border-light border-l-4 border-l-gold-primary rounded-2xl p-6 sm:p-8 md:p-10 shadow-subtle hover:shadow-medium hover:border-gold-primary/40 transition-shadow duration-300 min-h-[120px] touch-manipulation"
              >
                <div className="w-16 h-12 mx-auto mb-6">
                  <Image
                    src={card.flag}
                    alt={card.label}
                    width={64}
                    height={48}
                    className="rounded shadow-sm"
                    priority
                  />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-primary mb-3 tracking-tight">
                  {card.label}
                </h2>
                <p className="font-sans text-text-secondary text-sm md:text-base font-medium">
                  {card.sub}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: customEase, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 text-text-muted text-xs md:text-sm font-sans font-medium"
        >
          {['ACCA', 'Xero Partner', 'QuickBooks Certified', 'SECP Recognized'].map((cred, i, arr) => (
            <span key={cred} className="inline-flex items-center gap-3">
              {cred}
              {i < arr.length - 1 && <span className="text-gold-primary font-bold">·</span>}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
