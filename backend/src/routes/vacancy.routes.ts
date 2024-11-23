import express from 'express';
import { VacancyController } from '../controllers/vacancy.controller';

const router = express.Router();
const vacancyController = new VacancyController();

router.post('/vacancy', vacancyController.createVacancy);
router.get('/vacancy', vacancyController.getVacancies);
router.get('/vacancy/:id', vacancyController.getVacancyById);

export default router;