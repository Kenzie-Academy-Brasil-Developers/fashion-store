import { Route, Routes } from "react-router-dom";
import { Dashboard, LoginPage, RegisterPage, ProductPage } from "../pages";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/product/:id" element={<ProductPage />}/>
    </Routes>
  );
};
