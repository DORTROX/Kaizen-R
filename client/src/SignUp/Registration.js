import axios from "axios";
import { url } from "image-base64";
import React, { Component } from "react";
import "../css/Registration.css";
export class Regis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUri: "https://i.ibb.co/M9DcVdP/82zytozm4ge81.jpg",
    };
  }
  
  postInfo = () => {
    console.log("hello")
    let data = { name : document.getElementById("name").value, email :  document.getElementById("email").value, password: document.getElementById("password").value} 
    let form = new FormData();
    form.append("image", document.getElementById("file").files[0])
    axios
    .post(
      "https://api.imgbb.com/1/upload?expiration=600&key=7bd49ee45c0b60ced25adbda95e5baf5&image=", form)
    .then((response) => {
      let sata = {d1:data, imageUri : response.data.data.image.url}
      this.setState({imageUri: response.data.data.image.url})
      axios.post("http://localhost:8000/Imaging", JSON.stringify(sata))
    })
    .catch((error) => {
      console.log("error", error);
    }); 
  }

  render() {
    return (
      <div className="Regis">
        <div className="loginButton1">
          <div className="idk">
            <form>
            <input type="text" name="" id="name" placeholder="username" />
            <input type="email" name="" id="email" placeholder="Email" />
            <input type="password" name="" id="password" placeholder="password" />
            <input id="file" type="file" name=""/>
            <p  id="submit" onClick={this.postInfo}>SUBMIT</p>
            </form>
            <div className="image">
              <p>Preview Image</p>
              <img id="prevImg" src={this.state.imgUri} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Regis;
