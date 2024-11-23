import express from 'express';
import { VacancyController } from '../controllers/vacancy.controller';

const router = express.Router();
const vacancyController = new VacancyController();

router.post('/', vacancyController.createVacancy);
router.get('/', vacancyController.getVacancies);
router.get('/:id', vacancyController.getVacancyById);

export default router;