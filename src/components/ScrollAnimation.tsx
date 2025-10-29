'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  distance?: number;
}

export default function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  duration = 0.4,
  direction = 'up',
  distance = 50
}: ScrollAnimationProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      case 'fade':
        return { opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getAnimatePosition()}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}

// 특별한 애니메이션 컴포넌트들
export function FadeIn({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <ScrollAnimation direction="fade" delay={delay} className={className}>
      {children}
    </ScrollAnimation>
  );
}

export function SlideUp({ children, className = '', delay = 0, distance = 50 }: { children: ReactNode; className?: string; delay?: number; distance?: number }) {
  return (
    <ScrollAnimation direction="up" delay={delay} distance={distance} className={className}>
      {children}
    </ScrollAnimation>
  );
}

export function SlideDown({ children, className = '', delay = 0, distance = 50 }: { children: ReactNode; className?: string; delay?: number; distance?: number }) {
  return (
    <ScrollAnimation direction="down" delay={delay} distance={distance} className={className}>
      {children}
    </ScrollAnimation>
  );
}

export function SlideLeft({ children, className = '', delay = 0, distance = 50 }: { children: ReactNode; className?: string; delay?: number; distance?: number }) {
  return (
    <ScrollAnimation direction="left" delay={delay} distance={distance} className={className}>
      {children}
    </ScrollAnimation>
  );
}

export function SlideRight({ children, className = '', delay = 0, distance = 50 }: { children: ReactNode; className?: string; delay?: number; distance?: number }) {
  return (
    <ScrollAnimation direction="right" delay={delay} distance={distance} className={className}>
      {children}
    </ScrollAnimation>
  );
}

// 스태거드 애니메이션 (여러 요소가 순차적으로 나타남)
export function StaggeredAnimation({ 
  children, 
  className = '', 
  staggerDelay = 0.1 
}: { 
  children: ReactNode; 
  className?: string; 
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.4,
        staggerChildren: staggerDelay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}
