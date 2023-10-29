
import {
  MdOutlineAddShoppingCart,
  MdRemove,
  MdOutlineModeEditOutline,
  MdOutlineDeleteOutline
} from "react-icons/md";
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


export const ProductCardAdminView = () => {
  return (
    <li>
      <img src="" alt="product image" />
      <div>
        <h2>ProductName</h2>
        <p>ProductValue</p>
      </div>
      <div>
        <button><MdOutlineModeEditOutline size={20}/></button>
        <button><MdOutlineDeleteOutline size={20}/></button>
      </div>
    </li>
  )
}