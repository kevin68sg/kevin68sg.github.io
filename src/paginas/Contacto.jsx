// Sin "https://" el navegador trata el enlace como ruta relativa, y el correo necesita "mailto:"
const contactos = [
  { nombre: "GitHub", url: "https://github.com/kevin68sg" },
  { nombre: "LinkedIn", url: "https://www.linkedin.com/in/kevin-santiago-gonzález-gonzález-5328813a5" },
  { nombre: "Correo", url: "mailto:ksantiago.gonzalez0608@gmail.com" },
];

export default function Contacto() {
  return (
    <section>
      <h1 className="font-titulo text-5xl font-bold uppercase">Contacto</h1>
      <p className="mt-6 max-w-xl text-lg text-suave">
        Escríbeme por cualquiera de estos canales.
      </p>
      <ul className="mt-8 flex flex-wrap gap-4">
        {contactos.map((contacto, i) => (
          <li key={contacto.nombre}>
            {/* El primer botón va relleno y el resto de contorno */}
            <a href={contacto.url} className={i === 0 ? "boton" : "boton fantasma"}>
              {contacto.nombre}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
