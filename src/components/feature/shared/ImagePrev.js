import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  position: absolute;
  width: 600px;
  top: 0;
  right: 100%;
`;

const ImagePrev = props => <StyledImage src={props.image} />;

export default ImagePrev;
