// Application route constants

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  KITTENS: '/kittens',
  BREEDERS: '/breeders',
  BENGAL: '/bengal',
  CONTACT: '/contact',
  
  // Admin routes
  ADMIN: '/admin',
  ADMIN_CATS: '/admin/cats',
  ADMIN_CONTENT: '/admin/content',
  
  // Auth routes
  LOGIN: '/api/auth/signin',
  LOGOUT: '/api/auth/signout',
} as const;

// Helper function to check if route is admin
export const isAdminRoute = (path: string) => path.startsWith('/admin');

// Navigation items helper
export const getPublicRoutes = () => [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'About', href: ROUTES.ABOUT },
  { name: 'Kittens', href: ROUTES.KITTENS },
  { name: 'Breeder Cats', href: ROUTES.BREEDERS },
  { name: 'The Bengal', href: ROUTES.BENGAL },
  { name: 'Contact', href: ROUTES.CONTACT },
];

