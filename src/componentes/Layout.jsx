import { NavLink, Outlet, useLocation } from "react-router-dom";
import BotonTema from "./BotonTema.jsx";

const enlaces = [
  { ruta: "/", texto: "Inicio" },
  { ruta: "/proyectos", texto: "Proyectos" },
  { ruta: "/sobre-mi", texto: "Sobre mí" },
  { ruta: "/contacto", texto: "Contacto" },
];

function claseEnlace({ isActive }) {
  if (isActive) {
    return "border-b-2 border-neon pb-1 font-medium text-neon";
  } else {
    return "border-b-2 border-transparent pb-1 text-texto hover:text-neon";
  }
}

export default function Layout() {
  const { pathname } = useLocation(); // sirve de "key" para animar cada cambio de página

  return (
    <>
      {/* Capas de fondo animadas (decorativas) */}
      <div className="rejilla" aria-hidden="true" />
      <div className="orbe a" aria-hidden="true" />
      <div className="orbe b" aria-hidden="true" />

      <div className="marco flex min-h-[calc(100vh-2.5rem)] flex-col">
        <header className="flex w-full flex-wrap items-center gap-x-8 gap-y-3 py-7">
          <NavLink
            to="/"
            aria-label="Inicio"
            className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-neon to-neon2 font-titulo text-xl font-bold text-fondo shadow-[0_0_16px_rgb(var(--glow)/0.6)]"
          >
            K
          </NavLink>
          <nav className="flex flex-wrap gap-6 text-sm">
            {enlaces.map((enlace) => (
              <NavLink key={enlace.ruta} to={enlace.ruta} end className={claseEnlace}>
                {enlace.texto}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto">
            <BotonTema />
          </div>
        </header>

        <main key={pathname} className="w-full flex-1 py-8">
          <Outlet />
        </main>

        <footer className="w-full border-t border-linea py-6 text-sm text-suave">
          © 2026 Kevin
        </footer>
      </div>
    </>
  );
}
