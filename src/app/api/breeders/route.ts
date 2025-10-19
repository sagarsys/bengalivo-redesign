import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

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

    // Parse images JSON string to array
    const breedersWithImages = breeders.map(cat => ({
      ...cat,
      images: cat.images ? JSON.parse(cat.images) : []
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
