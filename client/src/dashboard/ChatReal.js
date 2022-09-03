import React, {useState, useEffect} from "react";
import "../css/ChatReal.css";

export const ChatReal = () => {

  const [backendData, setBackEndData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(data => {
      setBackEndData(data)
    })
  }, [])

  return (
    <div className="ChatReal sc1">
      <div className="chatme">
        <img
          src="https://images-ext-2.discordapp.net/external/vycKRS8KOU02QarxK7sTU43i0H3lcxhkOzKTTY2zOs8/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/853177489743282217/5143eb95ce02320c66990b2d62959751.png?width=480&height=480"
          alt=""
          srcSet=""
        />
        <div className="chatmeC">
          <h6>DORTROX</h6>
          <p>Hi im dortrox with next gen kaizen</p>
        </div>
      </div>
      <div className="chatyou">
      <img
          src="https://images-ext-2.discordapp.net/external/vycKRS8KOU02QarxK7sTU43i0H3lcxhkOzKTTY2zOs8/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/853177489743282217/5143eb95ce02320c66990b2d62959751.png?width=480&height=480"
          alt=""
          srcSet=""
        />
        <div className="chatyouC">
          <h6>DORTROX</h6>
          <p>Hi im dortrox with next gen kaizen</p>
        </div>
      </div>
      <div className="chatme">
        <img
          src="https://images-ext-2.discordapp.net/external/vycKRS8KOU02QarxK7sTU43i0H3lcxhkOzKTTY2zOs8/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/853177489743282217/5143eb95ce02320c66990b2d62959751.png?width=480&height=480"
          alt=""
          srcSet=""
        />
        <div className="chatmeC">
          <h6>DORTROX</h6>
          <p>Hi im dortrox with next gen kaizen</p>
        </div>
      </div>
      <div className="chatyou">
      <img
          src="https://images-ext-2.discordapp.net/external/vycKRS8KOU02QarxK7sTU43i0H3lcxhkOzKTTY2zOs8/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/853177489743282217/5143eb95ce02320c66990b2d62959751.png?width=480&height=480"
          alt=""
          srcSet=""
        />
        <div className="chatyouC">
          <h6>DORTROX</h6>
          <p>Hi im dortrox with next gen kaizen</p>
        </div>
      </div>
      <div className="chatme">
        <img
          src="https://images-ext-2.discordapp.net/external/vycKRS8KOU02QarxK7sTU43i0H3lcxhkOzKTTY2zOs8/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/853177489743282217/5143eb95ce02320c66990b2d62959751.png?width=480&height=480"
          alt=""
          srcSet=""
        />
        <div className="chatmeC">
          <h6>DORTROX</h6>
          <p>Hi im dortrox with next gen kaizen</p>
        </div>
      </div>
      <div className="chatyou">
      <img
          src="https://images-ext-2.discordapp.net/external/vycKRS8KOU02QarxK7sTU43i0H3lcxhkOzKTTY2zOs8/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/853177489743282217/5143eb95ce02320c66990b2d62959751.png?width=480&height=480"
          alt=""
          srcSet=""
        />
        <div className="chatyouC">
          <h6>DORTROX</h6>
          <p>Hi im dortrox with next gen kaizen</p>
        </div>

      {(typeof backendData.users === "undefined") ? (
        <p>Loading..</p>
      ): backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))}

      </div>
    </div>
  );
};
