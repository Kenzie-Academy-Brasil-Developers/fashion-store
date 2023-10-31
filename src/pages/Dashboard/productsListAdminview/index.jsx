import { LiaPlusCircleSolid } from "react-icons/lia";
import { ProductCardAdminView } from "../../../components";
import { Link } from "react-router-dom";
import { RegisterProductModal, UpdateProductModal, ConfirmDeleteModal } from "../../../components";
import { useContext } from "react";
import { productContext } from "../../../providers/productsProvider";

export const ProductsListAdminView = () => {
  const {
    deleteItemModal,
    createProduct,
    setCreateProduct,
    editingProduct,
  } = useContext(productContext);
  return (
    <>
      <nav>
        <ul>
          <Link to={"/dashboard"}>
            <li>Início</li>
          </Link>
          <Link to={"/dashboard/products"}>
            <li>Produtos</li>
          </Link>
        </ul>
      </nav>
      <section>
        <div>
          <h1>Produtos</h1>
          <button onClick={() => setCreateProduct(true)}>
            <LiaPlusCircleSolid size={20} /> Novo produto{" "}
          </button>
        </div>
        <ul>
          <ProductCardAdminView />
        </ul>
      </section>
      {createProduct && <RegisterProductModal />}
      {editingProduct && <UpdateProductModal />}
      {deleteItemModal && <ConfirmDeleteModal/>}
    </>
  );
};
