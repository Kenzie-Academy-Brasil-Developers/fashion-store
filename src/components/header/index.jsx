import { MdOutlineShoppingCart } from "react-icons/md";
import logoImg from "../../assets/FAshionSTORE.png";
import { useContext } from "react";
import { productContext } from "../../providers/productsProvider";
import styles from "./style.module.scss";

export const AppHeader = () => {
  const { setCartIsOpen, cartCounter } = useContext(productContext);
  const pathname = window.location.pathname;

  const divClassName =
    pathname === "/" || pathname.includes("/product")
      ? `${styles.div} ${styles.spaceBtw}`
      : styles.div;

  return (
    <header className={styles.header}>
      <div className={divClassName}>
        <img src={logoImg} alt="fashion logo" />
        {pathname === "/" || pathname.includes("/product") ? (
          <button onClick={() => setCartIsOpen(true)}>
            <MdOutlineShoppingCart size={30} />
          </button>
        ) : null}
        {(cartCounter != 0 && pathname === "/") ||
        pathname.includes("product/") ? (
          <span>{`${cartCounter}`}</span>
        ) : null}
      </div>
    </header>
  );
};
