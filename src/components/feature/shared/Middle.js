import React from "react";
import styled from "styled-components";

const StyledMiddle = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: ${props => props.verticalAlign || "center"};
  justify-content: ${props => props.horizontalAlign || "center"};
`;

const Middle = props => (
  <StyledMiddle
    verticalAlign={props.verticalAlign}
    horizontalAlign={props.horizontalAlign}
  >
    {props.children}
  </StyledMiddle>
);

export default Middle;
