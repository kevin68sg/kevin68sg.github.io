// EDITA los textos con tus datos reales. "repositorio"/"demo": URL o null. "capturas": archivos en public/capturas/
export const proyectos = [
  {
    slug: "cognopeoplehub",
    nombre: "CognoPeopleHub",
    resumen: "Aplicación web de gestión de evaluaciones de RR. HH., desarrollada con React y .NET y conectada a SQL Server.",
    tecnologias: ["React", "TypeScript", "Vite", "Tailwind", "React Query", ".NET", "API REST", "SQL Server"],
    repositorio: null, demo: null, capturas: [],
    problema: "Gestionar las evaluaciones de las personas de forma centralizada, en lugar de procesos dispersos.",
    solucion: "Aplicación full stack: interfaz responsive en React con Tailwind, estado y datos con React Query, y API REST en .NET conectada a SQL Server.",
    responsabilidad: "Desarrollo de interfaces con React, trabajo con la API y el backend, y control de versiones con Git/GitFlow.",
    arquitectura: "Frontend React + TypeScript → API REST en C#/.NET → SQL Server.",
    retos: "Sincronizar el estado del frontend con la API y organizar el trabajo en equipo con GitFlow.",
    resultado: "Aplicación funcional desarrollada durante mis prácticas en Cognodata.",
  },
  {
    slug: "asignaciones-fp",
    nombre: "Sistema de asignaciones FP",
    resumen: "Proyecto de fin de grado en equipo: aplicación para asignar módulos a los profesores de un departamento de FP.",
    tecnologias: ["PHP", "MVC", "MySQL", "PDO"],
    repositorio: null, demo: "https://ciudadescolarfp.es/asignaciones/", capturas: [],
    problema: "Repartir los módulos entre los profesores de un departamento de forma ordenada.",
    solucion: "Aplicación web con gestión de usuarios, formularios y operaciones CRUD, con patrón MVC y MySQL (PDO).",
    responsabilidad: "Desarrollo en equipo del proyecto de fin de grado.",
    arquitectura: "PHP con patrón MVC sobre MySQL.",
    retos: "Coordinar el trabajo en equipo y estructurar el código con MVC.",
    resultado: "Aplicación desplegada y accesible en línea.",
  },
];
