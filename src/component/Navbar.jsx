import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import LoginStatus from "./LoginStatus";

function Navbar() {
  const { isAuth, checkLogin, checkLogout } = useContext(AuthContext);
  console.log(isAuth);
  return (
    <div>
      <button
        onClick={() => {
          if (isAuth) checkLogout();
          else checkLogin();
        }}
      >
        {isAuth ? "Logout" : "Login"}
      </button>

      {isAuth && <LoginStatus />}
    </div>
  );
}

export default Navbar;
