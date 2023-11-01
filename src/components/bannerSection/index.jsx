import bannerImg from "../../assets/banner.png";

const BannerSection = () => {
  return (
    <section>
      <img src={bannerImg} alt="banner image" />
      <div>
        <h1>Kenzie Fashion Store</h1>
        <button className="btn checkOut">CONFIRA AS OFERTAS</button>
      </div>
    </section>
  );
};

export { BannerSection };
