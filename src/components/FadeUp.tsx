import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number; // ms
  className?: string;
  as?: React.ElementType;
}

export function FadeUp({ children, delay = 0, className, as: Component = 'div' }: FadeUpProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={clsx(className, 'transition-all duration-900', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7')}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        ...(isVisible ? {} : { transitionDuration: '0ms', transitionDelay: '0ms' }) // reset instantly when not visible yet
      }}
    >
      {children}
    </Component>
  );
}
