import { NextRequest, NextResponse } from 'next/server';

// Mock data - in a real app, this would come from a database
const retiredCats = [
  {
    id: 1,
    name: "Thunder",
    age: "5 years",
    gender: "Male",
    color: "Brown Spotted",
    price: "$1,200",
    available: true,
    retirementDate: "November 2024",
    description: "Thunder is a magnificent retired stud with a gentle soul. After years of successful breeding, he's ready to enjoy his golden years in a loving home.",
    achievements: ["Grand Champion", "Best in Show 2022", "50+ Healthy Offspring"],
    healthStatus: "Excellent",
    images: ["/placeholder-cat.jpg"],
    location: "California, USA",
    specialNeeds: "None",
    personality: "Calm, affectionate, loves attention"
  },
  {
    id: 2,
    name: "Storm",
    age: "4 years",
    gender: "Female",
    color: "Silver Spotted",
    price: "$1,000",
    available: true,
    retirementDate: "October 2024",
    description: "Storm is a beautiful retired queen with a sweet disposition. She's been an excellent mother and is now looking for a quiet home to call her own.",
    achievements: ["Champion", "Mother of Champions", "30+ Healthy Kittens"],
    healthStatus: "Excellent",
    images: ["/placeholder-cat.jpg"],
    location: "California, USA",
    specialNeeds: "None",
    personality: "Gentle, loving, enjoys quiet time"
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const available = searchParams.get('available');
    const gender = searchParams.get('gender');

    let filteredCats = retiredCats;

    if (available !== null) {
      filteredCats = filteredCats.filter(cat => 
        cat.available === (available === 'true')
      );
    }

    if (gender) {
      filteredCats = filteredCats.filter(cat => 
        cat.gender.toLowerCase() === gender.toLowerCase()
      );
    }

    return NextResponse.json(filteredCats);
    } catch {
    return NextResponse.json(
      { error: 'Failed to fetch retired cats' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // In a real app, you would save this to a database
    const newCat = {
      id: retiredCats.length + 1,
      ...body,
      createdAt: new Date().toISOString()
    };

    retiredCats.push(newCat);

    return NextResponse.json(newCat, { status: 201 });
    } catch {
    return NextResponse.json(
      { error: 'Failed to create retired cat' },
      { status: 500 }
    );
  }
}
