import React from "react";
import "../css/Login.css";
const login = () => {
  return (
    <div className="Login">
      <p>Login to access your account</p>
      <div className="loginButton">
        <input type="text" name="" id="" placeholder="username" />
        <input type="password" name="" id="" placeholder="password" />
      </div>
    </div>
  );
};

export default login;
