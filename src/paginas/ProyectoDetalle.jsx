import { Link, useParams } from "react-router-dom";
import { proyectos } from "../datos/proyectos.js";
const bloques = [["Problema", "problema"], ["Solución", "solucion"], ["Mi responsabilidad", "responsabilidad"], ["Arquitectura", "arquitectura"], ["Retos", "retos"], ["Resultado", "resultado"]];
export default function ProyectoDetalle() {
  const { slug } = useParams();
  const p = proyectos.find((x) => x.slug === slug);
  if (!p) return <p>Proyecto no encontrado. <Link to="/proyectos" className="text-neon">Volver</Link></p>;
  return (
    <section className="max-w-3xl">
      <Link to="/proyectos" className="text-sm text-neon hover:underline">← Proyectos</Link>
      <h1 className="aparece mt-4 font-titulo text-5xl font-bold uppercase">{p.nombre}</h1>
      <ul className="mt-4 flex flex-wrap gap-2">
        {p.tecnologias.map((t) => <li key={t} className="rounded-md border border-linea px-2.5 py-0.5 text-sm text-neon">{t}</li>)}
      </ul>
      {p.capturas.length > 0 && (
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {p.capturas.map((c) => <img key={c.archivo} src={`${import.meta.env.BASE_URL}capturas/${c.archivo}`} alt={c.alt} className="rounded-lg border border-linea" />)}
        </div>
      )}
      {bloques.map(([titulo, clave]) => (
        <div key={clave} className="mt-8">
          <h2 className="font-titulo text-2xl font-bold uppercase text-neon">{titulo}</h2>
          <p className="mt-2 text-suave">{p[clave]}</p>
        </div>
      ))}
      <div className="mt-10 flex flex-wrap gap-3">
        {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="boton">Ver demo</a>}
        {p.repositorio ? <a href={p.repositorio} target="_blank" rel="noopener noreferrer" className="boton fantasma">GitHub</a> : <span className="text-suave">Repositorio privado</span>}
      </div>
    </section>
  );
}
