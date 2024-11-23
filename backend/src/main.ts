import app from './app';
import { connectDB } from './config/db.config';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
};

startServer().catch(err => {
  console.error('Error al iniciar el servidor:', err);
}); 