import { Routes, Route, Navigate } from "react-router-dom";
import IniciarSesion from "../pages/IniciarSesion";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IniciarSesion />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};