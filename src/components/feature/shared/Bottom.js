import React from "react";
import styled from "styled-components";
import frontendjoeImage from "../../../assets/images/frontendjoe.png";

const BottomRow = styled.div`
  position: relative;
  z-index: 1;
  flex: 0 0 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  font-size: 28px;
`;

const FrontendJoe = styled.img`
  height: 36px;
`;

const SaveIcon = styled.i`
  position: relative;
  font-size: 38px;
  color: #522cad;

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: rgba(82, 44, 173, 0.1);
  }
`;

const Bottom = props => (
  <BottomRow>
    <FrontendJoe src={frontendjoeImage} />
    <SaveIcon className="material-icons-outlined">bookmark_outline</SaveIcon>
  </BottomRow>
);

export default Bottom;
