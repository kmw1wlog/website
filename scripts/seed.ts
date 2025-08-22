import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 200; i++) {
    await prisma.locations.create({
      data: {
        name: `Location ${i + 1}`,
        address: `Address ${i + 1}`,
        lat: 37 + Math.random(),
        lng: 127 + Math.random(),
        floor_area_sqm: 80 + Math.random() * 40,
        floor: 1,
        frontage_m: 5 + Math.random() * 3,
        corner_flag: Math.random() > 0.8,
        visibility: Math.floor(Math.random() * 10),
        road_class: 'A',
        parking: Math.random() > 0.5,
        zoning: 'commercial',
        building_age: 5 + Math.floor(Math.random() * 20)
      }
    });
  }

  for (let i = 0; i < 2000; i++) {
    await prisma.poi.create({
      data: {
        brand: `Brand ${i % 50}`,
        category: 'competitor',
        lat: 37 + Math.random(),
        lng: 127 + Math.random(),
        is_competitor: true,
        weight: Math.random(),
        geom: Buffer.from('')
      }
    });
  }

  console.log('Seed completed');
}

main().finally(() => prisma.$disconnect());
