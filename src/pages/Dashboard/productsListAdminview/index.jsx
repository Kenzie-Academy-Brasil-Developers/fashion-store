import { LiaPlusCircleSolid } from "react-icons/lia";
import { ProductCardAdminView } from "../../../components";
import { Link } from "react-router-dom";
import {
  RegisterProductModal,
  UpdateProductModal,
  ConfirmDeleteModal,
} from "../../../components";
import { useContext, useEffect } from "react";
import { productContext } from "../../../providers/productsProvider";
import { api } from "../../../services/api";

export const ProductsListAdminView = () => {
  const {
    deleteItemModal,
    createProduct,
    setCreateProduct,
    editingProduct,
    listProduct,
    setListProduct,
  } = useContext(productContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setListProduct(data);
      } catch (error) {
        console.log(error)
      }
    };
    getProducts();
  }, []);

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
          <button
            onClick={() => setCreateProduct(true)}
            className="btn newProduct"
          >
            <LiaPlusCircleSolid size={20} /> NOVO PRODUTO{" "}
          </button>
        </div>
        <ul>
          {listProduct?.map((product) => {
            return <ProductCardAdminView product={product} key={product.id} />;
          })}
        </ul>
      </section>
      {createProduct && <RegisterProductModal />}
      {editingProduct && <UpdateProductModal />}
      {deleteItemModal && <ConfirmDeleteModal />}
    </>
  );
};
