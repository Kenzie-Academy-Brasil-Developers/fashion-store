import { ProductCard } from "./productCard/index.jsx";

export const ProductsList = () => {
  return (
    <section>
      <h2>Produtos em Destaque</h2>
      <ul>
        <ProductCard />
      </ul>
    </section>
  );
};
