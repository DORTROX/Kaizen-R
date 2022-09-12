import React, { useState } from "react";
import Login from "./login";
import Registration from "./Registration";
import "../css/SignAuth.css";

function SignAuth() {
  const [WhichPage, setWhichPage] = useState("Register");
  function WhichPaging(page) {
    setWhichPage(page);
  }
  return (
    <div className="SignAuth">
      <div>
        <h1>KAIZEN</h1>
      </div>
      <div className="SignAuthButtons">
        <p onClick={() => setWhichPage("Login")}>Login</p>
        <p onClick={() => setWhichPage("Register")}>Register</p>
      </div>

      {(() => {
        if (WhichPage === "Login") {
          return <Login />;
        } else {
          return <Registration />;
        }
      })()}
    </div>
  );
}

export default SignAuth;
