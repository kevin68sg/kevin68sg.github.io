import { NavLink, Outlet } from "react-router-dom";

const enlaces = [
  { ruta: "/", texto: "Inicio" },
  { ruta: "/proyectos", texto: "Proyectos" },
  { ruta: "/sobre-mi", texto: "Sobre mí" },
  { ruta: "/contacto", texto: "Contacto" },
];

// Enlace activo: subrayado neón con halo; inactivo: gris verdoso
function claseEnlace({ isActive }) {
  if (isActive) {
    return "border-b-2 border-neon pb-1 font-medium text-neon";
  } else {
    return "border-b-2 border-transparent pb-1 text-texto hover:text-neon";
  }
}

export default function Layout() {
  return (
    <div className="marco flex min-h-[calc(100vh-2.5rem)] flex-col">
      <header className="flex w-full flex-wrap items-center gap-x-8 gap-y-3 py-7">
        {/* Logo circular con la inicial */}
        <NavLink
          to="/"
          aria-label="Inicio"
          className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-neon to-neon2 font-titulo text-xl font-bold text-fondo shadow-[0_0_16px_rgba(57,255,154,0.6)]"
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
      </header>

      <main className="w-full flex-1 py-8">
        <Outlet />
      </main>

      <footer className="w-full border-t border-linea py-6 text-sm text-suave">
        © 2026 Kevin
      </footer>
    </div>
  );
}
