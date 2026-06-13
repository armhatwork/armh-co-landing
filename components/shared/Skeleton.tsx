'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string;
  height?: string;
}

export default function Skeleton({ className = '', variant = 'rectangular', width, height }: SkeletonProps) {
  const variantClasses = {
    text: 'h-4 w-full',
    circular: 'rounded-full',
    rectangular: 'rounded-md',
  };

  return (
    <motion.div
      className={`
        bg-charcoal-800/50
        ${variantClasses[variant]}
        ${className}
      `}
      style={{ width, height }}
      animate={{
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-charcoal-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
      <div className="w-14 h-14 rounded-xl bg-charcoal-700 mb-6">
        <Skeleton variant="circular" className="w-full h-full" />
      </div>
      <Skeleton className="h-6 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="bg-charcoal-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
      <Skeleton className="h-4 w-full mb-4" />
      <Skeleton className="h-4 w-5/6 mb-6" />
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-charcoal-700">
          <Skeleton variant="circular" className="w-full h-full" />
        </div>
        <div className="flex-1">
          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
    </div>
  );
}
