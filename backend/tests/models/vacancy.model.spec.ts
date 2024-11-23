import { VacancyModel } from '../../src/models/vacancy.model';

describe('Vacancy Model', () => {
  it('should create a vacancy', async () => {
    const vacancy = new VacancyModel({ titulo: 'Test Title', descripcion: 'Test Description', requisitos: 'Test Requirements', fecha_limite_postulacion: new Date() });
    await vacancy.save();
    expect(vacancy.isNew).toBe(false);
  });
});