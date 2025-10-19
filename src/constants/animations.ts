// Animation constants for consistent, smooth animations

export const SCROLL_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { 
    duration: 0.6, 
    ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] // Smooth ease-in-out
  }
} as const;

export const STAGGER_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  getTransition: (index: number) => ({
    duration: 0.6,
    delay: index * 0.08, // Subtle stagger
    ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number]
  })
};

export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
} as const;

export const SLIDE_UP = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] }
} as const;

