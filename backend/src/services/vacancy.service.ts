import { PrismaClient, Vacancy } from '@prisma/client';
import { VacancyStatus } from '../models/enums/vacancy-status.enum';

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
  }): Promise<Vacancy> {
    try {
      return await this.prisma.vacancy.create({
        data: {
          title: vacancyData.title,
          description: vacancyData.description,
          requirements: vacancyData.requirements,
          application_deadline: new Date(vacancyData.application_deadline),
          recruiter_id: vacancyData.recruiter_id || 1
        }
      });
    } catch (error) {
      console.error('Error creating vacancy:', error);
      alert(error);
      throw error;
    }
  }

  async getVacancies(): Promise<Vacancy[]> {
    try {
      return await this.prisma.vacancy.findMany({
        include: {
          recruiter: false
        },
        orderBy: {
          creation_date: 'desc'
        }
      });
    } catch (error) {
      console.error('Error fetching vacancies:', error);
      throw error;
    }
  }

  async getVacancyById(id: number): Promise<Vacancy | null> {
    try {
      return await this.prisma.vacancy.findUnique({
        where: { id },
        include: {
          recruiter: true
        }
      });
    } catch (error) {
      console.error('Error fetching vacancy by ID:', error);
      throw error;
    }
  }

  async getActiveVacancies(): Promise<Vacancy[]> {
    try {
      const currentDate = new Date();
      return await this.prisma.vacancy.findMany({
        where: {
          status: VacancyStatus.ACTIVE,
          application_deadline: {
            gte: currentDate
          }
        },
        include: {
          recruiter: false
        },
        orderBy: {
          creation_date: 'desc'
        }
      });
    } catch (error) {
      console.error('Error fetching active vacancies:', error);
      throw error;
    }
  }
  
}