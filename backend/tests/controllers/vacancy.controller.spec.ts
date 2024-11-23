import { VacancyController } from '../../src/controllers/vacancy.controller';
import { Request, Response } from 'express';

describe('VacancyController', () => {
  let vacancyController: VacancyController;
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    vacancyController = new VacancyController();
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should create a vacancy', async () => {
    req.body = { titulo: 'Test Title', descripcion: 'Test Description', requisitos: 'Test Requirements', fecha_limite_postulacion: new Date() };
    await vacancyController.create(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(201);
  });
});