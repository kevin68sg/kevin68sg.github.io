const P = {
  github: "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z",
  linkedin: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.84v1.54h.05c.53-1 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4V9.75Z",
  mail: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.6 7 4 8l8 5.5L20 8l-.6-1L12 12.2Z",
};
export const REDES = [
  { id: "github", nombre: "GitHub", url: "https://github.com/kevin68sg" },
  { id: "linkedin", nombre: "LinkedIn", url: "https://www.linkedin.com/in/kevin-santiago-gonzález-gonzález-5328813a5" },
  { id: "mail", nombre: "Email", url: "mailto:ksantiago.gonzalez0608@gmail.com" },
];
export default function Redes({ solo = ["github", "linkedin"] }) {
  return (
    <ul className="flex gap-3">
      {REDES.filter((r) => solo.includes(r.id)).map((r) => (
        <li key={r.id}>
          <a href={r.url} target="_blank" rel="noopener noreferrer" aria-label={r.nombre}
             className="cristal tarjeta grid h-11 w-11 place-items-center text-neon">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d={P[r.id]} /></svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
