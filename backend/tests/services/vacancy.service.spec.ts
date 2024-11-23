import { VacancyService } from '../../src/services/vacancy.service';
import { VacancyModel } from '../../src/models/vacancy.model';

describe('VacancyService', () => {
  let vacancyService: VacancyService;

  beforeEach(() => {
    vacancyService = new VacancyService();
  });

  it('should create a vacancy', async () => {
    const vacancyData = { titulo: 'Test Title', descripcion: 'Test Description', requisitos: 'Test Requirements', fecha_limite_postulacion: new Date() };
    const vacancy = await vacancyService.create(vacancyData);
    expect(vacancy.titulo).toBe('Test Title');
  });
});