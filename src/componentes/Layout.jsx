import { NavLink, Outlet } from "react-router-dom";

const enlaces = [
  { ruta: "/", texto: "Inicio" },
  { ruta: "/proyectos", texto: "Proyectos" },
  { ruta: "/sobre-mi", texto: "Sobre mí" },
  { ruta: "/contacto", texto: "Contacto" },
];

function claseEnlace({ isActive }) {
  if (isActive) {
    return "border-b-2 border-cobalto pb-1 font-medium";
  } else {
    return "border-b-2 border-transparent pb-1 text-suave hover:text-tinta";
  }
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <NavLink to="/" className="font-titulo text-xl font-bold">
          Kevin
        </NavLink>
        <nav className="flex gap-6 text-sm">
          {enlaces.map((enlace) => (
            <NavLink key={enlace.ruta} to={enlace.ruta} end className={claseEnlace}>
              {enlace.texto}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
        <Outlet />
      </main>

      <footer className="mx-auto w-full max-w-4xl border-t border-linea px-6 py-6 text-sm text-suave">
        © 2026 Kevin
      </footer>
    </div>
  );
}
