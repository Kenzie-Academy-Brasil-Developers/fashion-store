import { useContext } from "react";
import { ProductCard } from "./productCard/index.jsx";
import { requestsContext } from "../../providers/requestProvider";

export const ProductsList = () => {
  const { listProduct } = useContext(requestsContext);
  return (
    <section>
      <h2>Produtos em Destaque</h2>
      <ul>
        {listProduct?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ul>
    </section>
  );
};
