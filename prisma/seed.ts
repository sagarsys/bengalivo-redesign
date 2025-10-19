import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database with original Bengalivo content...')

  // Clear existing data
  await prisma.pageContent.deleteMany()
  await prisma.cat.deleteMany()
  await prisma.contactInfo.deleteMany()

  // Dynamic content that needs to be editable
  await prisma.pageContent.createMany({
    data: [
      {
        page: 'home',
        section: 'kittens',
        title: 'KITTENS AVAILABLE',
        subtitle: 'For more pictures of the current kittens.....',
        buttonText: 'I want to look at those CUTIES!',
        buttonLink: '/kittens',
        order: 1
      },
      {
        page: 'home',
        section: 'featured',
        title: 'Home of LA SGC Bengalivo Million Reasons',
        subtitle: '21th Best Allbreed Cat of TICA 2021-2022',
        buttonText: 'READ more',
        buttonLink: '/breeders',
        order: 2
      }
    ]
  })

  // Featured cat
  await prisma.cat.create({
    data: {
      name: 'IW SGC Bengalivo Million Reasons',
      fullName: 'IW SGC Bengalivo Million Reasons',
      nickname: 'Eos',
      type: 'breeder',
      gender: 'female',
      achievements: '21th Best Allbreed Cat of TICA 2021-2022',
      isFeatured: true,
      isAvailable: false
    }
  })

  // Kittens
  await prisma.cat.createMany({
    data: [
      {
        name: 'Bengalivo Push The Button',
        fullName: 'Bengalivo Push The Button',
        type: 'kitten',
        gender: 'male',
        color: 'Brown Spotted',
        age: 'Born 12 april 2025',
        description: 'Beautiful brown spotted Bengal kitten with excellent temperament.',
        isAvailable: false,
        imageUrl: '/images/kitten-expected.jpg'
      }
    ]
  })

  // Retired cats
  await prisma.cat.createMany({
    data: [
      {
        name: 'MioDollarBaby Unik aka Gold',
        fullName: 'MioDollarBaby Unik aka Gold',
        nickname: 'Gold',
        type: 'retired',
        gender: 'female',
        color: 'Brown Spotted',
        age: '5 years',
        description: 'Gold is recently spayed due to a pyometra and is looking for a new home. She can live alone but also with other cats.',
        isAvailable: true,
        imageUrl: '/images/retired-cat-gold.jpg'
      }
    ]
  })

  // Planned litters content
  await prisma.pageContent.createMany({
    data: [
      {
        page: 'kittens',
        section: 'planned-litters',
        title: 'Planned Litters for 2025/2026',
        content: JSON.stringify([
          {
            id: 1,
            parents: 'Bengalivo Armed With Love x Batifoleurs Zawadi',
            expected: 'brown kittens expected',
            season: 'Winter 2025',
            note: 'only pets/breeders on request'
          },
          {
            id: 2,
            parents: 'Bengalivo Cry Baby x Bengalivo Another One Bites Dust',
            expected: 'brown and mink kittens expected',
            season: 'Kittens born 18 september 2025'
          },
          {
            id: 3,
            parents: 'Bengalivo Stumblin\'In x Hypnotic\'bengal Unstoppable',
            expected: 'brown and sepia kittens expected',
            season: 'Kittens born 31 august 2025',
            note: 'only pets'
          },
          {
            id: 4,
            parents: 'Bengalivo Just Give Me A Reason x TBA',
            expected: 'brown kittens expected',
            season: 'Winter 2025'
          },
          {
            id: 5,
            parents: 'Bengalivo Femme Fatale x Hypnotic\'bengal Unstoppable',
            expected: 'sepia kittens expected',
            season: 'Kittens born 10 october 2025',
            note: 'only pets'
          },
          {
            id: 6,
            parents: 'MioDollarBaby Maya x Hypnotic\'bengal Unstoppable',
            expected: 'brown kittens expected',
            season: 'Autumn 2025 (last litter Maya)',
            note: 'only pets'
          }
        ]),
        order: 1
      }
    ]
  })

  // Contact information
  await prisma.contactInfo.createMany({
    data: [
      {
        type: 'email',
        value: 'catterybengalivo@gmail.com'
      },
      {
        type: 'location',
        value: 'Drunen - NL'
      }
    ]
  })

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
