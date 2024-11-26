import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  // Check if User records already exist
  const existingUsers = await prisma.user.findMany();
  if (existingUsers.length === 0) {
    // Create User records if none exist
    await prisma.user.create({
      data: {
        email: 'recruiter@example.com',
        password: '123456789',
        role: 'RECRUITER',
        recruiter: {
          create: {
            name: 'Luis Gerónimo',
            email: 'recruiter@example.com',
            phone: '5537102770',
          },
        },
      },
    });
    console.log('Default recruiter user seeded successfully!');
  } else {
    console.log('Users already exist, skipping seeding.');
  }

  // Recuperar el usuario que acabamos de agregar
  const newUser = await prisma.user.findUnique({
    where: {
      email: 'recruiter@example.com',
    },
    include: {
      recruiter: true,
    },
  });

  if (newUser) {
    console.log('Usuario recuperado:', newUser);
    if (newUser.recruiter) {
      console.log('Datos del recruiter:', newUser.recruiter);
    } else {
      console.log('No se encontraron datos del recruiter.');
    }
  } else {
    console.log('No se pudo recuperar el usuario.');
  }

}
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
