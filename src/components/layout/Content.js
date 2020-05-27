import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = props => <StyledContent>{props.children}</StyledContent>;

export default Content;
