import { MdOutlineShoppingCart } from "react-icons/md";
import logoImg from "../../assets/FAshionSTORE.png";
import { useContext } from "react";
import { productContext } from "../../providers/productsPrivider";

export const AppHeader = () => {
  const { setCartIsOpen } = useContext(productContext);
  const pathname = window.location.pathname;
  console.log("🚀 ~ file: index.jsx:9 ~ AppHeader ~ pathname:", pathname);

  return (
    <header>
      <div>
        <img src={logoImg} alt="fashion logo" />
        {pathname === "/" || pathname.includes("product/") ? (
          <button onClick={() => setCartIsOpen(true)}>
            <MdOutlineShoppingCart size={25} />
          </button>
        ) : null}
      </div>
    </header>
  );
};
