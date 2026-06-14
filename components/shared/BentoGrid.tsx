'use client';

import { useRef, useState, useEffect } from 'react';
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { VideoErrorBoundary } from './VideoErrorBoundary';
import Link from 'next/link';

interface BentoCardProps {
  icon: LucideIcon | string;
  title: string;
  description: string;
  link?: string;
  video?: string;
}

const BentoCard = React.memo(function BentoCard({ icon: Icon, title, description, link, video }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchActive, setIsTouchActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

  const playVideo = () => {
    if (videoRef.current) {
      if (!isVideoLoaded) {
        videoRef.current.load();
        setIsVideoLoaded(true);
      }
      videoRef.current.play().catch(() => {});
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
    pauseVideo();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isVideoLoaded) playVideo();
  };

  const handleTouchStart = () => {
    setIsTouchActive(true);
    setIsHovered(true);
    playVideo();
  };

  const handleTouchEnd = () => {
    setIsTouchActive(false);
    setIsHovered(false);
    pauseVideo();
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    if (video && isHovered && videoRef.current && !isVideoLoaded) {
      videoRef.current.load();
      setIsVideoLoaded(true);
    }
  }, [video, isHovered, isVideoLoaded]);

  const isActive = isHovered || isTouchActive;

  const CardContent = (
    <>
      {video && (
        <VideoErrorBoundary>
          <>
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
              onLoadedData={handleVideoLoad}
            >
              <source src={video} type="video/mp4" />
            </video>
            <div
              className={`absolute inset-0 z-0 transition-opacity duration-300 ${
                isActive ? 'bg-white/55' : 'bg-white/72'
              }`}
            />
          </>
        </VideoErrorBoundary>
      )}

      <div className="relative z-10 flex h-full min-h-[152px] sm:min-h-[196px] lg:min-h-[208px] flex-col">
        <div className="flex items-start gap-3 sm:gap-4">
          {typeof Icon === 'string' ? (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold-primary/20 bg-gold-subtle sm:h-11 sm:w-11">
              <span className="text-base font-bold text-gold-primary sm:text-lg">{Icon}</span>
            </div>
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold-primary/20 bg-gold-subtle sm:h-11 sm:w-11">
              <Icon className="h-5 w-5 text-gold-primary transition-colors duration-300" />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h3 className="font-sans text-[15px] font-bold leading-snug tracking-tight text-navy-primary line-clamp-2 sm:text-base lg:text-[17px]">
              {title}
            </h3>
            <p className="mt-2 font-sans text-[13px] leading-relaxed text-text-secondary line-clamp-3 sm:text-sm">
              {description}
            </p>
          </div>
        </div>

        {link && (
          <div className="mt-auto pt-4 font-sans text-xs font-bold text-gold-primary flex items-center gap-1.5 transition-all duration-300 group-hover:gap-2.5 sm:text-sm">
            Learn more <span aria-hidden="true">→</span>
          </div>
        )}
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl border border-gold-primary/30 opacity-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );

  return (
    <motion.div
      ref={ref}
      className="
        group relative h-full overflow-hidden rounded-2xl
        border border-border-light bg-white
        p-4 sm:p-5 lg:p-6
        shadow-subtle transition-shadow duration-300
        hover:shadow-medium
        cursor-pointer outline-none
        focus:ring-2 focus:ring-gold-primary focus:ring-offset-2 focus:ring-offset-white
        touch-manipulation
      "
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      style={{
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      tabIndex={0}
    >
      {link ? (
        <Link href={link} className="block h-full" aria-label={`Learn more about ${title}`}>
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </motion.div>
  );
});

const BentoGrid = BentoCard;
export default BentoGrid;
