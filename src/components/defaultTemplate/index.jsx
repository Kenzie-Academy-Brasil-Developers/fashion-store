import { AppHeader } from "../header/index.jsx";
import { AppFooter } from "../footer/index.jsx";
import styles from "./index.module.scss";

export const DefaultTemplate = ({ children }) => {
  const pathname = window.location.pathname;
  const style =
    pathname === "/dashboard" ||
    pathname === "/dashboard/products" ||
    pathname === "/login" ||
    pathname === "/register"
      ? styles.content__container
      : null;
  return (
    <div className={style}>
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
};
