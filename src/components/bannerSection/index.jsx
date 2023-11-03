import bannerImg from "../../assets/banner.png";
import styles from "./style.module.scss";

const BannerSection = () => {
  return (
    <section className={styles.section}>
      <img src={bannerImg} alt="banner image" />
      <div>
        <h1 className="title-1">KENZIE FASHION STORE</h1>
        <button className="btn checkOut">CONFIRA AS OFERTAS</button>
      </div>
    </section>
  );
};

export { BannerSection };
