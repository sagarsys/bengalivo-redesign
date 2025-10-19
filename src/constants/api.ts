// API endpoint constants

export const API_ROUTES = {
  // Cat endpoints
  CATS: '/api/cats',
  KITTENS: '/api/cats?type=kitten',
  RETIRED_CATS: '/api/cats?type=retired',
  BREEDERS: '/api/breeders',
  
  // Content endpoints
  CONTENT: '/api/content',
  
  // Other endpoints
  CONTACT: '/api/contact',
  UPLOAD: '/api/upload',
  
  // Auth endpoints
  AUTH: '/api/auth',
} as const;

// Helper function to build content API URL
export const getContentUrl = (page: string, section: string) => 
  `${API_ROUTES.CONTENT}?page=${page}&section=${section}`;

// Helper function to build cats API URL by type
export const getCatsByType = (type: 'kitten' | 'retired' | 'breeder') => 
  `${API_ROUTES.CATS}?type=${type}`;

