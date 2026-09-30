import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <section className="py-10">
      <h1 className="font-titulo text-5xl font-extrabold leading-tight sm:text-7xl">
        Desarrollo aplicaciones web completas.
      </h1>
      <p className="mt-8 max-w-xl text-lg text-suave">
        Soy Kevin, desarrollador web. Trabajo con React, TypeScript y .NET, y
        ahora estudio Inteligencia Artificial y Big Data.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link to="/proyectos" className="rounded bg-cobalto px-5 py-3 font-medium text-white">
          Ver proyectos
        </Link>
        <Link to="/contacto" className="rounded border border-tinta px-5 py-3 font-medium">
          Contactar
        </Link>
      </div>
    </section>
  );
}
