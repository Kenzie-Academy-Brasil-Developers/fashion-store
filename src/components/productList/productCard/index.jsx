<<<<<<< HEAD
import { MdOutlineAddShoppingCart, MdRemove } from "react-icons/md";
=======
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
>>>>>>> 0df038a6897f2134dc632f92ba74e40946703415

export const ProductCard = ({product}) => {
  return (
    <li>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <div>
        <button>
          <MdOutlineAddShoppingCart size={20} />
        </button>
        <Link to={`/product/${product.id}`}>
          Saiba Mais!
        </Link>
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
