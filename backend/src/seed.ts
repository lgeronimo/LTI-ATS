import { PrismaClient } from '@prisma/client';
import { VacancyStatus } from './models/enums/vacancy-status.enum';

const prisma = new PrismaClient();

async function main() {
  // Check if VacancyStatus records already exist
  const existingStatuses = await prisma.vacancyStatus.findMany();
  if (existingStatuses.length === 0) {
    // Create VacancyStatus records if none exist
    await prisma.vacancyStatus.createMany({
      data: [
        { id: VacancyStatus.Active, name: 'Active' },
        { id: VacancyStatus.Closed, name: 'Closed' },
        { id: VacancyStatus.InProcess, name: 'In Process' },
        { id: VacancyStatus.Canceled, name: 'Canceled' },
        { id: VacancyStatus.Paused, name: 'Paused' },
      ],
    });
    console.log('VacancyStatus seeded successfully!');
  } else {
    console.log('VacancyStatus already exists, skipping seeding.');
  }

  // Check if Recruiter records already exist
  const existingRecruiters = await prisma.recruiter.findMany();
  if (existingRecruiters.length === 0) {
    // Create Recruiter records if none exist
    await prisma.recruiter.createMany({
      data: [
        { name: 'Luis Gerónimo Recruiter', email: 'luis.geronimov@gmail.com', phone: '5537102770' },
      ],
    });
    console.log('Recruiters seeded successfully!');
  } else {
    console.log('Recruiters already exist, skipping seeding.');
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