import { MdOutlineShoppingCart } from "react-icons/md";
import logoImg from "../../assets/FAshionSTORE.png";
import { useContext } from "react";
import { productContext } from "../../providers/productsPrivider";

export const AppHeader = () => {
<<<<<<< HEAD
  const { setCartIsOpen } = useContext(productContext);
  const pathname = window.location.pathname;

=======
  const pathname = window.location.pathname;
>>>>>>> 9bb1a17d4828fd3dfa31f0050702e91e0eb45345
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
