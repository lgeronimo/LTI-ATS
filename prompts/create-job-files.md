# Creación de Archivos para el Caso de Uso "Crear Vacante"

Para implementar el caso de uso "Crear Vacante" en la estructura propuesta, se crearán los siguientes archivos dentro de la carpeta `create-job`:

```
frontend/src/app/pages/create-job/
│
├── create-job.component.ts            # Componente principal para crear vacante
├── create-job.component.html           # Plantilla HTML para el formulario de creación de vacante
├── create-job.component.scss           # Estilos específicos para el componente de creación de vacante
├── create-job.service.ts               # Servicio para manejar la lógica de negocio relacionada con la creación de vacantes
└── create-job.model.ts                 # Modelo de datos para la vacante
```

## Descripción de los Archivos

1. **create-job.component.ts**:
   - Este archivo contendrá la lógica del componente que maneja la creación de vacantes. Incluirá métodos para manejar el formulario y enviar los datos al servicio correspondiente.

   ```typescript
   import { Component } from '@angular/core';
   import { CreateJobService } from './create-job.service';
   import { Job } from './create-job.model';

   @Component({
     selector: 'app-create-job',
     templateUrl: './create-job.component.html',
     styleUrls: ['./create-job.component.scss']
   })
   export class CreateJobComponent {
     job: Job = new Job();

     constructor(private createJobService: CreateJobService) {}

     onSubmit() {
       this.createJobService.createJob(this.job).subscribe(response => {
         // Manejar la respuesta después de crear la vacante
       });
     }
   }
   ```

2. **create-job.component.html**:
   - Este archivo contendrá la plantilla HTML para el formulario de creación de vacantes. Incluirá campos para el título, descripción, requisitos, etc.

   ```html
   <form (ngSubmit)="onSubmit()">
     <div>
       <label for="title">Título:</label>
       <input type="text" id="title" [(ngModel)]="job.title" name="title" required>
     </div>
     <div>
       <label for="description">Descripción:</label>
       <textarea id="description" [(ngModel)]="job.description" name="description" required></textarea>
     </div>
     <div>
       <label for="requirements">Requisitos:</label>
       <textarea id="requirements" [(ngModel)]="job.requirements" name="requirements" required></textarea>
     </div>
     <button type="submit">Crear Vacante</button>
   </form>
   ```

3. **create-job.component.scss**:
   - Este archivo contendrá los estilos específicos para el componente de creación de vacantes.

   ```scss
   form {
     display: flex;
     flex-direction: column;
     gap: 1rem;
   }

   label {
     font-weight: bold;
   }

   input, textarea {
     padding: 0.5rem;
     border: 1px solid #ccc;
     border-radius: 4px;
   }

   button {
     background-color: #4CAF50;
     color: white;
     padding: 0.5rem 1rem;
     border: none;
     border-radius: 4px;
     cursor: pointer;
   }
   ```

4. **create-job.service.ts**:
   - Este archivo contendrá el servicio que maneja la lógica de negocio relacionada con la creación de vacantes. Se encargará de comunicarse con el backend para enviar los datos de la vacante.

   ```typescript
   import { Injectable } from '@angular/core';
   import { HttpClient } from '@angular/common/http';
   import { Observable } from 'rxjs';
   import { Job } from './create-job.model';

   @Injectable({
     providedIn: 'root'
   })
   export class CreateJobService {
     private apiUrl = 'http://localhost:3000/api/jobs'; // URL del backend

     constructor(private http: HttpClient) {}

     createJob(job: Job): Observable<any> {
       return this.http.post(this.apiUrl, job);
     }
   }
   ```

5. **create-job.model.ts**:
   - Este archivo contendrá el modelo de datos para la vacante, definiendo la estructura de los datos que se enviarán al backend.

   ```typescript
   export class Job {
     title: string;
     description: string;
     requirements: string;

     constructor() {
       this.title = '';
       this.description = '';
       this.requirements = '';
     }
   }
   ```

## Creación de la Carpeta y Archivos

Para crear la carpeta y los archivos, puedes ejecutar los siguientes comandos en la terminal:

```bash
mkdir -p frontend/src/app/pages/create-job
touch frontend/src/app/pages/create-job/create-job.component.ts
touch frontend/src/app/pages/create-job/create-job.component.html
touch frontend/src/app/pages/create-job/create-job.component.scss
touch frontend/src/app/pages/create-job/create-job.service.ts
touch frontend/src/app/pages/create-job/create-job.model.ts
```

Con estos archivos y la estructura creada, estarás listo para implementar la funcionalidad de creación de vacantes en el sistema ATS. 