import React from "react";
import "./LongShadowCard.scss";

const LongShadowCard = props => (
  <div className="wrapper">
    <div className="card purple">
      <div className="text-wrapper">
        <i className="text icofont-facebook"></i>
      </div>
    </div>
    <div className="card pink">
      <div className="text-wrapper">
        <i className="text icofont-brand-whatsapp"></i>
      </div>
    </div>
    <div className="card blue">
      <div className="text-wrapper">
        <i className="text icofont-instagram"></i>
      </div>
    </div>
    <div className="card red">
      <div className="text-wrapper">
        <i className="text icofont-slack"></i>
      </div>
    </div>
  </div>
);

export default LongShadowCard;
