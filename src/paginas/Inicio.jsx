import { Link } from "react-router-dom";
import Escribiendo from "../componentes/Escribiendo.jsx";

// Fuera del componente para que la referencia sea estable entre renders
const frases = ["desarrollador web", "React + TypeScript", "aplicaciones .NET", "estudiante de IA y Big Data"];

// Emblema: anillos que giran en sentidos opuestos, un punto en órbita y el triángulo central
function Emblema() {
  return (
    <div className="cristal escaner grid aspect-[1.15] place-items-center shadow-[0_0_40px_rgb(var(--glow)/0.25)]" role="img" aria-label="Emblema geométrico verde animado">
      <svg viewBox="0 0 200 200" fill="none" strokeWidth="3" strokeLinejoin="round" className="emblema w-3/5">
        <circle className="anillo-punteado stroke-neon2" cx="100" cy="100" r="96" strokeWidth="1.5" strokeDasharray="2 9" />
        <g className="anillo-lento">
          <polygon className="stroke-neon" points="100,18 158,44 182,100 158,158 100,184 42,158 18,100 42,44" />
        </g>
        <g className="anillo-inverso">
          <polygon className="stroke-neon2" points="100,42 140,60 158,100 140,140 100,158 60,140 42,100 60,60" />
        </g>
        <polygon className="stroke-neon" points="84,72 84,128 132,100" />
        <g className="orbita">
          <circle className="fill-neon stroke-none" cx="100" cy="4" r="4" />
        </g>
      </svg>
    </div>
  );
}

export default function Inicio() {
  return (
    <section className="grid items-center gap-10 py-6 md:grid-cols-[1.2fr_1fr]">
      <div>
        <h1 className="aparece font-titulo text-5xl font-bold uppercase leading-[0.95] sm:text-7xl" style={{ "--i": 0 }}>
          Desarrollo aplicaciones web completas.
        </h1>
        <p className="aparece mt-6 font-titulo text-2xl text-neon" style={{ "--i": 2 }}>
          Kevin / <Escribiendo frases={frases} />
        </p>
        <p className="aparece mt-6 max-w-xl text-lg text-suave" style={{ "--i": 3 }}>
          Soy Kevin, desarrollador web. Trabajo con React, TypeScript y .NET, y
          ahora estudio Inteligencia Artificial y Big Data.
        </p>
        <div className="aparece mt-10 flex flex-wrap gap-4" style={{ "--i": 4 }}>
          <Link to="/proyectos" className="boton">Ver proyectos</Link>
          <Link to="/contacto" className="boton fantasma">Contactar</Link>
        </div>
      </div>
      <div className="aparece" style={{ "--i": 3 }}>
        <Emblema />
      </div>
    </section>
  );
}
