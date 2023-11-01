import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const productContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [listProduct, setListProduct] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [editingProduct, setEditingProduct] = useState(null);
  const [createProduct, setCreateProduct] = useState(null);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [deleteItemModal, setDeleteItemModal] = useState(null);

  const [listCart, setListCart] = useState(
    localStorage.getItem("@FSCart")
      ? JSON.parse(localStorage.getItem("@FSCart"))
      : []
  );

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setListProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const totalCartValue = listCart?.reduce(
    (acc, cur) => acc + cur.price * cur.count,
    0
  );

  const [cartCounter, setCartCounter] = useState(0);
  useEffect(() => {
    const cartItensCount = listCart?.reduce(
      (acc, cur ) => acc + cur.count * 1,
      0
    );
    setCartCounter(cartItensCount);
  }, [listCart]);
  
  const getCurrentItem = async (id) => {
    try {
      const { data } = await api.get(`/products/${id}`);
      setCurrentItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createItem = async (formData) => {
    try {
      const token = localStorage.getItem("@FSToken").accessToken;
      const { data } = await api.post("/products", formData, {
        headers: {
          Authorization: `Barear ${token}`,
        },
      });
      setListProduct(...listProduct, data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateItem = async (formData) => {
    try {
      const token = localStorage.getItem("@FSToken").accessToken;
      const { data } = await api.put(
        `/products/${editingProduct.id}`,
        formData,
        {
          headers: {
            Authorization: `Barear ${token}`,
          },
        }
      );
      const newListProduct = listProduct.map((product) => {
        if (product.id === editingProduct.id) {
          return data;
        } else {
          return product;
        }
      });
      setListProduct(newListProduct);
      setEditingProduct({});
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const token = localStorage.getItem("FSToken").accessToken;
      api.delete(`/products/${id}`, {
        headers: {
          Authorization: `Barear ${token}`,
        },
      });
      const newListItem = listProduct.map((product) => {
        if (product.id != id) {
          return product;
        }
      });
      setListProduct(newListItem);
    } catch (error) {
      console.log(error);
    }
  };

  const addItemCart = (product) => {
    const verifyItem = listCart.find((cartItem) => cartItem.id === product.id);
    const list = listCart;
    if (verifyItem) {
      verifyItem.count += 1;
    } else {
      list.push({ ...product, count: 1 });
    }
    setListCart(list);
    localStorage.setItem("@FSCart", JSON.stringify(listCart));
  };

  const removeItemCart = (product) => {
    const newList = listCart.map((item) => {
      if (item.id != product.id) {
        return item;
      }
    });
    setListCart(newList);
  };

  return (
    <productContext.Provider
      value={{
        listCart,
        listProduct,
        currentItem,
        setCurrentItem,
        editingProduct,
        setEditingProduct,
        getCurrentItem,
        createItem,
        updateItem,
        deleteItem,
        setCartIsOpen,
        setCreateProduct,
        createProduct,
        cartIsOpen,
        addItemCart,
        removeItemCart,
        deleteItemModal,
        setDeleteItemModal,
        totalCartValue,
        cartCounter,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
