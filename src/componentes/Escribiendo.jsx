import { useEffect, useState } from "react";

// Escribe y borra frases en bucle. Con "reducir movimiento" muestra la primera fija.
export default function Escribiendo({ frases }) {
  const [frase, setFrase] = useState(0);      // índice de la frase actual
  const [letras, setLetras] = useState(0);    // cuántas letras se ven
  const [borrando, setBorrando] = useState(false);
  const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reducido) return;
    const actual = frases[frase];
    // Pausa al terminar de escribir y una más corta antes de la siguiente frase
    let espera = borrando ? 35 : 70;
    if (!borrando && letras === actual.length) espera = 1600;
    if (borrando && letras === 0) espera = 300;

    const temporizador = setTimeout(() => {
      if (!borrando && letras === actual.length) {
        setBorrando(true);
      } else if (borrando && letras === 0) {
        setBorrando(false);
        setFrase((frase + 1) % frases.length);
      } else {
        setLetras(letras + (borrando ? -1 : 1));
      }
    }, espera);
    return () => clearTimeout(temporizador);
  }, [letras, borrando, frase, frases, reducido]);

  return (
    <>
      {/* Lectores de pantalla: texto estático; la animación se oculta para ellos */}
      <span className="sr-only">{frases.join(", ")}</span>
      <span aria-hidden="true">
        {reducido ? frases[0] : frases[frase].slice(0, letras)}
        {!reducido && <span className="cursor" />}
      </span>
    </>
  );
}
