import { useContext } from "react";
import { ProductCard } from "./productCard/index.jsx";
import { productContext } from "../../providers/productsProvider.jsx";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

export const ProductsList = () => {
  const { listProduct } = useContext(productContext);
  return (
    <section className={styles.section}>
      <h2 className="title-2">PRODUTOS EM DESTAQUE</h2>
      <ul className={styles.ul}>
        {listProduct?.map((product, idx) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              key={product.id}
            >
              <ProductCard product={product} />
            </motion.div>
          )
        })}
      </ul>
    </section>
  );
};
