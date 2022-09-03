import React, { Component } from 'react'
import '../css/Registration.css'


export class Regis extends Component {
    state = {
        file : null
      }

  render() {
    function geturi(e) {
        console.log(e)
      }
      return (
        <div className="Regis">
          <div className="loginButton">
            <div className="idk">
              <input type="text" name="" id="" placeholder="username" />
              <input type="email" name="" id="" placeholder="Email" />
              <input type="password" name="" id="" placeholder="password" />
              <input id="file" type="file" name="" onChange={(e) => this.geturi(e)}/>
              <p onClick={() => geturi()}>Hi</p>
            </div>
          </div>
        </div>
      )
  }
}

export default Regis