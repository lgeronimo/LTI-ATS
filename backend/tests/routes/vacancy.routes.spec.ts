import request from 'supertest';
import { app } from '../../src/app';

describe('Vacancy Routes', () => {
  it('should create a vacancy', async () => {
    const response = await request(app).post('/api/vacancies').send({ titulo: 'Test Title', descripcion: 'Test Description', requisitos: 'Test Requirements', fecha_limite_postulacion: new Date() });
    expect(response.status).toBe(201);
  });
});