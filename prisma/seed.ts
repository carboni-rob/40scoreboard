import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await db.score.create({ data: { dani: 0, rob: 0 } });
}

seed();
