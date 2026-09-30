import { Link } from "react-router-dom";
export default function TarjetaProyecto({ p, i = 0 }) {
  const img = p.capturas[0];
  return (
    <article className="cristal tarjeta aparece flex flex-col overflow-hidden" style={{ "--i": i + 1 }}>
      {img ? (
        <img src={`${import.meta.env.BASE_URL}capturas/${img.archivo}`} alt={img.alt} loading="lazy" className="h-44 w-full object-cover" />
      ) : (
        <div className="grid h-44 place-items-center bg-gradient-to-br from-neon/20 to-neon2/5 font-titulo text-6xl font-bold text-neon" aria-hidden="true">{p.nombre[0]}</div>
      )}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h2 className="font-titulo text-3xl font-bold uppercase leading-tight">{p.nombre}</h2>
        <p className="text-suave">{p.resumen}</p>
        <ul className="flex flex-wrap gap-2">
          {p.tecnologias.map((t) => <li key={t} className="rounded-md border border-linea px-2.5 py-0.5 text-sm text-neon">{t}</li>)}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3">
          <Link to={`/proyectos/${p.slug}`} className="boton !px-4 !py-2 text-sm">Ver proyecto</Link>
          {p.repositorio && <a href={p.repositorio} target="_blank" rel="noopener noreferrer" className="boton fantasma !px-4 !py-2 text-sm">GitHub</a>}
        </div>
      </div>
    </article>
  );
}
