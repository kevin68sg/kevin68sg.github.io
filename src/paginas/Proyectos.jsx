import { proyectos } from "../datos/proyectos.js";
import TarjetaProyecto from "../componentes/TarjetaProyecto.jsx";
export default function Proyectos() {
  return (
    <section>
      <h1 className="aparece font-titulo text-5xl font-bold uppercase">Proyectos</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {proyectos.map((p, i) => <TarjetaProyecto key={p.slug} p={p} i={i} />)}
      </div>
    </section>
  );
}
