import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  position: absolute;
  width: 600px;
  top: 0;
  left: 100%;
`;

const ImageNext = props => <StyledImage src={props.image} />;

export default ImageNext;
