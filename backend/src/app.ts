import express from 'express';
import cors from 'cors';
import vacancyRoutes from './routes/vacancy.routes';

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

app.use('/api/vacancies', vacancyRoutes);

export default app;