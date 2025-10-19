import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

const FALLBACK_IMAGE = '/images/breeder-cats/fallback.jpeg';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const featured = searchParams.get('featured')
    const available = searchParams.get('available')

    const whereClause: Record<string, unknown> = {}
    
    if (type) {
      whereClause.type = type
    }
    
    if (featured === 'true') {
      whereClause.isFeatured = true
    }
    
    if (available === 'true') {
      whereClause.isAvailable = true
    }

    const cats = await db.cat.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' }
    })

    // Add fallback images for missing data
    const catsWithFallbacks = cats.map(cat => ({
      ...cat,
      imageUrl: cat.imageUrl || FALLBACK_IMAGE,
      fatherImageUrl: cat.fatherImageUrl || FALLBACK_IMAGE,
      motherImageUrl: cat.motherImageUrl || FALLBACK_IMAGE,
      images: cat.images ? JSON.parse(cat.images) : [cat.imageUrl || FALLBACK_IMAGE]
    }));

    return NextResponse.json(catsWithFallbacks)
  } catch (error) {
    console.error('Error fetching cats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch cats' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const cat = await db.cat.create({
      data: {
        name: body.name,
        fullName: body.fullName,
        nickname: body.nickname,
        type: body.type,
        gender: body.gender,
        color: body.color,
        age: body.age,
        price: body.price,
        description: body.description,
        achievements: body.achievements,
        father: body.father,
        mother: body.mother,
        imageUrl: body.imageUrl,
        isAvailable: body.isAvailable !== false,
        isFeatured: body.isFeatured || false
      }
    })

    return NextResponse.json(cat)
  } catch (error) {
    console.error('Error creating cat:', error)
    return NextResponse.json(
      { error: 'Failed to create cat' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body
    
    const cat = await db.cat.update({
      where: { id },
      data: updateData
    })

    return NextResponse.json(cat)
  } catch (error) {
    console.error('Error updating cat:', error)
    return NextResponse.json(
      { error: 'Failed to update cat' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      )
    }

    await db.cat.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting cat:', error)
    return NextResponse.json(
      { error: 'Failed to delete cat' },
      { status: 500 }
    )
  }
}
