// Utility functions for image handling

// Get all images for a specific breeder cat by name
export function getBreederImages(catName: string, maxImages: number = 20): string[] {
  const images: string[] = [];
  
  // Try to find numbered images
  for (let i = 1; i <= maxImages; i++) {
    const imagePath = `/images/breeder-cats/${catName} ${i}.jpg`;
    images.push(imagePath);
  }
  
  // If no numbered images, try just the name
  if (images.length === 0) {
    images.push(`/images/breeder-cats/${catName}.jpg`);
  }
  
  return images;
}

// Get parent image path
export function getParentImage(parentName: string): string {
  return `/images/breeder-cats/${parentName}.jpg`;
}

// Fallback image
export const FALLBACK_IMAGE = "/images/breeder-cats/fallback.jpeg";

