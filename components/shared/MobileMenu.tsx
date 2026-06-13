'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Globe } from 'lucide-react';
import Logo from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  market: 'uk' | 'uae';
}

const MobileMenu = ({ isOpen, onClose, market }: MobileMenuProps) => {
  const [isRegionSelectorOpen, setIsRegionSelectorOpen] = useState(false);
  const router = useRouter();

  // Scroll lock mechanism
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = market === 'uk'
    ? [
        { label: 'Services', href: '/uk#services' },
        { label: 'About', href: '/uk/about' },
        { label: 'Industries', href: '/uk/industries' },
        { label: 'Pricing', href: '/uk/pricing' },
        { label: 'Blog', href: '/uk/blog' },
        { label: 'Contact', href: '/uk/contact' },
      ]
    : [
        { label: 'Services', href: '/uae#services' },
        { label: 'About', href: '/uae/about' },
        { label: 'Industries', href: '/uae/industries' },
        { label: 'Pricing', href: '/uae/pricing' },
        { label: 'Blog', href: '/uae/blog' },
        { label: 'Contact', href: '/uae/contact' },
      ];

  const handleRegionSelect = (selectedMarket: 'uk' | 'uae') => {
    try {
      localStorage.setItem('armh_market', selectedMarket);
      document.cookie = `armh_market=${selectedMarket}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    } catch (e) {
      console.warn('Unable to set region preference:', e);
    }
    setIsRegionSelectorOpen(false);
    onClose();
    router.push(`/${selectedMarket}`);
  };

  const handleBackToSelector = () => {
    try {
      localStorage.removeItem('armh_market');
      document.cookie = 'armh_market=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    } catch (e) {
      console.warn('Unable to clear region preference:', e);
    }
    onClose();
    router.push('/?bypass=true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-xl border-b border-white/5"
        >
          <div className="flex flex-col h-full px-5 py-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            {/* Header with close button */}
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <Logo market={market} variant="dark" />
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-charcoal-800/50 rounded-xl transition-colors touch-manipulation"
                aria-label="Close menu"
              >
                <X size={28} />
              </motion.button>
            </div>

            {/* Navigation links */}
            <div className="flex-1 space-y-2 overflow-y-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="font-sans text-xl font-bold text-white hover:text-gold-primary transition-colors block py-3.5 px-6 rounded-xl hover:bg-charcoal-800/40 hover:backdrop-blur-sm border border-transparent hover:border-gold-primary/10"
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Region selector at bottom */}
            <div className="mt-auto space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
                className="bg-charcoal-800/40 backdrop-blur-sm rounded-2xl p-4 border border-charcoal-700"
              >
                <button
                  onClick={() => setIsRegionSelectorOpen(!isRegionSelectorOpen)}
                  className="font-sans flex items-center justify-between gap-2 text-white hover:text-gold-primary transition-colors py-2 text-base w-full outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-5 flex-shrink-0">
                      <Image
                        src={`/flags/${market}.svg`}
                        alt={market === 'uk' ? 'UK' : 'UAE'}
                        width={32}
                        height={20}
                        className="rounded-sm"
                      />
                    </div>
                    <span className="font-bold">{market === 'uk' ? 'United Kingdom' : 'United Arab Emirates'}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isRegionSelectorOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gold-primary" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isRegionSelectorOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden mt-3"
                    >
                      <div className="space-y-2">
                        <motion.button
                          onClick={() => handleRegionSelect('uk')}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="w-full text-left font-sans text-text-on-dark-muted hover:text-gold-primary hover:bg-charcoal-700/50 transition-all py-3 px-4 rounded-xl flex items-center gap-3 text-sm font-semibold"
                        >
                          <div className="w-8 h-5 flex-shrink-0">
                            <Image
                              src="/flags/uk.svg"
                              alt="UK"
                              width={32}
                              height={20}
                              className="rounded-sm"
                            />
                          </div>
                          <span>United Kingdom</span>
                        </motion.button>
                        <motion.button
                          onClick={() => handleRegionSelect('uae')}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="w-full text-left font-sans text-text-on-dark-muted hover:text-gold-primary hover:bg-charcoal-700/50 transition-all py-3 px-4 rounded-xl flex items-center gap-3 text-sm font-semibold"
                        >
                          <div className="w-8 h-5 flex-shrink-0">
                            <Image
                              src="/flags/uae.svg"
                              alt="UAE"
                              width={32}
                              height={20}
                              className="rounded-sm"
                            />
                          </div>
                          <span>United Arab Emirates</span>
                        </motion.button>
                        
                        <motion.button
                          onClick={handleBackToSelector}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="w-full text-left font-sans text-text-on-dark-muted hover:text-gold-primary hover:bg-charcoal-700/50 transition-all py-3 px-4 rounded-xl flex items-center gap-3 text-sm font-bold border-t border-white/5 mt-2"
                        >
                          <Globe className="w-5 h-5 text-gold-primary flex-shrink-0" />
                          <span className="text-gold-primary">Change Region</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
