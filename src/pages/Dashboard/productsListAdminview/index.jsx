import { LiaPlusCircleSolid } from "react-icons/lia";
import { ProductCardAdminView } from "../../../components";
import { Link } from "react-router-dom";
import { RegisterProductModal, UpdateProductModal } from "../../../components";


export const ProductsListAdminView = () => {
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
          <button>
            <LiaPlusCircleSolid size={20} /> Novo produto{" "}
          </button>
        </div>
        <ul>
          <ProductCardAdminView />
        </ul>
      </section>
      <RegisterProductModal />
      <UpdateProductModal />
    </>
  );
};
