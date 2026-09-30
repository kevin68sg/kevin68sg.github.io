const grupos = [
  ["Principales", "React · TypeScript · C# / .NET · SQL Server · Git / GitFlow"],
  ["Frontend", "JavaScript · HTML5 · CSS3 · Tailwind CSS · React Query · React Router"],
  ["Backend y datos", "APIs REST · PHP (MVC) · MySQL · SQL Server"],
  ["Cloud e IA", "Azure · Azure Entra ID · Azure OpenAI"],
  ["Herramientas", "GitHub · Visual Studio · VS Code · SSMS · Vite · npm"],
  ["Actualmente aprendiendo", "Python · IA · Big Data"],
];
const experiencia = [
  { t: "Cognodata — Prácticas Desarrollador Web", f: "03/2026 – 06/2026", l: ["Componentes y funcionalidades frontend con React y TypeScript.", "APIs y lógica de negocio con C#/.NET sobre SQL Server.", "Integración de IA generativa (GPT / Azure OpenAI, CognoGPT) en aplicaciones web.", "Autenticación con Azure y Azure Entra ID.", "Git/GitFlow y proyectos internos de desarrollo."] },
  { t: "Vance SL — Prácticas Desarrollador Web", f: "02/2025 – 04/2025", l: ["Actualización y mantenimiento de la web corporativa (WordPress / Wix) con HTML y CSS."] },
];
const H = ({ children }) => <h2 className="mt-14 font-titulo text-3xl font-bold uppercase">{children}</h2>;

export default function SobreMi() {
  return (
    <section>
      <h1 className="aparece font-titulo text-5xl font-bold uppercase">Sobre mí</h1>
      <div className="mt-6 max-w-2xl space-y-3 text-lg text-suave">
        <p>Soy desarrollador web formado en Desarrollo de Aplicaciones Web, con dos periodos de prácticas y experiencia real con React, .NET, SQL Server, Azure OpenAI y autenticación con Azure Entra ID.</p>
        <p>Me interesa especialmente el desarrollo de aplicaciones web, el backend y las tecnologías relacionadas con inteligencia artificial y datos.</p>
        <p>Actualmente continúo ampliando mis conocimientos en Python, IA y Big Data.</p>
      </div>

      <H>Experiencia</H>
      {experiencia.map((e) => (
        <div key={e.t} className="cristal mt-4 p-6">
          <p className="font-titulo text-2xl font-bold">{e.t} <span className="text-neon">· {e.f}</span></p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-suave">{e.l.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      ))}

      <H>Formación</H>
      <div className="cristal mt-4 p-6">
        <p className="font-titulo text-2xl font-bold">Grado Superior en Desarrollo de Aplicaciones Web <span className="text-neon">· 2024–2026</span></p>
        <p className="text-suave">IES Ciudad Escolar, Madrid</p>
        <p className="mt-4 font-titulo text-2xl font-bold">Especialización en IA y Big Data <span className="text-neon">· 2026–2027 (en curso)</span></p>
        <p className="text-suave">IES Virgen de la Paz · Python aplicado, IA y tecnologías de datos</p>
        <p className="mt-4 text-suave">Certificados: React (OpenWebinars) · Python (Cisco)</p>
        <p className="text-suave">Idiomas: español nativo · inglés B2 (comprensión), B1 (escrito y oral)</p>
      </div>

      <H>Tecnologías</H>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {grupos.map(([g, t], i) => (
          <div key={g} className="cristal tarjeta aparece p-5" style={{ "--i": i + 1 }}>
            <h3 className="font-titulo text-xl font-bold uppercase text-neon">{g}</h3>
            <p className="mt-1 text-suave">{t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
