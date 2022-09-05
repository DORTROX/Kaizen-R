import axios from "axios";
import React, { Component } from "react";
import "../css/Registration.css";

export class Regis extends Component {
  state = {
    imgUrl: null,
    img: null,
  };
  async geturi(e) {
    let blob = e.target.files[0];
    blobToBase64(blob).then(async (res) => {
      this.setState({
        imgUrl: res,
      });

      await axios
        .post(
          "https://api.imgbb.com/1/upload?expiration=600&key=de96ee1ca130062862c4b484f650f647", {key : "de96ee1ca130062862c4b484f650f647", image: res}
        )
        .then((response) => {
          console.log("response", response);
          console.log("response URL", response.data.data.image.url);
          console.log("success");
        })
        .catch((error) => {
          console.log("error", error);
          alert("try agains");
        });
    });

    function blobToBase64(blob) {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    }
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
