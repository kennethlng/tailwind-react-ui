import { useEffect, useState } from 'react';
import { BreakpointWidths, IBreakpoint } from '../types/breakpoint';
import useWindowDimensions from './useWindowDimensions';

/**
 * Returns the breakpoint result based on the window width.
 */
function getBreakpointFromWindowWidth(windowWidth: number): IBreakpoint {
  const { sm, md, lg, xl, xxl } = BreakpointWidths;

  if (windowWidth < sm) {
    return 'xs';
  }

  if (windowWidth >= sm && windowWidth < md) {
    return 'sm';
  }

  if (windowWidth >= md && windowWidth < lg) {
    return 'md';
  }

  if (windowWidth >= lg && windowWidth < xl) {
    return 'lg';
  }

  if (windowWidth >= xl && windowWidth < xxl) {
    return 'xl';
  }

  if (windowWidth >= xxl) {
    return 'xxl';
  }

  return 'xs';
}

/**
 * Returns the current breakpoint whenever the window is resized.
 * Tailwind's breakpoints are based on the minimum width.
 * https://tailwindcss.com/docs/screens
 */
export default function useBreakpoint(): {
  /**
   * The breakpoint index (e.g. 'xs', 'sm', 'lg', etc.)
   * based on the current window width.
   */
  breakpoint: IBreakpoint;
  /**
   * The width value of the breakpoint in pixels (e.g. 768).
   */
  width: number;
} {
  const { width: windowWidth } = useWindowDimensions();
  const [currentBreakpoint, setCurrentBreakpoint] = useState<IBreakpoint>(
    getBreakpointFromWindowWidth(windowWidth),
  );

  useEffect(() => {
    // Only update the state if the breakpoint actually changed
    const calculatedBreakpoint = getBreakpointFromWindowWidth(windowWidth);
    if (calculatedBreakpoint === currentBreakpoint) {
      return;
    }
    setCurrentBreakpoint(calculatedBreakpoint);
  }, [windowWidth]);

  return {
    breakpoint: currentBreakpoint,
    width: BreakpointWidths[currentBreakpoint],
  };
}
