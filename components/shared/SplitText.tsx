'use client';

import { motion } from 'framer-motion';
import { splitTextVariants } from '@/lib/utils/animation';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ text, className = '', delay = 0 }: SplitTextProps) {
  const words = text.split(' ');
  
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: delay,
            },
          },
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={splitTextVariants}
            custom={i}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
