import React from "react";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";
import arrow from "../../../assets/images/arrow.png";

const TopRow = styled.div`
  position: relative;
  z-index: 1;
  flex: 0 0 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  font-family: DM Sans;
  font-size: 24px;
  font-weight: 800;
  color: ${props => rgba(props.textColor || "#10132F", 0.38)};
`;

const Arrow = styled.span`
  font-size: 30px;
  color: ${props => rgba(props.textColor || "#10132F", 0.38)};
`;

const postAnimation = keyframes`
  50% {
    transform: translateY(-5px);
  }
`;

const PostNotifications = styled.div`
  height: 26px;
  display: flex;
  align-items: center;

  & > i {
    margin-left: 0.5rem;
    font-size: 32px;
    animation: ${postAnimation} 1.5s infinite linear;
  }
`;

const CenterText = styled.div`
  color: ${props => rgba(props.textColor || "#10132F", 0.75)};
`;

const Top = props => (
  <TopRow textColor={props.textColor}>
    <span style={{ width: props.centerText ? "150px" : "auto" }}>
      CSS Magic
    </span>
    {props.centerText && (
      <CenterText textColor={props.textColor}>{props.centerText}</CenterText>
    )}
    <div
      style={{
        textAlign: "right",
        height: "24px",
        width: props.centerText ? "150px" : "auto"
      }}
    >
      {!props.isLastSlide && (
        <Arrow textColor={props.textColor} className="material-icons-outlined">
          arrow_forward
        </Arrow>
      )}
      {props.isLastSlide && (
        <PostNotifications>
          Post Notifications
          <i className="material-icons-outlined">arrow_upward</i>
        </PostNotifications>
      )}
    </div>
  </TopRow>
);

export default Top;
