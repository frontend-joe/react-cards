import React from "react";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";
import MovingClouds from "./MovingClouds";

const AnimateHelicopter = () => (
  <Stage>
    <MovingClouds />
    <HelicopterWrapper>
      <HelicoperImage src={require("../../assets/images/chinook.png")} />
      <RotorOuter top="20px" left="-54px">
        <RotorTop />
        <RotorWrapper>
          <RotorAnimation>
            <RotorBlade />
            <RotorBlade second />
          </RotorAnimation>
        </RotorWrapper>
      </RotorOuter>
      <RotorOuter top="-9px" left="158px">
        <RotorTop />
        <RotorWrapper>
          <RotorAnimation>
            <RotorBlade />
            <RotorBlade second />
          </RotorAnimation>
        </RotorWrapper>
      </RotorOuter>
    </HelicopterWrapper>
  </Stage>
);

const rotorWidth = "200px";
const rotorColor = rgba("white", 0.15);

const Stage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 600px;
  height: 750px;
`;

const flyAnimation = keyframes`
  50% {
    transform: rotate(-5deg) translateY(50px);
  }
`;

const HelicopterWrapper = styled.div`
  position: absolute;
  bottom: 140px;
  left: 150px;
  transform: rotate(-5deg);
  animation: ${flyAnimation} 4s ease-in-out 0s infinite;
`;

const HelicoperImage = styled.img`
  width: 300px;
`;

const RotorOuter = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${rotorWidth};
  height: ${rotorWidth};
`;

const RotorWrapper = styled.div`
  position: absolute;
  width: ${rotorWidth};
  height: ${rotorWidth};
  transform: scale(1, 0.075);
  transform-origin: 0% 0%;
`;

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const RotorAnimation = styled.div`
  position: absolute;
  width: ${rotorWidth};
  height: ${rotorWidth};
  border-radius: 50%;
  background: ${rotorColor};
  animation: ${rotateAnimation} 0.5s infinite linear;
`;

const RotorBlade = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${rotorWidth};
  height: 50px;
  background: ${rotorColor};
  transform: translate(-50%, -50%)
    rotate(${props => (props.second ? "-90deg" : 0)});
`;

const RotorTop = styled.div`
  position: absolute;
  z-index: 10;
  top: 3px;
  left: 93px;
  width: 14px;
  height: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background: #575757;
`;

export default AnimateHelicopter;
