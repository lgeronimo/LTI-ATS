import { PrismaClient, Vacancy } from '@prisma/client';

export class VacancyService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createVacancy(vacancyData: {
    title: string;
    description: string;
    requirements: string;
    application_deadline: Date;
    recruiter_id: number;
    status_id?: number;
  }): Promise<Vacancy> {
    try {
      return await this.prisma.vacancy.create({
        data: {
          title: vacancyData.title,
          description: vacancyData.description,
          requirements: vacancyData.requirements,
          application_deadline: new Date(vacancyData.application_deadline),
          recruiter_id: vacancyData.recruiter_id,
          status_id: vacancyData.status_id || 1
        }
      });
    } catch (error) {
      console.error('Error al crear la vacante:', error);
      throw error;
    }
  }

  async getVacancies(): Promise<Vacancy[]> {
    try {
      return await this.prisma.vacancy.findMany({
        include: {
          status: true,
          recruiter: true
        },
        orderBy: {
          creation_date: 'desc'
        }
      });
    } catch (error) {
      console.error('Error al obtener las vacantes:', error);
      throw error;
    }
  }

  async getVacancyById(id: number): Promise<Vacancy | null> {
    try {
      return await this.prisma.vacancy.findUnique({
        where: { id },
        include: {
          status: true,
          recruiter: true
        }
      });
    } catch (error) {
      console.error('Error al obtener la vacante por ID:', error);
      throw error;
    }
  }
}