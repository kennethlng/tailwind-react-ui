import { useEffect, useState } from 'react';

type IWindowDimensions = {
  width: number;
  height: number;
};

function getWindowDimensions(): IWindowDimensions {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

/**
 * Returns the height and width of the window whenever the window
 * is resized.
 */
export default function useWindowDimensions(): IWindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handler() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return windowDimensions;
}
