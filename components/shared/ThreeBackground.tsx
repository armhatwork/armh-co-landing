'use client';

import { motion } from 'framer-motion';

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#050505]">
      {/* Dark radial center overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(5,5,5,1)_80%)] z-10" />
      
      {/* Moving glow sphere 1 */}
      <motion.div
        animate={{
          x: [0, 80, -40, 20, 0],
          y: [0, -60, 40, -20, 0],
          scale: [1, 1.15, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gold-primary/5 blur-[120px]"
      />

      {/* Moving glow sphere 2 */}
      <motion.div
        animate={{
          x: [0, -60, 50, -30, 0],
          y: [0, 80, -40, 60, 0],
          scale: [1, 0.9, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gold-primary/[0.04] blur-[140px]"
      />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
    </div>
  );
}
