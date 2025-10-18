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
