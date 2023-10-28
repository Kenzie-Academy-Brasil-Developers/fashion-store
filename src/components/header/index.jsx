import { MdOutlineShoppingCart } from "react-icons/md";
import logoImg from "../../assets/FAshionSTORE.png";

export const AppHeader = () => {
  return (
    <header>
      <div>
        <img src={logoImg} alt="fashion logo" />
        <button>
          <MdOutlineShoppingCart size={25} />
        </button>
      </div>
    </header>
  );
};
