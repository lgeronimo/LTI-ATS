# Backend for ATS

Este es el backend del sistema de Applicant Tracking System (ATS).

## Instalación

1. Clona el repositorio.
2. Navega a la carpeta del backend.
3. Ejecuta `npm install` para instalar las dependencias.
4. Crea un archivo `.env` y configura la URI de PostgreSQL.
5. Ejecuta `npx prisma migrate dev --name init` para crear la base de datos.
6. Ejecuta `npm start` para iniciar el servidor.

## Pruebas

Ejecuta `npm test` para ejecutar las pruebas.