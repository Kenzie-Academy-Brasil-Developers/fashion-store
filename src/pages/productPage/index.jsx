import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CartModal, ProductCard } from "../../components";
import { useContext, useEffect, useState } from "react";
import { productContext } from "../../providers/productsProvider";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export const ProductPage = () => {
  const { cartIsOpen, listProduct } = useContext(productContext);
  const [currProduct, setCurrProduct] = useState({});
  const [hightLights, setHighLights] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const { data } = await api.get(`/products/${id}`);
        setCurrProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadProduct();
  }, [id]);

  useEffect(() => {
    const filteredList = listProduct?.filter(
      (product) => product.id !== Number(id)
    );
    setHighLights(filteredList);
  }, [id, listProduct]);

  return (
    <>
      {cartIsOpen && <CartModal />}
      <h1>{`Home > ${currProduct.name}`}</h1>
      <section>
        <img src={currProduct.image} alt="Product image" />
        <div>
          <h2>{currProduct.name}</h2>
          <p>
            {currProduct.price?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p>{currProduct.description}</p>
          <button className="btn addToCart">
            <MdOutlineAddShoppingCart size={20} />
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </section>
      <section>
        <h2>Veja também</h2>
        <ul>
          {hightLights?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
      </section>
    </>
  );
};
