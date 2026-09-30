import { Routes, Route } from "react-router-dom";
import Layout from "./componentes/Layout.jsx";
import Inicio from "./paginas/Inicio.jsx";
import Proyectos from "./paginas/Proyectos.jsx";
import SobreMi from "./paginas/SobreMi.jsx";
import ProyectoDetalle from "./paginas/ProyectoDetalle.jsx";
import Contacto from "./paginas/Contacto.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}
