import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function LoginStatus() {
  const { toggleAuth, showToken } = useContext(AuthContext);
  return (
    <div>
      <h2>
        {toggleAuth === false ? "Login is Unsuccessful" : "Login Successful"}
      </h2>
      <div>Login Token = {showToken}</div>
    </div>
  );
}

export default LoginStatus;
