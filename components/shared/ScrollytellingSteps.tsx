'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ScrollytellingStepsProps {
  steps: Step[];
  title: string;
}

export default function ScrollytellingSteps({ steps, title }: ScrollytellingStepsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress relative to viewport center
      const progress = (-rect.top + windowHeight / 2) / rect.height;
      const stepIndex = Math.min(Math.max(Math.floor(progress * steps.length), 0), steps.length - 1);
      
      setActiveStep(stepIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  const timelineProgress = useTransform(scrollYProgress, [0.15, 0.85], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative min-h-0 md:min-h-screen py-12 sm:py-20 bg-white-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-4xl md:text-5xl font-bold text-navy-primary tracking-tight mb-16 text-center"
        >
          {title}
        </motion.h2>

        <div className="relative">
          {/* Sticky timeline track - responsive layout */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-light transform -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gold-primary"
              style={{ height: timelineProgress }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white-primary border-2 border-gold-primary z-10">
                  <motion.div
                    className="w-full h-full rounded-full bg-gold-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: activeStep >= index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content card */}
                <motion.div
                  className={`w-full md:w-1/2 pl-10 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white-primary border border-border-light p-6 md:p-8 rounded-2xl shadow-subtle hover:shadow-medium transition-shadow">
                    <div className="text-gold-primary text-5xl md:text-6xl font-bold mb-4 tracking-tight font-serif">
                      {String(step.number).padStart(2, '0')}
                    </div>
                    <h3 className="font-sans text-xl md:text-2xl font-bold text-navy-primary tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="font-sans text-text-secondary leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
