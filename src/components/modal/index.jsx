import { useContext } from "react";
import { RegisterProductForm, UpdateProductForm } from "../forms";
import { ProductCardModal } from "../productList/productCard";
import { MdClose } from "react-icons/md";
import { loginContext } from "../../providers/loginProvider";
import { productContext } from "../../providers/productsProvider";

export const CartModal = () => {
  const { setCartIsOpen } = useContext(loginContext);
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
  const { setCreateProduct } = useContext(loginContext);
  return (
    <div className="overlay">
      <div className="modalContainer" role="dialog">
        <MdClose onClick={() => setCreateProduct(null)} size={20} />
        <h2>Novo Produto</h2>
        <RegisterProductForm />
      </div>
    </div>
  );
};

export const UpdateProductModal = () => {
  const { setEditingProduct } = useContext(loginContext);
  return (
    <div className="overlay">
      <div className="modalContainer" role="dialog">
        <MdClose onClick={() => setEditingProduct(null)} size={20} />
        <h2>Editar Produto</h2>
        <UpdateProductForm />
      </div>
    </div>
  );
};

export const ConfirmDeleteModal = () => {
  const { deleteItem, deleteItemModal, setDeleteItemModal } =
    useContext(productContext);
  return (
    <div className="overlay">
      <div className="modalContainer" role="dialog">
        <div>
          <h2>Confirmar exclusão</h2>
          <MdClose size={20} onClick={() => setDeleteItemModal(null)} />
        </div>
        <h2>Tem certeza que deseja fazer isso?</h2>
        <p>Esse processo não pode ser desfeito</p>
      </div>
      <button onClick={() => setDeleteItemModal(null)}>Cancelar</button>
      <button onClick={() => deleteItem(deleteItemModal.id)}>
        Confirmar exclusão
      </button>
    </div>
  );
};
