'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { customEase } from '@/lib/utils/animation';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

interface NavbarProps {
  market: 'uk' | 'uae';
  onMobileMenuToggle?: (isOpen: boolean) => void;
}

const Navbar = ({ market, onMobileMenuToggle }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isMarketHome = pathname === '/uk' || pathname === '/uae';
  const useLightNav = isMarketHome && !isScrolled;

  const handleMobileMenuToggle = (isOpen: boolean) => {
    setIsMobileMenuOpen(isOpen);
    onMobileMenuToggle?.(isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navSurfaceClass = useLightNav
    ? 'bg-white/92 backdrop-blur-md border-b border-border-light py-2 shadow-sm'
    : isScrolled
      ? 'bg-charcoal-950/70 backdrop-blur-md border-b border-white/5 py-1 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
      : 'bg-transparent py-3';

  const linkColorClass = useLightNav
    ? 'text-navy-primary hover:text-gold-primary'
    : 'text-white hover:text-gold-primary';

  const menuIconClass = useLightNav ? 'text-navy-primary' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-[env(safe-area-inset-top)] ${navSurfaceClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="md:ml-8">
            <Link href={`/${market}`}>
              <Logo market={market} variant={useLightNav ? 'light' : 'dark'} />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                className="relative group py-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className={`font-sans transition-colors text-sm font-semibold tracking-wide ${linkColorClass}`}
                >
                  {link.label}
                </Link>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-primary group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => handleMobileMenuToggle(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: customEase }}
            className={`md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation ${menuIconClass}`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={26} />
          </motion.button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => handleMobileMenuToggle(false)} market={market} />
    </nav>
  );
};

export default Navbar;
