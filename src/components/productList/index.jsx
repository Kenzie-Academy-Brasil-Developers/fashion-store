import { useContext } from "react";
import { ProductCard } from "./productCard/index.jsx";
import { productContext } from "../../providers/productsProvider.jsx";

export const ProductsList = () => {
  const { listProduct } = useContext(productContext);
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
