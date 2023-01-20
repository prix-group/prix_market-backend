import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.post.upsert({
    where: { title: 'Prix Adds Support for Prix Market' },
    update: {},
    create: {
      title: 'We are Prix',
      body: 'Support for Prix has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prix release adds stable support for Prix Market!",
      published: false,
    },
  });

  const post2 = await prisma.post.upsert({
    where: { title: "What's new in Prix? (Q1/22)" },
    update: {},
    create: {
      title: "What's new in Prix? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prix ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  console.log(post1, post2);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
