import axios from "axios";
import React, { Component } from "react";
import "../css/Registration.css";

export class Regis extends Component {
  state = {
    imgUrl: null,
    img: null,
  };
  async geturi(e) {
    let blob = URL.createObjectURL(e.target.files[0]);
    axios.post("http://localhost:8000/Imaging", blob)

    // blobToBase64(blob).then(async (res) => {
    //   this.setState({
    //     imgUrl: res,
    //   });
    // });

    // function blobToBase64(blob) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(blob);
    //   return new Promise((resolve) => {
    //     reader.onloadend = () => {
    //       resolve(reader.result);
    //     };
    //   });
    // }
  }

  render() {
    return (
      <div className="Regis">
        <div className="loginButton">
          <div className="idk">
            <input type="text" name="" id="" placeholder="username" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="password" />
            <input
              id="file"
              type="file"
              name=""
              onChange={(e) => this.geturi(e)}
            />
            {/* <p onClick={() => geturi()}>Hi</p> */}
            <img src={this.state.imgUrl} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Regis;
