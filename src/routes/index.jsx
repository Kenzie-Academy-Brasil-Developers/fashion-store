import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/DashboardPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
