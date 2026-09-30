const tecnologias = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind",
  "C# / .NET", "SQL Server", "Git / GitHub", "Python (en progreso)",
];

const certificados = ["React (OpenWebinars)", "Python (Cisco)"];

export default function SobreMi() {
  return (
    <section>
      <h1 className="aparece font-titulo text-5xl font-bold uppercase">Sobre mí</h1>
      <p className="mt-6 max-w-xl text-lg text-suave">
        Terminé el Grado Superior en Desarrollo de Aplicaciones Web y trabajé
        como desarrollador web en prácticas en Cognodata. Ahora curso la
        especialización en IA y Big Data.
      </p>

      <h2 className="mt-12 font-titulo text-3xl font-bold uppercase">Tecnologías</h2>
      <ul className="mt-4 flex flex-wrap gap-3">
        {tecnologias.map((tec, i) => (
          <li key={tec} className="cristal tarjeta aparece rounded-lg px-4 py-1.5 text-neon" style={{ "--i": i + 1 }}>
            {tec}
          </li>
        ))}
      </ul>

      <h2 className="mt-12 font-titulo text-3xl font-bold uppercase">Certificados</h2>
      <ul className="mt-4 space-y-1 text-suave">
        {certificados.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}
