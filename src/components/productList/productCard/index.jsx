import { useContext } from "react";
import {
  MdOutlineAddShoppingCart,
  MdRemove,
  MdOutlineModeEditOutline,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { productContext } from "../../../providers/productsProvider";

export const ProductCard = ({ product }) => {
  const { addItemCart } = useContext(productContext);
  return (
    <li>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <div>
        <button
          onClick={() => {
            addItemCart(product);
          }}
        >
          <MdOutlineAddShoppingCart size={20} />
        </button>
        <Link to={`/product/${product.id}`}>Saiba Mais!</Link>
      </div>
    </li>
  );
};

export const ProductCardModal = (product) => {
  const { removeItemCart } = useContext(productContext);

  return (
    <li>
      <img src={product.image} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </div>
      {product.count > 1 && <small>{`x${product.count}`}</small>}
      <button onClick={() => removeItemCart(product)}>
        <MdRemove size={20} />
      </button>
    </li>
  );
};

export const ProductCardAdminView = (product) => {
  const { setEditingProduct, setDeleteItemModal } =
    useContext(productContext);
  return (
    <li>
      <img src={product.image} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </div>
      <div>
        <button>
          <MdOutlineModeEditOutline
            onClick={() => {
              setEditingProduct(product);
            }}
            size={20}
          />
        </button>
        <button>
          <MdOutlineDeleteOutline
            onClick={() => setDeleteItemModal(product)}
            size={20}
          />
        </button>
      </div>
    </li>
  );
};
