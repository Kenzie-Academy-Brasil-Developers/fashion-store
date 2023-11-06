import { useContext, useEffect } from "react";
import { RegisterProductForm, UpdateProductForm } from "../forms";
import { ProductCardModal } from "../productList/productCard";
import { MdClose } from "react-icons/md";
import { productContext } from "../../providers/productsProvider";
import styles from "./index.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export const CartModal = () => {
  const { setCartIsOpen, listCart, cartTotalValue, cartIsOpen } =
    useContext(productContext);

  return (
    <div className={styles.modal__overlay}>
      <AnimatePresence>
        {cartIsOpen && (
          <motion.div
            key={"modal"}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            // transition={{ duration: 0.2 }}
            className={styles.cartModal__container}
            role="dialog"
          >
            <MdClose
              className={styles.cartModal__closeBtn}
              onClick={() => setCartIsOpen(null)}
              size={32}
            />
            <h2>CARRINHO</h2>
            <ul>
              {listCart?.map((listItem) => (
                <ProductCardModal product={listItem} key={listItem.id} />
              ))}
            </ul>
            <p
              className={styles.totalValue__display}
            >{`Total: ${cartTotalValue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}`}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const RegisterProductModal = () => {
  const { setCreateProduct } = useContext(productContext);
  return (
    <div className={`${styles.modal__overlay} ${styles.productModal}`}>
      <div className={styles.productModal__container} role="dialog">
        <MdClose
          onClick={() => setCreateProduct(null)}
          size={32}
          className={styles.productModal__closeBtn}
        />
        <h2 className="modal-title">NOVO PRODUTO</h2>
        <RegisterProductForm />
      </div>
    </div>
  );
};

export const UpdateProductModal = () => {
  const { setEditingProduct } = useContext(productContext);
  return (
    <div className={`${styles.modal__overlay} ${styles.productModal}`}>
      <div className={styles.productModal__container} role="dialog">
        <MdClose
          onClick={() => setEditingProduct(null)}
          size={32}
          className={styles.productModal__closeBtn}
        />
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
    <div className={`${styles.modal__overlay} ${styles.productModal}`}>
      <div className={styles.deleteModal__container} role="dialog">
        <div>
          <h2 className="title-2">Confirmar exclusão</h2>
        </div>
        <h2 className="modal-">Tem certeza que deseja fazer isso?</h2>
        <p className="paragraph">Esse processo não pode ser desfeito</p>
        <div className={styles.deleteBtn__container}>
          <button
            className="btn btn-cancel"
            onClick={() => setDeleteItemModal(null)}
          >
            Cancelar
          </button>
          <button
            className="btn btn-confirm"
            onClick={() => deleteItem(deleteItemModal.id)}
          >
            Confirmar exclusão
          </button>
        </div>
      </div>
    </div>
  );
};
