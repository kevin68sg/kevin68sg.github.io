const tecnologias = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind",
  "C# / .NET", "SQL Server", "Git / GitHub", "Python (en progreso)",
];

const certificados = ["React (OpenWebinars)", "Python (Cisco)"];

export default function SobreMi() {
  return (
    <section>
      <h1 className="font-titulo text-4xl font-bold">Sobre mí</h1>
      <p className="mt-6 max-w-xl text-suave">
        Terminé el Grado Superior en Desarrollo de Aplicaciones Web y trabajé
        como desarrollador web en prácticas en Cognodata. Ahora curso la
        especialización en IA y Big Data.
      </p>

      <h2 className="mt-12 font-titulo text-2xl font-bold">Tecnologías</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tecnologias.map((tec) => (
          <li key={tec} className="rounded border border-linea px-3 py-1 text-sm">
            {tec}
          </li>
        ))}
      </ul>

      <h2 className="mt-12 font-titulo text-2xl font-bold">Certificados</h2>
      <ul className="mt-4 space-y-1 text-suave">
        {certificados.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}
