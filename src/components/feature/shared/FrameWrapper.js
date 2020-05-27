import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
`;

const FrameWrapper = props => <StyledWrapper>{props.children}</StyledWrapper>;

export default FrameWrapper;
