import React from "react";
import "./CalculatorCard.scss";

const CalculatorCard = () => (
  <div className="card">
    <div className="header">
      <div className="output">1396.5</div>
      <div className="equation">26</div>
    </div>
    <div className="content">
      <div className="row">
        <button className="button">7</button>
        <button className="button">8</button>
        <button className="button">9</button>
        <button className="button">÷</button>
      </div>
      <div className="row">
        <button className="button">4</button>
        <button className="button">5</button>
        <button className="button">6</button>
        <button className="button">x</button>
      </div>
      <div className="row">
        <button className="button">1</button>
        <button className="button">2</button>
        <button className="button">3</button>
        <button className="button">-</button>
      </div>
      <div className="row">
        <button className="button">.</button>
        <button className="button">0</button>
        <button className="button">=</button>
        <button className="button">+</button>
      </div>
    </div>
  </div>
);

export default CalculatorCard;
