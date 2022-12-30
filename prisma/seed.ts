import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = {
  dani: 0,
  rob: 0,
};

async function seed() {
  prisma.game.create({ data });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
