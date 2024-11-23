import { Request, Response } from 'express';
import { VacancyService } from '../services/vacancy.service';
import { Prisma } from '@prisma/client';

export class VacancyController {
  private vacancyService: VacancyService;

  constructor() {
    this.vacancyService = new VacancyService();
  }

  createVacancy = async (req: Request, res: Response): Promise<void> => {
    try {
      const vacancyData = {
        title: req.body.title,
        description: req.body.description,
        requirements: req.body.requirements,
        application_deadline: new Date(req.body.application_deadline),
        recruiter_id: parseInt(req.body.recruiter_id),
      };

      const vacancy = await this.vacancyService.createVacancy(vacancyData);
      res.status(201).json({
        success: true,
        data: vacancy
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(400).json({ 
          success: false,
          message: 'Error de validación en los datos',
          error: error.message 
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: 'Error al crear la vacante',
          error: error instanceof Error ? error.message : 'Error desconocido'
        });
      }
    }
  };

  getVacancies = async (_req: Request, res: Response): Promise<void> => {
    try {
      const vacancies = await this.vacancyService.getVacancies();
      res.status(200).json({
        success: true,
        data: vacancies
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: 'Error al obtener las vacantes',
        error: error instanceof Error ? error.message : 'Error desconocido'
      });
    }
  };

  getVacancyById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        res.status(400).json({
          success: false,
          message: 'El ID proporcionado no es válido'
        });
        return;
      }

      const vacancy = await this.vacancyService.getVacancyById(id);
      
      if (!vacancy) {
        res.status(404).json({
          success: false,
          message: 'Vacante no encontrada'
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: vacancy
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: 'Error al obtener la vacante',
        error: error instanceof Error ? error.message : 'Error desconocido'
      });
    }
  };
}