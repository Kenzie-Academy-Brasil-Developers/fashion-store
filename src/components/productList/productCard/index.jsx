import { MdOutlineAddShoppingCart, MdRemove } from "react-icons/md";

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

export const ProductCardModal = () => {
  return (
    <li>
      <img src="" alt="product image" />
      <div>
        <h2>Product title</h2>
        <p>Product value</p>
      </div>
      <button>
        <MdRemove size={20} />
      </button>
    </li>
  );
};
