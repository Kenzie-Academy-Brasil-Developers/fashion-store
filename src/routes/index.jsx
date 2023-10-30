import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ProductPage,
  Dashboard,
  ProductsListAdminView,
} from "../pages";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/products" element={<ProductsListAdminView />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="*" element={<HomePage/>}/>
    </Routes>
  );
};
