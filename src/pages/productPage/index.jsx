import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CartModal, ProductCard } from "../../components";
import { useContext, useEffect, useState } from "react";
import { productContext } from "../../providers/productsProvider";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import styles from "./style.module.scss";

export const ProductPage = () => {
  const { cartIsOpen, listProduct, addItemCart } = useContext(productContext);
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
      <div className={styles.navigationDiv}>
        <Link to={"/"}>
          <h1 className="navigation-title sm">{"HOME >"}</h1>
        </Link>
        <span>{currProduct.name}</span>
      </div>
      <section className={styles.productSection}>
        <img src={currProduct.image} alt="Product image" />
        <div className={styles.infosDiv}>
          <h2 className="productCard-title">{currProduct.name}</h2>
          <p className="price">
            {Number(currProduct.price)?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p className="paragraph">{currProduct.description}</p>
          <button className="btn addToCart" onClick={() => addItemCart(currProduct)}>
            <MdOutlineAddShoppingCart size={20} />
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </section>
      <section className={styles.productsSection}>
        <h2 className="title-2">VEJA TAMBÉM</h2>
        <ul>
          {hightLights?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
      </section>
    </>
  );
};
