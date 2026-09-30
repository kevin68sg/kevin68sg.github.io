import { proyectos } from "../datos/proyectos.js";

function EnlaceRepositorio({ url }) {
  if (url) {
    return (
      <a href={url} className="font-medium text-cobalto underline">
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
      <h1 className="font-titulo text-4xl font-bold">Proyectos</h1>
      <div className="mt-10">
        {proyectos.map((proyecto) => (
          <article key={proyecto.nombre} className="border-t border-linea py-8">
            <h2 className="font-titulo text-2xl font-bold">{proyecto.nombre}</h2>
            <p className="mt-3 max-w-xl text-suave">{proyecto.resumen}</p>
            <p className="mt-3 text-sm">{proyecto.tecnologias.join(", ")}</p>
            <p className="mt-3 text-sm">
              <EnlaceRepositorio url={proyecto.repositorio} />
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
