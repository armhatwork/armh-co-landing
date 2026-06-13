'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const customHeightVariants = {
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.25, delay: 0.05 }
    }
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.15 }
    }
  }
};

function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <div className="border-b border-border-light last:border-0">
      <motion.button
        onClick={onToggle}
        className="w-full py-6 px-6 flex items-center justify-between text-left outline-none"
        whileHover={{ backgroundColor: 'rgba(201, 162, 39, 0.02)' }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-sans text-base md:text-lg font-bold text-navy-primary tracking-tight pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gold-primary" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={customHeightVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface PremiumAccordionProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
}

export default function PremiumAccordion({ items }: PremiumAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white-primary border border-border-light rounded-2xl overflow-hidden shadow-subtle">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          index={index}
        />
      ))}
    </div>
  );
}
