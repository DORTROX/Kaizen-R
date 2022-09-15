import React, { Component} from "react";
import axios from 'axios'
import "../css/Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userN: [],
      password: [],
    };
  }

  postInfo = () => {
    if (this.validate()){
    let data = {
      name: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    axios.post("http://localhost:1000/login", JSON.stringify(data)).then((res) => {
      if (res.data === "Name already registered"){
        document.getElementById("username").value = ""
        return alert("Name already registered")
      }
    })
  }else {
    return alert("Errors")
  }
  };

  ValidateUsername() {
    let arr = this.state.userN;
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
    this.setState({ userN: arr });
  }
  validatePassword() {
    let pass = document.getElementById("password").value
    let arr = this.state.password;
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
  this.setState({password: arr})
}

validate(){
  let usernamme = document.getElementById("username").value;
  let pass = document.getElementById("password").value

  if(this.state.password.length + this.state.userN.length === 0){
    if (usernamme !== "" || pass !== ""){
      return true;
    } else{
      return false;
    }
  } else{
    return false;
  }
}
  render() {
  return (
    <div className="Login">
      <p>Login to access your account</p>
      <div className="loginButton">
        <input type="text" name="" id="username" placeholder="username" onChange={() => this.ValidateUsername}/>
        <input type="password" name="" id="password" placeholder="password" onChange={() => this.validatePassword} />
      </div>
      <p id="submit" onClick={this.postInfo}>
          Login
        </p>
    </div>
  );
  }
};

export default Login;
