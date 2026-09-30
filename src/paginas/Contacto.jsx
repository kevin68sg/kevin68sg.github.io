// Sustituye los datos marcados antes de publicar
const contactos = [
  { nombre: "GitHub", url: "https://github.com/kevin68sg" },
  { nombre: "LinkedIn", url: "www.linkedin.com/in/kevin-santiago-gonzález-gonzález-5328813a5" },
  { nombre: "Correo", url: "ksantiago.gonzalez0608@gmail.com" },
];

export default function Contacto() {
  return (
    <section>
      <h1 className="font-titulo text-4xl font-bold">Contacto</h1>
      <p className="mt-6 max-w-xl text-suave">
        Escríbeme por cualquiera de estos canales.
      </p>
      <ul className="mt-8 space-y-3">
        {contactos.map((contacto) => (
          <li key={contacto.nombre}>
            <a href={contacto.url} className="font-medium text-cobalto underline">
              {contacto.nombre}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
