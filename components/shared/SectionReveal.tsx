'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { customEase } from '@/lib/utils/animation';

interface SectionRevealProps extends HTMLMotionProps<'div'> {
  delay?: number;
  y?: number;
}

export default function SectionReveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  ...props
}: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: customEase, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
