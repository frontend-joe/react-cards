import React from "react";
import styled from "styled-components";

const GoogleWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-left: 20px solid #f0b501;
  border-right: 20px solid #3b7dec;
  border-top: 20px solid #e33e2b;
  border-bottom: 20px solid #2ba14c;
`;

const GoogleTriangle = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 1px;
  width: 20px;
  height: 100%;
  background: white;
  transform: rotate(55deg) translate(50%, -50%);
  transform-origin: 0 0;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background: inherit;
    transform: rotate(35deg) translate(10px, -2px);
  }
`;

const GoogleRectangle = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  right: -20px;
  border-bottom-right-radius: 4px;
  transform: translate(0, -50%);
  height: 20px;
  width: 80%;
  background: #3b7dec;
`;

const GoogleLogo = props => (
  <GoogleWrapper style={{ display: "none" }}>
    <GoogleTriangle />
    <GoogleRectangle />
  </GoogleWrapper>
);

export default GoogleLogo;
