import { useContext } from "react";
import { ProductCard } from "./productCard/index.jsx";
import { productContext } from "../../providers/productsProvider.jsx";

export const ProductsList = () => {
  const { listProduct } = useContext(productContext);
  return (
    <section>
      <h2 className="title-2">PRODUTOS EM DESTAQUE</h2>
      <ul>
        {listProduct?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ul>
    </section>
  );
};
