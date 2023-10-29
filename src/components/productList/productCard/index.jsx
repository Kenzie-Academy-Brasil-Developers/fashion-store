import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

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
