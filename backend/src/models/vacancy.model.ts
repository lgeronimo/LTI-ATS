import { VacancyStatus } from './enums/vacancy-status.enum';

export interface Vacancy {
  id?: number;
  title: string;
  description: string;
  requirements: string;
  application_deadline: Date;
  status: VacancyStatus;
  creation_date?: Date;
  update_date?: Date;
  recruiter_id?: number;
}