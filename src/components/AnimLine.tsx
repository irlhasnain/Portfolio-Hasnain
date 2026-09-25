import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface AnimLineProps {
  className?: string;
}

export function AnimLine({ className }: AnimLineProps) {
  const ref = useRef<HTMLDivElement>(null);
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
    <div
      ref={ref}
      className={clsx(
        className,
        'origin-left transition-transform duration-1100',
        isVisible ? 'scale-x-100' : 'scale-x-0'
      )}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
        ...(isVisible ? {} : { transitionDuration: '0ms' })
      }}
    />
  );
}
