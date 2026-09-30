import Redes from "../componentes/Redes.jsx";
export default function Contacto() {
  return (
    <section>
      <h1 className="aparece font-titulo text-5xl font-bold uppercase sm:text-7xl">¿Trabajamos juntos?</h1>
      <p className="mt-6 max-w-xl text-lg text-suave">
        Estoy abierto a oportunidades como desarrollador web junior y a proyectos de desarrollo de software, datos e IA.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <a href="mailto:ksantiago.gonzalez0608@gmail.com" className="boton">✉️ Contactarme</a>
        <Redes solo={["github", "linkedin", "mail"]} />
      </div>
    </section>
  );
}
