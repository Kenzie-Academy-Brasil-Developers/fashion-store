import { LiaPlusCircleSolid } from "react-icons/lia";
import { ProductCardAdminView } from "../../../components";

export const ProductsListAdminView = () => {
  return (
    <>
      <nav>
        <ul>
          <li>Início</li>
          <li>Produtos</li>
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
    </>
  );
};
