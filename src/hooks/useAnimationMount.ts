import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export function useAnimationMount(): { controls: any; mounted: boolean } {
  const controls = useAnimation();
  useEffect(() => {
    controls.start((i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' },
    }));
    // initial animation state handled by components
  }, [controls]);

  return { controls, mounted: true };
}
