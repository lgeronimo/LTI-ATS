Vamos a crear el componente de creat-job 

```
frontend/
│
├── src/
│   ├── app/
│   │   ├── components/                # Componentes reutilizables
│   │   ├── pages/                     # Páginas principales del sistema
│   │   │   ├── create-job/            # Crear Vacante
│   │   │   ├── apply-candidate/        # Postular Candidato
│   │   │   ├── cv-classification/      # Clasificación Automática de CVs
│   │   │   ├── schedule-interview/     # Programar Entrevista
│   │   │   ├── send-reminder/          # Enviar Recordatorio a Candidato
│   │   │   ├── auto-response/          # Enviar Respuesta Automática a Candidato
│   │   │   ├── candidate-evaluation/    # Evaluación de Candidato
│   │   │   ├── tone-analysis/          # Análisis de Tono en Entrevistas
│   │   │   ├── collaboration/           # Colaboración en Tiempo Real
│   │   │   └── recruiter-dashboard/     # Visualizar Panel de Control del Reclutador
│   │   ├── services/                   # Servicios para la comunicación con el backend
│   │   ├── models/                     # Modelos de datos
│   │   ├── guards/                     # Guards para la protección de rutas
│   │   ├── interceptors/                # Interceptores para manejar peticiones HTTP
│   │   ├── shared/                     # Módulos y componentes compartidos
│   │   └── app.module.ts               # Módulo principal de la aplicación
│   │
│   ├── assets/                         # Archivos estáticos (imágenes, fuentes, etc.)
│   ├── environments/                   # Archivos de configuración para diferentes entornos
│   ├── styles/                         # Estilos globales y configuración de Tailwind
│   └── index.html                      # Archivo HTML principal
│
├── angular.json                        # Configuración de Angular
├── package.json                        # Dependencias del proyecto
└── tailwind.config.js                  # Configuración de Tailwind CSS
```