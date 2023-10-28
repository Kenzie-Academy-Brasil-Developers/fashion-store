import { MdOutlineAddShoppingCart } from "react-icons/md";

export const ProductCard = () => {
  return (
    <li>
      <img src="" alt="product image" />
      <h2>Product title</h2>
      <p>Product value</p>
      <div>
        <button>
          <MdOutlineAddShoppingCart size={20} />
        </button>
        <button>Saiba mais</button>
      </div>
    </li>
  );
};
