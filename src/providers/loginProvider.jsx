import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const loginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();

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

  const createUser = async (formData) => {
    try {
      await api.post("/users", formData);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  
  
  return (
    <requestsContext.Provider
      value={{
        getAutoLogin,
        login,
        logout,
        createUser
      }}
    >
      {children}
    </requestsContext.Provider>
  );
};
