import { proyectos } from "../datos/proyectos.js";

function Enlaces({ proyecto }) {
  return (
    <p className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
      {proyecto.demo && (
        <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="font-medium text-neon hover:underline">
          Ver demo en vivo
        </a>
      )}
      {proyecto.repositorio ? (
        <a href={proyecto.repositorio} className="font-medium text-neon hover:underline">Ver repositorio</a>
      ) : (
        <span className="text-suave">Repositorio privado</span>
      )}
    </p>
  );
}

// Galería de capturas: solo se dibuja si el proyecto tiene alguna
function Capturas({ capturas }) {
  if (capturas.length === 0) return null;
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {capturas.map((c) => (
        <li key={c.archivo}>
          <img
            src={`${import.meta.env.BASE_URL}capturas/${c.archivo}`}
            alt={c.alt}
            loading="lazy"
            className="w-full rounded-lg border border-linea"
          />
        </li>
      ))}
    </ul>
  );
}

export default function Proyectos() {
  return (
    <section>
      <h1 className="aparece font-titulo text-5xl font-bold uppercase">Proyectos</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {proyectos.map((proyecto, i) => (
          <article key={proyecto.nombre} className="cristal tarjeta aparece flex flex-col gap-4 p-6" style={{ "--i": i + 1 }}>
            <h2 className="font-titulo text-3xl font-bold uppercase leading-tight">{proyecto.nombre}</h2>
            <p className="text-suave">{proyecto.resumen}</p>
            <Capturas capturas={proyecto.capturas} />
            <ul className="flex flex-wrap gap-2">
              {proyecto.tecnologias.map((tec) => (
                <li key={tec} className="rounded-md border border-linea px-2.5 py-0.5 text-sm text-neon">{tec}</li>
              ))}
            </ul>
            <Enlaces proyecto={proyecto} />
          </article>
        ))}
      </div>
    </section>
  );
}
