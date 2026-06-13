'use client';

import { motion } from 'framer-motion';

interface PremiumButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function PremiumButton({ children, onClick, href, className = '', variant = 'primary' }: PremiumButtonProps) {
  const ButtonContent = () => (
    <motion.button
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-sm px-6 sm:px-8 py-3.5 sm:py-4 font-medium text-white-primary text-base
        min-h-[48px] touch-manipulation
        transition-all duration-300 ease-out outline-none
        focus:ring-2 focus:ring-gold-primary focus:ring-offset-2 focus:ring-offset-white-primary
        ${variant === 'primary'
          ? 'bg-navy-primary hover:bg-navy-secondary'
          : 'bg-white-primary text-navy-primary hover:bg-gray-light border border-navy-primary'
        }
        ${className}
      `}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        <ButtonContent />
      </a>
    );
  }

  return <ButtonContent />;
}
