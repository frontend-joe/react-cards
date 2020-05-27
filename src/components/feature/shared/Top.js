import React from "react";
import styled from "styled-components";
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
  color: ${rgba("#10132F", 0.38)};
`;

const Arrow = styled.img`
  height: 20px;
`;

const PostNotifications = styled.img`
  height: 26px;
`;

const CenterText = styled.div`
  color: ${rgba("#10132F", 0.75)};
`;

const Top = props => (
  <TopRow>
    <span style={{ width: props.centerText ? "100px" : "auto" }}>UI Cards</span>
    {props.centerText && <CenterText>{props.centerText}</CenterText>}
    <div
      style={{
        textAlign: "right",
        height: "24px",
        width: props.centerText ? "100px" : "auto"
      }}
    >
      {!props.isLastSlide && <Arrow src={arrow} />}
      {props.isLastSlide && (
        <PostNotifications
          src={require("../../../assets/images/post-notifications.png")}
        />
      )}
    </div>
  </TopRow>
);

export default Top;
