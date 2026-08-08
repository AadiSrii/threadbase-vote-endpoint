import prisma from "./lib/prisma";

async function main() {
  const posts = await prisma.post.findMany();

  console.log(posts);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });