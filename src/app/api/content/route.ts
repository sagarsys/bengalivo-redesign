import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page')
    const section = searchParams.get('section')

    const whereClause: Record<string, unknown> = { isActive: true }
    
    if (page) {
      whereClause.page = page
    }
    
    if (section) {
      whereClause.section = section
    }

    const content = await db.pageContent.findMany({
      where: whereClause,
      orderBy: { order: 'asc' }
    })

    return NextResponse.json(content)
  } catch (error) {
    console.error('Error fetching content:', error)
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const content = await db.pageContent.create({
      data: {
        page: body.page,
        section: body.section,
        title: body.title,
        subtitle: body.subtitle,
        content: body.content,
        imageUrl: body.imageUrl,
        buttonText: body.buttonText,
        buttonLink: body.buttonLink,
        order: body.order || 0,
        isActive: body.isActive !== false
      }
    })

    return NextResponse.json(content)
  } catch (error) {
    console.error('Error creating content:', error)
    return NextResponse.json(
      { error: 'Failed to create content' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body
    
    const content = await db.pageContent.update({
      where: { id },
      data: updateData
    })

    return NextResponse.json(content)
  } catch (error) {
    console.error('Error updating content:', error)
    return NextResponse.json(
      { error: 'Failed to update content' },
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

    await db.pageContent.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting content:', error)
    return NextResponse.json(
      { error: 'Failed to delete content' },
      { status: 500 }
    )
  }
}
