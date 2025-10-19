import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

const FALLBACK_IMAGE = '/images/breeder-cats/fallback.jpeg';

export async function GET() {
  try {
    const breeders = await db.cat.findMany({
      where: {
        type: 'breeder'
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Parse images JSON and handle fallbacks
    const breedersWithImages = breeders.map(cat => ({
      ...cat,
      images: cat.images ? JSON.parse(cat.images) : [cat.imageUrl || FALLBACK_IMAGE],
      fatherImageUrl: cat.fatherImageUrl || FALLBACK_IMAGE,
      motherImageUrl: cat.motherImageUrl || FALLBACK_IMAGE,
      imageUrl: cat.imageUrl || FALLBACK_IMAGE
    }));

    return NextResponse.json(breedersWithImages);
  } catch (error) {
    console.error('Failed to fetch breeder cats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch breeder cats' },
      { status: 500 }
    );
  }
}
