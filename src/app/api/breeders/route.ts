import { NextRequest, NextResponse } from 'next/server';

// Mock data - in a real app, this would come from a database
const breederCats = [
  {
    id: 1,
    name: "Thunder",
    age: "4 years",
    gender: "Male",
    color: "Brown Spotted",
    status: "Active",
    description: "Thunder is our premier stud with exceptional genetics and a proven track record. He's the father of many champion kittens and continues to produce outstanding offspring.",
    achievements: ["Grand Champion", "Best in Show 2023", "Sire of Champions"],
    healthStatus: "Excellent",
    images: ["/placeholder-cat.jpg"],
    location: "California, USA",
    breedingHistory: "50+ successful breedings",
    offspring: "200+ kittens",
    lineage: {
      father: "Wild Thunder",
      mother: "Golden Storm",
      grandparents: "Royal Bengal & Silver Mist"
    },
    nextBreeding: "Available for breeding",
    specializations: ["Large Size", "Excellent Temperament", "Champion Bloodline"]
  },
  {
    id: 2,
    name: "Storm",
    age: "3 years",
    gender: "Female",
    color: "Silver Spotted",
    status: "Active",
    description: "Storm is a magnificent queen with stunning silver markings and an exceptional maternal instinct. She's produced multiple champion kittens and is known for her gentle nature.",
    achievements: ["Champion", "Mother of Champions", "Breeder of Merit"],
    healthStatus: "Excellent",
    images: ["/placeholder-cat.jpg"],
    location: "California, USA",
    breedingHistory: "15+ successful litters",
    offspring: "60+ kittens",
    lineage: {
      father: "Silver King",
      mother: "Moonlight Princess",
      grandparents: "Arctic Storm & Diamond Queen"
    },
    nextBreeding: "Currently pregnant",
    specializations: ["Silver Gene", "Large Litters", "Excellent Mother"]
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const gender = searchParams.get('gender');

    let filteredCats = breederCats;

    if (status) {
      filteredCats = filteredCats.filter(cat => 
        cat.status.toLowerCase() === status.toLowerCase()
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
      { error: 'Failed to fetch breeder cats' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // In a real app, you would save this to a database
    const newCat = {
      id: breederCats.length + 1,
      ...body,
      createdAt: new Date().toISOString()
    };

    breederCats.push(newCat);

    return NextResponse.json(newCat, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Failed to create breeder cat' },
      { status: 500 }
    );
  }
}
