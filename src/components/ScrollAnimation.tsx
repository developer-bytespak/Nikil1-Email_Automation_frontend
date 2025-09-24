'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeInDown' | 'scaleIn' | 'slideInUp' | 'bounceIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollAnimation({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.4,
  threshold = 0.1,
  className = ''
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fadeInUp':
        return 'animate-fade-in-up';
      case 'fadeInLeft':
        return 'animate-fade-in-left';
      case 'fadeInRight':
        return 'animate-fade-in-right';
      case 'fadeInDown':
        return 'animate-fade-in-down';
      case 'scaleIn':
        return 'animate-scale-in';
      case 'slideInUp':
        return 'animate-slide-in-up';
      case 'bounceIn':
        return 'animate-bounce-in';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-${Math.round(duration * 1000)} ${getAnimationClass()} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
}
