import { Route, Routes } from "react-router-dom";
import { Dashboard, LoginPage } from "../pages";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={ <Dashboard /> } />
      <Route path="/login" element={ <LoginPage /> } />
    </Routes>
  );
};
