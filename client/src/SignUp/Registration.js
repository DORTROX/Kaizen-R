import axios from "axios";
import React, { Component, useState } from "react";
import "../css/Registration.css";
import {useNavigate} from 'react-router-dom';

export default function Regis() {
  const navigate = useNavigate();
  const [NuserN,setuserN] = useState([])
  const [Nemail,setemail] = useState([])
  const [Npassword,setpassword] = useState([])

   function postInfo () {
    if (validate()){

    let data = {
      name: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    axios.post("http://localhost:1000/register", JSON.stringify(data)).then((res) => {
      if (res.data === "Name already registered"){
        document.getElementById("username").value = ""
        return alert("Name already registered")
      } else {
        localStorage.setItem("OAuth", res.data);
        navigate("/")
      }
    })
  }else {
    return alert("Errors")
  }
  };

  function ValidateUsername() {
    let arr = NuserN;
    let usernamme = document.getElementById("username").value;
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernamme)) {
      if (arr.indexOf("No special Characters are allowed") !== -1) {
      } else {
        arr.push("No special Characters are allowed");
      }
    } else {
      if (!arr || arr.indexOf("No special Characters are allowed") !== -1) {
        let filtered = arr.filter(
          (val) => val !== "No special Characters are allowed"
        );
        arr = filtered;
      }
    }
    if (usernamme.length > 10) {
      if (arr.indexOf("Can't be longer than 10 ") !== -1) {
      } else {
        arr.push("Can't be longer than 10 ");
      }
    } else {
      if (!arr || arr.indexOf("Can't be longer than 10 ") !== -1) {
        let filtered = arr.filter(
          (val) => val !== "Can't be longer than 10 "
        );
        arr = filtered;
      }
    }
    setuserN(arr)
  }
  function validateEmail() {
    let arr = Nemail;
    let email = document.getElementById("email").value
    if (/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/.test(email)) {
      if (arr.indexOf("No special Characters are allowed") !== -1) {
      } else {
        arr.push("No special Characters are allowed");
      }
    } else {
      if (!arr || arr.indexOf("No special Characters are allowed") !== -1) {
        let filtered = arr.filter(
          (val) => val !== "No special Characters are allowed"
        );
        arr = filtered;
      }
    }
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      if (arr.indexOf("Invalid Email") !== -1) {
      } else {
        arr.push("Invalid Email");
      }
    } else{
      if (!arr || arr.indexOf("Invalid Email") !== -1) {
        let filtered = arr.filter(
          (val) => val !== "Invalid Email"
        );
        arr = filtered;
      }
    }
    setemail(arr)
  }

  function validatePassword() {
    let pass = document.getElementById("password").value
    let arr = Npassword;
    if (/[-!#%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(pass)) {
      if (arr.indexOf("No special Characters are allowed") !== -1) {
      } else {
        arr.push("No special Characters are allowed");
      }
  }else {
    if (!arr || arr.indexOf("No special Characters are allowed") !== -1) {
      let filtered = arr.filter(
        (val) => val !== "No special Characters are allowed"
      );
      arr = filtered;
    }
  }
  if(pass.length < 4){
    if (arr.indexOf("Minimum length is 4") !== -1) {
    } else {
      arr.push("Minimum length is 4");
    }
  }else {
    if (!arr || arr.indexOf("Minimum length is 4") !== -1) {
      let filtered = arr.filter(
        (val) => val !== "Minimum length is 4"
      );
      arr = filtered;
    }
  }
  if (pass.length >= 10){
    if (arr.indexOf("Maximum length is 10") !== -1) {
    } else {
      arr.push("Maximum length is 10");
    }
  } else {
    if (!arr || arr.indexOf("Maximum length is 10") !== -1) {
      let filtered = arr.filter(
        (val) => val !== "Maximum length is 10"
      );
      arr = filtered;
    }
  }
  setpassword(arr)
}

function validate(){
  let usernamme = document.getElementById("username").value;
  let email = document.getElementById("email").value
  let pass = document.getElementById("password").value

  if(Nemail.length + Npassword.length + NuserN.length === 0){
    if (usernamme !== "" || email !== "" || pass !== ""){
      return true;
    } else{
      return false;
    }
  } else{
    return false;
  }
}
    return (
      <div className="Regis">
        <div className="loginButton1">
          <div id="userN">
            <input
              type="text"
              className="inputFields"
              id="username"
              name="name"
              placeholder="Username"
              onChange={() => ValidateUsername()}
              required
            />
            <p id="bottom">{NuserN[0]}</p>
          </div>
          <div id="emailN">
            <input type="email" name="" id="email" placeholder="Email" onChange={()=> {validateEmail()}} />
            <p id="bottoms">{Nemail[0]}</p>
          </div>
          <div id="passN">
            <input
              type="password"
              className="inputFields"
              id="password"
              name="password"
              placeholder="Password"
              onChange={() => validatePassword()}
              required
            />
            <p id="bottoms">{Npassword[0]}</p>
          </div>
        </div>
        <p id="submit" onClick={postInfo}>
          Create Account
        </p>
      </div>
    );
  }
