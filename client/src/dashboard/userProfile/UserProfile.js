import React from "react";
import "./userProfile.css";

export const UserProfile = (props) => {
  function toggleInfo(e){
    e.target.parentNode.classList.toggle("open");
  };
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={props.usd.pfp} />
          </div>
          <h4>{props.usd.name}</h4>
          <p>Founder of GU DESTROYER</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
}
