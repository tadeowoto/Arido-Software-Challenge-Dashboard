# Arido Users Dashboard

Este proyecto es la interfaz administrativa para la gestión de usuarios y grupos de seguridad. Ha sido desarrollado con Next.js como núcleo, priorizando la experiencia de usuario (UX), el rendimiento y el tipado estricto.

## Tecnologias Principales

- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form
- Sonner (Notificaciones)
- Lucide React (Iconografía)

## Arquitectura del Frontend

La aplicacion se divide en capas para asegurar un mantenimiento sencillo y escalabilidad:

1. Capa de Servicios: Ubicada en /services, centraliza las llamadas a la API de Spring Boot mediante fetch, permitiendo que los componentes se centren solo en la presentacion.
2. Capa de Tipado: Uso extensivo de interfaces de TypeScript para replicar los modelos del backend (UserResponse, SecurityGroupResponse, FormData), garantizando la integridad de los datos.
3. Componentes Modulares: Division de la UI en componentes reutilizables como tablas dinamicas, modales y elementos de formulario especificos.

## Caracteristicas Implementadas

### 1. Gestion de Usuarios y Grupos

- Listado dinamico de usuarios con visualizacion de estados y grupos asignados.
- Creacion de usuarios mediante un modal avanzado con soporte para asignacion multiple de grupos y niveles de acceso (Field Arrays).
- Visualizacion de grupos de seguridad en formato de tarjetas.

### 2. Optimizaciones de Rendimiento

- Optimizacion con Debounce: Implementado en los filtros de busqueda para retrasar la ejecucion de llamadas a la API hasta que el usuario deja de escribir. Esto reduce la carga del servidor y optimiza el rendimiento de la red.
- Server Components: Aprovechamiento de las capacidades de Next.js para renderizar datos en el servidor y optimizar el tiempo de carga inicial.

### 3. Experiencia de Usuario (UX)

- Skeleton Screens: Implementacion de estados de carga personalizados (loading.tsx) que imitan la estructura de tablas y cards para eliminar el salto visual (CLS).
- Feedback con Sonner: Sistema de notificaciones Toast que informa en tiempo real sobre el estado de las operaciones (Cargando, Exito, Error) sin bloquear la interfaz.
- Validaciones Robustas: Reglas de negocio aplicadas directamente en los inputs (longitud, caracteres especiales, fortaleza de password) sincronizadas con los requisitos del backend.

### 4. Imagenes

<img width="1920" height="954" alt="Screenshot 2026-04-10 at 7 40 50 PM" src="https://github.com/user-attachments/assets/16cfa0bf-b7d9-4cd0-8f6a-0286641fcfba" />
<img width="1920" height="954" alt="Screenshot 2026-04-10 at 7 42 11 PM" src="https://github.com/user-attachments/assets/4ce257c2-9830-4c87-8fab-b0807dc35a38" />
<img width="1920" height="958" alt="Screenshot 2026-04-10 at 7 41 51 PM" src="https://github.com/user-attachments/assets/9763d407-1016-4833-b9bb-36ff6c7d0fdf" />
<img width="428" height="868" alt="Screenshot 2026-04-10 at 7 42 34 PM" src="https://github.com/user-attachments/assets/1a3e8c3e-e918-4325-a8e3-d713d7bbd702" />
<img width="1920" height="956" alt="Screenshot 2026-04-10 at 7 43 00 PM" src="https://github.com/user-attachments/assets/acc7c8d0-2655-4b6a-8984-9fd42f42ef56" />
