// Cat-related types

export type Kitten = {
  id: string;
  name: string;
  age: string;
  gender: string;
  color: string;
  price?: string;
  isAvailable: boolean;
  description: string;
  imageUrl?: string;
};

export type RetiredCat = {
  id: string;
  name: string;
  age: string;
  gender: string;
  color: string;
  description: string;
  isAvailable: boolean;
  imageUrl?: string;
};

export type Cat = {
  id: string;
  name: string;
  fullName?: string;
  nickname?: string;
  type: string;
  gender?: string;
  color?: string;
  age?: number;
  price?: string;
  description?: string;
  achievements?: string;
  father?: string;
  mother?: string;
  imageUrl?: string;
  images?: string[]; // Multiple images for gallery
  fatherImageUrl?: string;
  motherImageUrl?: string;
  isAvailable: boolean;
  isFeatured?: boolean;
  dob?: string;
  parents?: string;
  coi?: string;
  generation?: string;
  genetics?: string;
  pedigree?: string;
};

export type PlannedLitter = {
  id: string;
  parents: string;
  expected: string;
  date: string;
  displayDate: string;
  status: 'born' | 'planned';
  note?: string;
};

