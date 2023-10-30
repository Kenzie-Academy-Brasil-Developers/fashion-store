import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const productContext = createContext({})

export const ProductProvider = ({ children }) => {
  const [listProduct, setListProduct] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [editingProduct, setEditingProduct] = useState(null);
  const [createProduct, setCreateProduct] = useState(null)
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [listCart, setListCart] = useState(
    localStorage.getItem("@FSCart") ? JSON.parse(localStorage.getItem("@FSCart")): [[]]
  )

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

  useEffect(() => {
    localStorage.setItem("@FSCart", JSON.stringify(listCart))
  }, [listCart])

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
      const { data } = await api.put(`/products/${editingProduct.id}`, formData, {
        headers: {
          Authorization: `Barear ${token}`,
        },
      });
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
    const newList = listCart.map((productList) => {
      if(product.id === productList.id){
        productList.count += 1
        return productList
      }else{
        const newProduct = {...product,
          count: 1
        }
        return newProduct
      }
    })
    setListCart(newList)
  }

  const removeItemCart = (product) => {
    const newList = listCart.map((item) => {
      if (item.id != product.id) {
        return item
      }
    })
    setListCart(newList)
  }

  return (
    <productContext.Provider value={{
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
      removeItemCart
    }}>
      {children}
    </productContext.Provider>
  )
}