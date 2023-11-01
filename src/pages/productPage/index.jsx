import { MdOutlineAddShoppingCart } from "react-icons/md";
import { ProductsList, CartModal } from "../../components";
import { useContext } from "react";
import { productContext } from "../../providers/productsProvider";

export const ProductPage = () => {
  const { cartIsOpen } = useContext(productContext);
  return (
    <>
      {cartIsOpen && <CartModal />}
      <h1>{`Home > ${"ProductName"}`}</h1>
      <section>
        <img src="" alt="Product image" />
        <div>
          <h2>ProductName</h2>
          <p>ProductValue</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            saepe soluta quas laudantium nobis id qui dolorem labore libero vel
            fugiat praesentium. Saepe omnis at modi reiciendis et autem
            architecto?
          </p>
          <button>
            <MdOutlineAddShoppingCart size={20} /> Adicionar ao carrinho
          </button>
        </div>
      </section>
      <section>
        <h2>Veja também</h2>
        <ul>{/* lista de produtos */}</ul>
      </section>
    </>
  );
};
