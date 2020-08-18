import React, { useState } from "react";
import * as API from "../api/api";

export const AuthContext = React.createContext({
  token: null,
  error: null,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const login = (password) => {
    API.login(password)
      .then((resp) => {
        setToken(resp);
        setError(null);
        localStorage.setItem("token", resp);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{ token: token, error: error, login: login, logout: logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
