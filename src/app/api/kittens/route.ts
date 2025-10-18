import { NextRequest, NextResponse } from 'next/server';

// Mock data - in a real app, this would come from a database
const kittens = [
  {
    id: 1,
    name: "Luna",
    age: "12 weeks",
    gender: "Female",
    color: "Brown Spotted",
    price: "$2,500",
    available: true,
    birthDate: "September 15, 2024",
    description: "Luna is a beautiful brown spotted Bengal with a playful personality. She loves interactive toys and is very social.",
    parents: "Thunder & Storm",
    images: ["/placeholder-kitten.jpg"],
    location: "California, USA"
  },
  {
    id: 2,
    name: "Phoenix",
    age: "10 weeks",
    gender: "Male",
    color: "Silver Spotted",
    price: "$2,800",
    available: true,
    birthDate: "October 1, 2024",
    description: "Phoenix is a stunning silver spotted Bengal with striking blue eyes. He's very intelligent and loves to climb.",
    parents: "Shadow & Mist",
    images: ["/placeholder-kitten.jpg"],
    location: "California, USA"
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const available = searchParams.get('available');
    const gender = searchParams.get('gender');
    const color = searchParams.get('color');

    let filteredKittens = kittens;

    if (available !== null) {
      filteredKittens = filteredKittens.filter(kitten => 
        kitten.available === (available === 'true')
      );
    }

    if (gender) {
      filteredKittens = filteredKittens.filter(kitten => 
        kitten.gender.toLowerCase() === gender.toLowerCase()
      );
    }

    if (color) {
      filteredKittens = filteredKittens.filter(kitten => 
        kitten.color.toLowerCase().includes(color.toLowerCase())
      );
    }

    return NextResponse.json(filteredKittens);
    } catch {
    return NextResponse.json(
      { error: 'Failed to fetch kittens' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // In a real app, you would save this to a database
    const newKitten = {
      id: kittens.length + 1,
      ...body,
      createdAt: new Date().toISOString()
    };

    kittens.push(newKitten);

    return NextResponse.json(newKitten, { status: 201 });
    } catch {
    return NextResponse.json(
      { error: 'Failed to create kitten' },
      { status: 500 }
    );
  }
}
