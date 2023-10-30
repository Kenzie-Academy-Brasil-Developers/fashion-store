import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const productContext = createContext({})

export const ProductProvider = ({ children }) => {
  const [listProduct, setListProduct] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [editingItem, setEditingItem] = useState({});

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

  const updateItem = async (formData, id) => {
    try {
      const token = localStorage.getItem("@FSToken").accessToken;
      const { data } = await api.put(`/products/${id}`, formData, {
        headers: {
          Authorization: `Barear ${token}`,
        },
      });
      const newListProduct = listProduct.map((product) => {
        if (product.id === editingItem.id) {
          return data;
        } else {
          return product;
        }
      });
      setListProduct(newListProduct);
      setEditingItem({});
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

  return (
    <productContext.Provider value={{
      listProduct,
      currentItem,
      setCurrentItem,
      editingItem,
      setEditingItem,
      getCurrentItem,
      createItem,
      updateItem,
      deleteItem
    }}>
      {children}
    </productContext.Provider>
  )
}