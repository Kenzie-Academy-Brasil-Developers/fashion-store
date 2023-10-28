import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const requestsContext = createContext({});
export const useRequestContext = useContext(requestsContext);
const navigate = useNavigate();

export const RequestProvider = ({ children }) => {
  const [listProduct, setListProduct] = useState([]);
  const [currentItem, setCurrentItem] = useState({})

  useEffect(async () => {
    try {
      const { data } = await api.get("/products");
      setListProduct(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getAutoLogin = async () => {
    const user = localStorage.getItem("@FSToken");
    if (user) {
      try {
        const { data } = await api.get(`/users/${user.user.id}`, {
          headers: {
            Authorization: `Barear ${user.accessToken}`,
          },
        });
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@FSToken");
      }
    }
  };

  const login = async (formData) => {
    try {
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@FSToken", data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("@FSToken");
    navigate("/");
  };

  const getCurrentItem = async (id) => {
    try {
        const{ data } = await api.get(`/products/${id}`)
        setCurrentItem(data)
        navigate("/item")
    } catch (error) {
        console.log(error)
    }
  }

  const createUser = async (formData) => {
    try {
        await api.post("/users", formData)
        navigate("/login")
    } catch (error) {
        console.log(error)
    }
  }

  const createItem = async (formData) => {
    try {
      const token = localStorage.getItem("@FSToken").accessToken
      const { data } = await api.post("/products", formData , {
        headers: {
          Authorization: `Barear ${token}`
        }
      })
      setListProduct(...listProduct, data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <requestsContext.Provider value={{ listProduct, getAutoLogin, login, logout, getCurrentItem, currentItem, createUser }}>
      {children}
    </requestsContext.Provider>
  );
};
