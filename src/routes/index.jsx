import { Route, Routes } from "react-router-dom";
import { Dashboard, LoginPage, RegisterPage } from "../pages";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
