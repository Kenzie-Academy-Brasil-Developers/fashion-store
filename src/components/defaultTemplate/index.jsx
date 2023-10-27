import { AppHeader } from "../header/index.jsx"
import { AppFooter } from "../footer/index.jsx"

const DefaultTemplate = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};

export { DefaultTemplate } 