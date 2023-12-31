import { useEffect, useState } from 'react';

// Hook
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [windowSize.width, windowSize.height] as const;
};
