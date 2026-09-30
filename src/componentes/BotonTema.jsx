import { useEffect, useState } from "react";

// Botón que alterna entre modo oscuro y claro y recuerda la elección
export default function BotonTema() {
  // El tema inicial ya lo dejó puesto el script de index.html
  const [tema, setTema] = useState(() => document.documentElement.dataset.theme || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
    try { localStorage.setItem("tema", tema); } catch { /* sin almacenamiento: no pasa nada */ }
  }, [tema]);

  const oscuro = tema === "dark";

  return (
    <button
      type="button"
      onClick={() => setTema(oscuro ? "light" : "dark")}
      aria-label={oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="cristal tarjeta grid h-10 w-10 place-items-center rounded-full text-neon"
    >
      {/* key fuerza a repetir la animación de giro en cada cambio */}
      <svg key={tema} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="aparece">
        {oscuro ? (
          // Sol (se muestra en modo oscuro: pulsa para ir a claro)
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        ) : (
          // Luna
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
        )}
      </svg>
    </button>
  );
}
