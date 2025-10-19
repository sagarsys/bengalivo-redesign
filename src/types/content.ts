// Content-related types

export type PageContent = {
  id: string;
  page: string;
  section: string;
  title?: string;
  subtitle?: string;
  content?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonLink?: string;
  order: number;
  isActive?: boolean;
};

