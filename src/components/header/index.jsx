import { MdOutlineShoppingCart } from "react-icons/md";
import logoImg from "../../assets/FAshionSTORE.png";

export const AppHeader = () => {
  const pathname = window.location.pathname
  console.dir(pathname)
  return (
    <header>
      <div>
        <img src={logoImg} alt="fashion logo" />
        {pathname === "/" && (
          <button>
            <MdOutlineShoppingCart size={25} />
          </button>
        )}
        {pathname === `/product/:id` && (
          <button>
            <MdOutlineShoppingCart size={25} />
          </button>
        )}
      </div>
    </header>
  );
};
