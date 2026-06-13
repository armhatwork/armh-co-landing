'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ServiceMarqueeProps {
  items: string[];
}

const ServiceMarquee = ({ items }: ServiceMarqueeProps) => {
  const controls = useAnimation();

  const startMarquee = () => {
    controls.start({
      x: '-50%',
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 12,
        ease: 'linear',
      },
    });
  };

  useEffect(() => {
    startMarquee();
  }, [controls]);

  return (
    <div
      className="overflow-hidden py-3 sm:py-4 bg-gradient-to-b from-navy-primary/95 to-navy-primary/80 backdrop-blur-sm"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={startMarquee}
      onTouchStart={() => controls.stop()}
      onTouchEnd={startMarquee}
      onTouchCancel={startMarquee}
    >
      <motion.div className="flex whitespace-nowrap" animate={controls} initial={{ x: 0 }}>
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-sans mx-4 sm:mx-8 text-text-on-dark-muted inline-flex items-center gap-2 text-sm md:text-base"
          >
            {item}
            <span className="text-gold-primary/60" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceMarquee;
