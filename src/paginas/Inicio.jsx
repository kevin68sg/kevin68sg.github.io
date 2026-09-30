import { Link } from "react-router-dom";

// Emblema geométrico: tres polígonos con trazo neón
function Emblema() {
  return (
    <div className="cristal grid aspect-[1.15] place-items-center shadow-[0_0_40px_rgba(57,255,154,0.25)]" role="img" aria-label="Emblema geométrico verde neón">
      <svg viewBox="0 0 200 200" fill="none" strokeWidth="3" strokeLinejoin="round" className="emblema w-3/5">
        <polygon points="100,18 158,44 182,100 158,158 100,184 42,158 18,100 42,44" stroke="#39ff9a" />
        <polygon points="100,42 140,60 158,100 140,140 100,158 60,140 42,100 60,60" stroke="#12d6b0" />
        <polygon points="84,72 84,128 132,100" stroke="#39ff9a" />
      </svg>
    </div>
  );
}

export default function Inicio() {
  return (
    <section className="grid items-center gap-10 py-6 md:grid-cols-[1.2fr_1fr]">
      <div>
        <h1 className="font-titulo text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">
          Desarrollo aplicaciones web completas.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-suave">
          Soy Kevin, desarrollador web. Trabajo con React, TypeScript y .NET, y
          ahora estudio Inteligencia Artificial y Big Data.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/proyectos" className="boton">Ver proyectos</Link>
          <Link to="/contacto" className="boton fantasma">Contactar</Link>
        </div>
      </div>
      <Emblema />
    </section>
  );
}
