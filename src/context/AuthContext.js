import React, { useState } from "react";
import * as API from "../api/api";

export const AuthContext = React.createContext({
  token: null,
  error: null,
  login: () => {},
  logout: () => {},
  setToken: () => {},
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const login = (password, redirect) => {
    API.login(password)
      .then((resp) => {
        setToken(resp);
        setError(null);
        redirect(resp);
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
      value={{
        token: token,
        error: error,
        login: login,
        logout: logout,
        setToken: setToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
