import React from "react";
import "../css/ServerAndFriends.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";

export const ServersAndFriends = (props) => {
  return (
    <div className="ServersAndFriends">
      <div className="profile">
        <img
          src={props.usd.pfp}
          alt=""
        />
        <p>{props.usd.name}</p>
        <FontAwesomeIcon icon={faEllipsis}/>
      </div>
      <h5>Servers</h5>
      <div className="servers">
        <div className="server">
          <img
            src="https://images-ext-1.discordapp.net/external/GmSLnQrAoOgn_q2W-WzmAgYcmNI9XKPQGlNmT8OLqWs/%3Fsize%3D4096/https/cdn.discordapp.com/icons/971114380097896498/0cbf1f96b2bb1d464f9b3a964ee95764.png?width=480&height=480"
            alt=""
            srcSet=""
          />
          <p>UNRAVEL</p>
        </div>
        <div className="server">
          <img
            src="https://images-ext-1.discordapp.net/external/u9z7o1YnUe_YcO8TGkAblyUH8eRTTbMYY_MDcCaLad4/%3Fsize%3D4096/https/cdn.discordapp.com/icons/840251729350230058/20b8d22ad84d8f828553eb77b93a20b1.png?width=480&height=480"
            alt=""
            srcSet=""
          />
          <p>OG UNRAVEL</p>
        </div>
        <div className="server">
          <img
            src="https://images-ext-1.discordapp.net/external/4Y8FlgNG9wgbHbx6Q7ehLtCu5BWxoX3PFYvrSWCYvZA/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/473101241397018635/96e8d6c90718c48660369702eb825b0c.png?width=480&height=480"
            alt=""
            srcSet=""
          />
          <p>Matthon</p>
        </div>
        <div className="server">
          <img
            src="https://images-ext-1.discordapp.net/external/vfcjb4jjCQyBZ5dbWmR6MzrBXfLg9YDNVilnfpDJz4k/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/927171705598783489/045abb864ca367264420469d3a160033.png?width=480&height=480"
            alt=""
            srcSet=""
          />
          <p>SATAN</p>
        </div>
      </div>
    </div>
  );
};
