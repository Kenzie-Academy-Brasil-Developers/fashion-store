import { AppHeader } from "../header/index.jsx";
import { AppFooter } from "../footer/index.jsx";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};
