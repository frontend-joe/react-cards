import React from "react";
import styled from "styled-components";
import frontendjoeImage from "../../../assets/images/frontendjoe.png";
import frontendjoeGreyImage from "../../../assets/images/frontendjoe-grey.png";

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
  height: 48px;
`;

const SaveIcon = styled.i`
  position: relative;
  font-size: 38px;
  color: ${(props) =>
    props.isDark ? "rgba(255, 255, 255, 0.75)" : "rgb(82, 44, 173, 0.65)"};

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: ${(props) => (props.isDark ? "transparent" : "transparent")};
  }
`;

const Bottom = (props) => (
  <BottomRow>
    <FrontendJoe src={props.isDark ? frontendjoeGreyImage : frontendjoeImage} />
    <SaveIcon isDark={props.isDark} className="material-icons-outlined">
      bookmark_outline
    </SaveIcon>
  </BottomRow>
);

export default Bottom;
