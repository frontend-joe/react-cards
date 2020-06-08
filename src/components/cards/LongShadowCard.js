import React from "react";
import "./LongShadowCard.scss";

const LongShadowCard = props => (
  <div className="wrapper">
    <div className="card purple">
      <span className="text material-icons-outlined">play_circle_outline</span>
    </div>
    <div className="card pink">
      <span className="text material-icons-outlined">person</span>
    </div>
    <div className="card blue">
      <span className="text material-icons-outlined">science</span>
    </div>
    <div className="card red">
      <span className="text material-icons-outlined">star_border</span>
    </div>
  </div>
);

export default LongShadowCard;
