import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [toggleAuth, setIsToggleAuth] = useState(false);
  const [showToken, setShowToken] = useState("");
  const checkLogin = () => {
    let _data = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())

      .then((json) => {
        console.log(json);
        if (json.token) {
          setIsAuth(true);
          setIsToggleAuth(true);
          setShowToken(json.token);
        } else {
          setIsAuth(false);
          setIsToggleAuth(false);
          alert("Login Not Successful");
        }
      })

      .catch((err) => {
        setIsToggleAuth(false);
        console.log(err);
      });
  };
  const checkLogout = () => {
    setIsAuth(false);
    setShowToken("");
    setIsToggleAuth(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        toggleAuth,
        setIsToggleAuth,
        checkLogin,
        showToken,
        checkLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
