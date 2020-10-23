import React from "react";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";
import arrow from "../../../assets/images/arrow.png";
import arrowForDark from "../../../assets/images/arrow-fordark.png";

const TopRow = styled.div`
  position: relative;
  z-index: 1;
  flex: 0 0 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  font-size: 27px;
  color: ${(props) => rgba(props.textColor || "#10132F", 0.38)};
`;

const Arrow = styled.img`
  width: 26px;
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
  color: ${(props) => rgba(props.textColor || "#10132F", 0.75)};
`;

const Top = ({ isDark, textColor, centerText, isLastSlide }) => (
  <TopRow textColor={textColor}>
    <span style={{ width: centerText ? "150px" : "auto" }}>UI Cards</span>
    {centerText && <CenterText textColor={textColor}>{centerText}</CenterText>}
    <div
      style={{
        textAlign: "right",
        height: "24px",
        width: centerText ? "150px" : "auto",
      }}
    >
      {!isLastSlide && <Arrow src={isDark ? arrowForDark : arrow} />}
      {isLastSlide && (
        <PostNotifications>
          Notifications
          <i className="material-icons-outlined">arrow_upward</i>
        </PostNotifications>
      )}
    </div>
  </TopRow>
);

export default Top;
