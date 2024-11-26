import express from 'express';
import { VacancyController } from '../controllers/vacancy.controller';

const router = express.Router();
const vacancyController = new VacancyController();

router.post('/', vacancyController.createVacancy);
router.get('/', vacancyController.getVacancies);
router.get('/active', vacancyController.getActiveVacancies);
router.get('/:id', vacancyController.getVacancyById);

export default router;