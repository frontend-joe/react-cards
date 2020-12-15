import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import Bottom from "./shared/Bottom";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImagePrev from "./shared/ImagePrev";
import Middle from "./shared/Middle";
import Top from "./shared/Top";
import resultSlide from "../../assets/images/slide-result.png";
import FocalCard from "../cards/TabbedCard";

const LastSlide = (props) => (
  <FrameWrapper>
    {false && <ImagePrev image={resultSlide} />}
    <Frame background="#361270">
      <Top isLastSlide textColor="#fff" isDark />
      <Middle verticalAlign="flex-start">
        <div style={{ padding: "60px 24px 0", marginTop: "0", width: "100%" }}>
          <StyledHowToText isDark>Was It Useful?</StyledHowToText>
          <StyledTitleText isDark>Let me know in the comments</StyledTitleText>

          <StyledRow>
            {/* <StyledCenter>
              <StyledNextTimeTitle isDark>Next Time</StyledNextTimeTitle>
              <StyledNextTimeText isDark>
                Create 3D <br /> Shadow Text <br />
              </StyledNextTimeText>
              <StyledNextTimeLibary isDark>In React</StyledNextTimeLibary>
            </StyledCenter>

            <FocalCard /> */}

            <StyledLeft style={{ transform: "translateY(-10px)" }}>
              <StyledNextTimeTitle isDark>Next Time</StyledNextTimeTitle>
              <StyledNextTimeText isDark>
                Create <br /> Tabbed <br /> Cards
              </StyledNextTimeText>
              <StyledNextTimeLibary isDark>In React</StyledNextTimeLibary>
            </StyledLeft>
            <StyledRight>
              <FocalCard />
            </StyledRight>
          </StyledRow>
        </div>
      </Middle>
      <Bottom isDark />
    </Frame>
  </FrameWrapper>
);

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLeft = styled.div`
  flex: 1 0 auto;
  position: relative;
  z-index: 0;
  padding: 0 80px 0 60px;
  font-family: "DM Sans";
`;

const StyledRight = styled.div`
  flex: 1 0 auto;
  transform: rotate(-2deg) translateX(-40px);
`;

const StyledCenter = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
    text-align: center;
  }
`;

const StyledHowToText = styled.div`
  font-size: 50px;
  margin-bottom: 0px;
  letter-spacing: -1px;
  text-align: center;
  color: ${({ isDark }) =>
    isDark ? rgba("#fff", 0.85) : rgba("#10132F", 0.85)};
`;

const StyledTitleText = styled.div`
  font-size: 25px;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
  text-align: center;
  color: ${({ isDark }) =>
    isDark ? rgba("#fff", 0.57) : rgba("#10132F", 0.57)};
`;

const StyledNextTimeTitle = styled.div`
  font-size: 28px;
  letter-spacing: -0.5px;
  color: ${({ isDark }) =>
    isDark ? rgba("#fff", 0.57) : rgba("#10132F", 0.57)};
`;

const StyledNextTimeText = styled.div`
  font-size: 38px;
  line-height: 1.2;
  letter-spacing: -1px;
  color: ${({ isDark }) =>
    isDark ? rgba("#fff", 0.85) : rgba("#10132F", 0.85)};
  margin-bottom: 6px;
`;

const StyledNextTimeLibary = styled.div`
  font-size: 28px;
  letter-spacing: -0.5px;
  ${"" /* color: ${rgba("#522cad", 0.75)}; */}
  color: ${(p) => (p.isDark ? rgba("white", 0.38) : "#6b35ce")};
`;

export default LastSlide;
