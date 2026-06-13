'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  client: string;
  company: string;
  location: string;
}

const TestimonialCard = ({ quote, client, company, location }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-[#111315]/40 backdrop-blur-sm border border-white/5 hover:border-gold-primary/20 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold-primary text-gold-primary" />
        ))}
      </div>
      <p className="text-white/80 mb-6 leading-relaxed text-sm md:text-base italic">"{quote}"</p>
      <div className="border-t border-white/5 pt-4">
        <div className="font-semibold text-white/95 text-base">{client}</div>
        <div className="text-white/60 text-sm mt-1">{company}</div>
        <div className="text-gold-primary text-xs mt-1 font-medium">{location}</div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
