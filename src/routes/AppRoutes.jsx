import { Routes, Route, Navigate } from "react-router-dom";
import IniciarSesion from "../pages/IniciarSesion";
import Facturacion from "../components/vista-Empleado/tabs-button"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IniciarSesion />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/facturacion" element={<Facturacion/>}/>
    </Routes>
  );
};