import { BannerSection, ProductsList, RegisterProductModal, UpdateProductModal } from "../../components";

export const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <ProductsList />
      <RegisterProductModal/>
      <UpdateProductModal/>
    </div>
  );
};

