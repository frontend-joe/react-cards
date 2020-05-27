import React from "react";
import styled from "styled-components";

const StyledFrame = styled.div`
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 750px;
  background: ${props => props.background || "transparent"};
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

const Frame = props => (
  <StyledFrame background={props.background}>{props.children}</StyledFrame>
);

export default Frame;
