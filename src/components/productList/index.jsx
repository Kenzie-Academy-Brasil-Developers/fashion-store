import { useContext } from "react";
import { ProductCard } from "./productCard/index.jsx";
import { productContext } from "../../providers/productsProvider.jsx";
import styles from "./style.module.scss";

export const ProductsList = () => {
  const { listProduct } = useContext(productContext);
  return (
    <section className={styles.section}>
      <h2 className="title-2">PRODUTOS EM DESTAQUE</h2>
      <ul className={styles.ul}>
        {listProduct?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ul>
    </section>
  );
};
