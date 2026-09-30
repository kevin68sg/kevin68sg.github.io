import { proyectos } from "../datos/proyectos.js";

function EnlaceRepositorio({ url }) {
  if (url) {
    return (
      <a href={url} className="font-medium text-neon hover:underline">
        Ver repositorio
      </a>
    );
  } else {
    return <span className="text-suave">Repositorio privado</span>;
  }
}

export default function Proyectos() {
  return (
    <section>
      <h1 className="font-titulo text-5xl font-bold uppercase">Proyectos</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {proyectos.map((proyecto) => (
          <article key={proyecto.nombre} className="cristal flex flex-col gap-3 p-6">
            <h2 className="font-titulo text-3xl font-bold uppercase leading-tight">{proyecto.nombre}</h2>
            <p className="flex-1 text-suave">{proyecto.resumen}</p>
            {/* Tecnologías como etiquetas en lugar de texto separado por comas */}
            <ul className="flex flex-wrap gap-2">
              {proyecto.tecnologias.map((tec) => (
                <li key={tec} className="rounded-md border border-linea px-2.5 py-0.5 text-sm text-neon">
                  {tec}
                </li>
              ))}
            </ul>
            <p className="text-sm">
              <EnlaceRepositorio url={proyecto.repositorio} />
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
