import bannerImg from "../../assets/banner.png";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

const BannerSection = () => {
  return (
    <section className={styles.section}>
      <img src={bannerImg} alt="banner image" />
      <div className={styles.banner__buttonContainer}>
        <h1 className="title-1">KENZIE FASHION STORE</h1>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="btn checkOut"
        >
          CONFIRA AS OFERTAS
        </motion.button>
      </div>
    </section>
  );
};

export { BannerSection };
