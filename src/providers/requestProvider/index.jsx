import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const requestsContext = createContext({});
export const useRequestContext = useContext(requestsContext);
const navigate = useNavigate();

export const RequestProvider = ({ children }) => {
  const [listProduct, setListProduct] = useState([]);

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
            Authorization: `Bearer ${user.accessToken}`,
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

  return (
    <requestsContext.Provider value={{ listProduct, getAutoLogin, login }}>
      {children}
    </requestsContext.Provider>
  );
};
