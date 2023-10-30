import { useContext } from "react";
import { RegisterProductForm, UpdateProductForm } from "../forms";
import { ProductCardModal } from "../productList/productCard";
import { MdClose } from "react-icons/md";
import { loginContext } from "../../providers/loginProvider";

export const CartModal = () => {
  const {setCartIsOpen} = useContext(loginContext)
  return (
    <div className="overlay">
      <div className="modalContainer" role="dialog">
        <MdClose onClick={() => setCartIsOpen(false)} size={20} />
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
  const {setCreateProduct} = useContext(loginContext)
  return (
    <div className="overlay">
      <div className="modalContainer">
        <MdClose onClick={() => setCreateProduct(null)} size={20} />
        <h2>Novo Produto</h2>
        <RegisterProductForm />
      </div>
    </div>
  );
};

export const UpdateProductModal = () => {
  const {setEditingProduct} = useContext(loginContext)
  return (
    <div className="overlay">
      <div className="modalContainer">
        <MdClose onClick={() => setEditingProduct(null)} size={20} />
        <h2>Editar Produto</h2>
        <UpdateProductForm />
      </div>
    </div>
  );
};
