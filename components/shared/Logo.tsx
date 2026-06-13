'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'light' | 'dark';
  market?: 'uk' | 'uae';
}

const Logo = ({ variant = 'dark', market = 'uk' }: LogoProps) => {
  const textColor = variant === 'light' ? 'text-navy-primary' : 'text-white';
  const tagColor = 'text-gold-primary';

  const handleLogoClick = () => {
    try {
      localStorage.removeItem('armh_market');
    } catch (e) {
      console.warn('Unable to access localStorage:', e);
    }
  };

  return (
    <Link href="/?bypass=true" onClick={handleLogoClick} className="flex items-center gap-2 group">
      <div className="relative">
        <span className={`font-serif ${textColor} font-bold text-xl md:text-3xl tracking-tight`}>
          ARMH & Co
        </span>
        <span className={`font-sans ${tagColor} font-bold uppercase tracking-wider ml-1 text-[14px] md:text-sm`}>
          {market === 'uk' ? 'UK' : 'UAE'}
        </span>
        <motion.div
          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-primary to-gold-secondary group-hover:w-full transition-all duration-300"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
        />
      </div>
    </Link>
  );
};

export default Logo;
