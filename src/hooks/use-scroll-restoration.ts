// Hook to remember and restore scroll position
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SCROLL_STORAGE_KEY = 'bengalivo-scroll-positions';

type ScrollPositions = {
  [key: string]: number;
};

// Get stored scroll positions from sessionStorage
const getStoredScrollPositions = (): ScrollPositions => {
  if (typeof window === 'undefined') return {};
  
  try {
    const stored = sessionStorage.getItem(SCROLL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

// Save scroll position to sessionStorage
const saveScrollPosition = (path: string, position: number) => {
  if (typeof window === 'undefined') return;
  
  try {
    const positions = getStoredScrollPositions();
    positions[path] = position;
    sessionStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(positions));
  } catch (error) {
    console.error('Failed to save scroll position:', error);
  }
};

// Restore scroll position from sessionStorage
const restoreScrollPosition = (path: string) => {
  if (typeof window === 'undefined') return;
  
  const positions = getStoredScrollPositions();
  const position = positions[path];
  
  if (position !== undefined) {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      window.scrollTo({
        top: position,
        behavior: 'instant' as ScrollBehavior,
      });
    });
  }
};

export function useScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Restore scroll position on mount
    restoreScrollPosition(pathname);

    // Save scroll position on scroll
    const handleScroll = () => {
      saveScrollPosition(pathname, window.scrollY);
    };

    // Save scroll position before page unload
    const handleBeforeUnload = () => {
      saveScrollPosition(pathname, window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathname]);
}

