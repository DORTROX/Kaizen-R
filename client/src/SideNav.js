import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUser,
  faVideoCamera,
  faBookmark,
  faCog,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import "./css/SideNav.css";

export const SideNav = (props) => {
  return (
    <div className="SideNav">
      <div className="left">
        <h4>KAIZEN</h4>
      </div>
      <div className="center">
        <p><FontAwesomeIcon icon={faEnvelope} onClick={() => props.fun('ChatArea')} /></p>
        <p><FontAwesomeIcon icon={faUser} /></p>
        <p><FontAwesomeIcon icon={faPhone} /></p>
        <p><FontAwesomeIcon icon={faVideoCamera} /></p>
        <p><FontAwesomeIcon icon={faBookmark} /></p>
        <p><FontAwesomeIcon icon={faCog} /></p>
      </div>
      <div className="right">
        <FontAwesomeIcon icon={faPlusSquare}  onClick={()=> props.fun("addServer") }/>
      </div>
    </div>
  );
};
