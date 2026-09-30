import { Link } from "react-router-dom";
import Redes from "../componentes/Redes.jsx";
import Escribiendo from "../componentes/Escribiendo.jsx";

// Fuera del componente para que la referencia sea estable entre renders
const frases = ["React", "TypeScript", ".NET", "SQL Server"];

function Foto() {
  return (
    <div className="cristal escaner mx-auto max-w-sm overflow-hidden p-2 shadow-[0_0_40px_rgb(var(--glow)/0.3)]">
      <img src={`${import.meta.env.BASE_URL}foto.jpg`} alt="Kevin Santiago, desarrollador web" width="640" height="640" className="aspect-square w-full rounded-xl object-cover" />
    </div>
  );
}

const sabe = [
  ["Desarrollo Frontend", "Interfaces responsive y componentes reutilizables con React y TypeScript."],
  ["Desarrollo Backend", "APIs REST y lógica de negocio con C# y .NET."],
  ["Bases de datos", "Diseño y consultas SQL con SQL Server."],
  ["Integración", "Consumo de APIs, autenticación y comunicación frontend/backend."],
];

export default function Inicio() {
  return (
    <>
      <section className="grid items-center gap-10 py-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="aparece inline-flex items-center gap-2 rounded-full border border-linea px-3 py-1 text-sm" style={{ "--i": 0 }}>
            <span className="h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_10px_var(--c-neon)]" /> Disponible para nuevas oportunidades
            <span className="text-suave">· Madrid · Remoto · Híbrido</span>
          </p>
          <h1 className="aparece mt-5 font-titulo text-6xl font-bold uppercase leading-[0.95] sm:text-8xl" style={{ "--i": 1 }}>Kevin Santiago</h1>
          <p className="aparece mt-4 font-titulo text-2xl text-neon sm:text-3xl" style={{ "--i": 2 }}>
            Desarrollador Full Stack Junior ·  <Escribiendo frases={frases} />
          </p>
          <p className="aparece mt-5 max-w-xl text-lg text-suave" style={{ "--i": 3 }}>
            Creo aplicaciones web modernas, funcionales y responsive.
          </p>
          <div className="aparece mt-8 flex flex-wrap items-center gap-4" style={{ "--i": 4 }}>
            <Link to="/proyectos" className="boton">Ver proyectos</Link>
            <a href={`${import.meta.env.BASE_URL}cv.pdf`} download className="boton fantasma">Descargar CV</a>
            <Redes />
          </div>
        </div>
        <div className="aparece" style={{ "--i": 3 }}><Foto /></div>
      </section>

      <section className="mt-16">
        <h2 className="font-titulo text-4xl font-bold uppercase">Lo que sé hacer</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {sabe.map(([t, d], i) => (
            <div key={t} className="cristal tarjeta aparece p-5" style={{ "--i": i + 1 }}>
              <h3 className="font-titulo text-2xl font-bold uppercase text-neon">{t}</h3>
              <p className="mt-2 text-suave">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
