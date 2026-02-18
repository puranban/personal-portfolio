'use client';

import React from "react"

// ============================================================================
// Animated Section Component
// Demonstrates: Intersection Observer hook, CSS transitions, forwardRef pattern
// ============================================================================

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useReducedMotion } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  as?: 'section' | 'div' | 'article';
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  (
    {
      children,
      className,
      delay = 0,
      direction = 'up',
      as: Component = 'section',
      ...props
    },
    forwardedRef
  ) => {
    const { ref, isIntersecting } = useIntersectionObserver({
      threshold: 0.1,
      freezeOnceVisible: true,
    });
    const prefersReducedMotion = useReducedMotion();

    // Get transform origin based on direction
    const getInitialTransform = () => {
      if (prefersReducedMotion || direction === 'none') return 'translate(0, 0)';
      switch (direction) {
        case 'up':
          return 'translateY(30px)';
        case 'down':
          return 'translateY(-30px)';
        case 'left':
          return 'translateX(30px)';
        case 'right':
          return 'translateX(-30px)';
        default:
          return 'translate(0, 0)';
      }
    };

    const animationStyles = {
      opacity: isIntersecting ? 1 : 0,
      transform: isIntersecting ? 'translate(0, 0)' : getInitialTransform(),
      transition: prefersReducedMotion
        ? 'none'
        : `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
    };

    return (
      <Component
        ref={(node) => {
          // Handle both refs
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        className={cn(className)}
        style={animationStyles}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';

export { AnimatedSection };
