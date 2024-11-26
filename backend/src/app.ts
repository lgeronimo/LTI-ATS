import express from 'express';
import cors from 'cors';
import vacancyRoutes from './routes/vacancy.routes';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:4200' || 'https://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/vacancies', vacancyRoutes);

// Middleware to handle not found routes
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada',
  });
});

export default app;