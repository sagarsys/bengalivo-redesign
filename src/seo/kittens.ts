// SEO data for Kittens page
import type { Kitten } from '@/types';

export const getKittensStructuredData = (kittens: Kitten[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Available Bengal Kittens",
  "description": "Beautiful Bengal kittens available for adoption from Bengalivo cattery",
  "url": "https://bengalivo.com/kittens",
  "numberOfItems": kittens.length,
  "itemListElement": kittens.map((kitten, index) => ({
    "@type": "Product",
    "position": index + 1,
    "name": kitten.name,
    "description": kitten.description,
    "category": "Bengal Kitten",
    "brand": {
      "@type": "Brand",
      "name": "Bengalivo"
    },
    "offers": {
      "@type": "Offer",
      "price": kitten.price || "Contact for price",
      "priceCurrency": "EUR",
      "availability": kitten.isAvailable ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  }))
});

export const kittensPageMeta = {
  title: "Bengal Kittens for Sale | Bengalivo Cattery Netherlands",
  description: "Beautiful Bengal kittens available for adoption. Healthy, well-socialized kittens from our TICA registered cattery in Drunen, Netherlands.",
  keywords: "Bengal kittens for sale, Bengal kittens Netherlands, Bengal kittens Drunen, TICA registered kittens, healthy Bengal kittens"
};

