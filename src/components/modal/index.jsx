import { useContext } from "react";
import { RegisterProductForm, UpdateProductForm } from "../forms";
import { ProductCardModal } from "../productList/productCard";
import { MdClose } from "react-icons/md";
import { productContext } from "../../providers/productsProvider";
import styles from "./index.module.scss";

export const CartModal = () => {
  const { setCartIsOpen, listCart, cartTotalValue } =
    useContext(productContext);
  return (
    <div className={styles.cartModal__overlay}>
      <div className={styles.cartModal__container} role="dialog">
        <MdClose className={styles.cartModal__closeBtn} onClick={() => setCartIsOpen(null)} size={32} />
        <h2>Carrinho</h2>
        <ul>
          {listCart?.map((listItem) => (
            <ProductCardModal product={listItem} key={listItem.id} />
          ))}
        </ul>
        <p className={styles.totalValue__display}>{`Total: ${cartTotalValue.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`}</p>
      </div>
    </div>
  );
};

export const RegisterProductModal = () => {
  const { setCreateProduct } = useContext(productContext);
  return (
    <div className="overlay">
      <div className="modalContainer" role="dialog">
        <MdClose onClick={() => setCreateProduct(null)} size={20} />
        <h2 className="modal-title">NOVO PRODUTO</h2>
        <RegisterProductForm />
      </div>
    </div>
  );
};

export const UpdateProductModal = () => {
  const { setEditingProduct } = useContext(productContext);
  return (
    <div className="overlay">
      <div className="modalContainer" role="dialog">
        <MdClose onClick={() => setEditingProduct(null)} size={20} />
        <h2 className="modal-title">EDITAR PRODUTO</h2>
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
