<div align="justify">

# Gestor de tareas 

<div align="center">
  <img src=images/tasks.png
   width="350">
</div>

Aplicación **Angular** de ejemplo con varias páginas (routing), estilos globales y un formulario para **crear** y **eliminar** tareas (CRUD básico en memoria).

> Práctica orientada a **Angular CLI 21** con componentes **standalone**.

---

## Tecnologías utilizadas

- **Angular (standalone components)**  
  
  Arquitectura moderna basada en componentes standalone.

- **Angular CLI 21**  
  
  Generación de proyecto, componentes/servicios y servidor de desarrollo.

- **TypeScript**  
  
  Tipado fuerte (`interface`, `type`) y utilidades como `Omit`.

- **Angular Router**  
  
  Navegación entre páginas mediante `Routes` y `<router-outlet>`.

- **Reactive Forms (Angular Forms)**  
  
  Formularios reactivos con `ReactiveFormsModule`, `FormBuilder` y validación con `Validators`.

- **HTML + Angular Template Syntax**  
  
  Interpolación, bindings y control de flujo moderno (`@if`, `@for`).

- **CSS**  
  
  Estilos globales (`src/styles.css`) y estilos por componente.

- **Node.js + npm**  
  
  Entorno y gestor de paquetes para dependencias, scripts y ejecución.

---

## Requisitos

- Node.js **22.x**
- npm **10.x**
- Angular CLI **21.x**

---

## Scripts útiles

```bash
# servidor de desarrollo
ng serve -o

# generación de componentes y servicios (ejemplos)
ng g c pages/home
ng g c pages/tasks
ng g c pages/task-new
ng g c shared/navbar
ng g s services/tasks
```

---

## Estructura del proyecto (resumen)

```text
src/app/
├─ pages/        # páginas (Home, Tasks, TaskNew)
├─ shared/       # componentes compartidos (Navbar)
├─ services/     # servicios (TasksService)
└─ models/       # modelos y tipos (Task, NewTask)
```

---

## Funcionalidad

- Listado de tareas
- Alta de tareas con formulario reactivo
- Eliminación de tareas
- Persistencia **en memoria** (sin backend)

---

## Referencias

- **[Code & Learn - (Práctica 1)](https://github.com/jpexposito/code-learn/blob/main/comun/angular/practicas/practica-01.md)** .
- **[Code & Learn - (Práctica 2)](https://github.com/jpexposito/code-learn/blob/main/comun/angular/practicas/practica-02.md)** 

</div>
