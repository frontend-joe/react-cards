import React from "react";
import styled, { keyframes } from "styled-components";
import { lighten, darken } from "polished";

const backgroundColor = "#6f4ae2";
const rippleAnimationDuration = "1.15s";

const rippleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) translate(-50%, -50%);
  }
  35% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    transform: scale(3.25) translate(-50%, -50%);
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border-radius: 0.5rem;
  background: ${backgroundColor};
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.15);
  user-select: none;
  cursor: pointer;

  & .ripple {
    position: absolute;
    z-index: 1;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: inset -5px -5px 10px ${lighten(0.05, backgroundColor)},
      inset 5px 5px 10px ${darken(0.05, backgroundColor)};
    opacity: 0;
    pointer-events: none;
    transform-origin: 0% 0%;
    animation: ${rippleAnimation} ${rippleAnimationDuration};
  }
`;

const CardText = styled.div`
  position: relative;
  z-index: 2;
  font-weight: 600;
  color: #ffffff;
  pointer-events: none;
`;

const RippleCard = props => {
  const onClick = event => {
    const rect = event.target.getBoundingClientRect();

    const rippleDomElement = document.createElement("span");
    rippleDomElement.className = "ripple";
    rippleDomElement.style.top = `${event.clientY - rect.y}px`;
    rippleDomElement.style.left = `${event.clientX - rect.x}px`;

    const rippleCard = document.getElementById("ripple-card");

    const removeFunction = () => rippleCard.removeChild(rippleDomElement);

    rippleDomElement.addEventListener("webkitAnimationEnd", removeFunction);
    rippleDomElement.addEventListener("animationend", removeFunction);

    rippleCard.appendChild(rippleDomElement);
  };

  return (
    <Card id="ripple-card" onClick={onClick}>
      <CardText>Soft Ripples</CardText>
    </Card>
  );
};

export default RippleCard;
