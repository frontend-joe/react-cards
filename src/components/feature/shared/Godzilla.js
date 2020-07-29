import React from "react";
import styled, { keyframes } from "styled-components";

const godzillaWalk = keyframes`
  100% {
    transform: rotate(0) translateX(1080px);
  }
`;

const godzillaStomp = keyframes`
  0% {
    transform: rotate(0);
  }
  60% {
    transform: translateY(-13px) rotate(-4deg);
  }
  70% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
`;

const GodzillaWrapper = styled.div`
  position: absolute;
  z-index: 5;
  left: -450px;
  bottom: -40px;
  animation: ${godzillaWalk} 15s infinite linear;
`;

const Godzilla = styled.img`
  width: 440px;
  animation: ${godzillaStomp} 1s infinite;
`;

const GodzillaMountains = styled.img`
  position: absolute;
  width: 850px;
  left: -77px;
  bottom: 0;
`;

const GodzillaComponent = () => (
  <GodzillaWrapper>
    <Godzilla src={require("../../../assets/images/godzilla.png")} />
  </GodzillaWrapper>
);

export default GodzillaComponent;
