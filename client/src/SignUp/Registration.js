import React, { Component } from 'react'
import '../css/Registration.css'
import imageBase64 from 'image-base64';


export class Regis extends Component {
    state = {
        file : null
      }
      geturi(e) {
        const formdata = new FormData()
        formdata.append("image", e.target.files[0])
        fetch ("https://api.imgur.com/3/image/", {
          method: "post",
          headers: {
            Authorization : `Client-ID be8ce6ea62d06dc`
          },
          body: formdata
        }).then(data => data.json()).then( data => {
          console.log(data)
        })
        // console.log(e.target.files[0])
      }    

  render() {

      return (
        <div className="Regis">
          <div className="loginButton">
            <div className="idk">
              <input type="text" name="" id="" placeholder="username" />
              <input type="email" name="" id="" placeholder="Email" />
              <input type="password" name="" id="" placeholder="password" />
              <input id="file" type="file" name="" onChange={(e) => this.geturi(e)}/>
              {/* <p onClick={() => geturi()}>Hi</p> */}
            </div>
          </div>
        </div>
      )
  }
}

export default Regis