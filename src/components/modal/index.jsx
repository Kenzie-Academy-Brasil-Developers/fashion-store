import { RegisterProductForm, UpdateProductForm } from "../forms";
import { ProductCardModal } from "../productList/productCard";
import { MdClose } from "react-icons/md";

export const CartModal = () => {
  return (
    <div className="overlay">
      <div className="modalContainer" role="dialog">
        <MdClose size={20} />
        <h2>Carrinho</h2>
        <ul>
          <ProductCardModal />
        </ul>
      </div>
      <p>Total R$</p>
    </div>
  );
};

export const RegisterProductModal = () => {
  return (
    <div className="overlay">
      <div className="modalContainer">
        <MdClose size={20} />
        <h2>Novo Produto</h2>
        <RegisterProductForm />
      </div>
    </div>
  );
};

export const UpdateProductModal = () => {
  return (
    <div className="overlay">
      <div className="modalContainer">
        <MdClose size={20} />
        <h2>Editar Produto</h2>
        <UpdateProductForm />
      </div>
    </div>
  );
};
