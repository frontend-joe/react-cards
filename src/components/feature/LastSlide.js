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
import FocalCard from "../cards/PieChartCard.js";

const LastSlide = (props) => (
  <FrameWrapper>
    {false && <ImagePrev image={resultSlide} />}
    <Frame background="#100f10">
      <Top isLastSlide textColor="#fff" />
      <Middle verticalAlign="flex-start">
        <div style={{ padding: "60px 24px 0", marginTop: "0", width: "100%" }}>
          <StyledHowToText>Was It Useful?</StyledHowToText>
          <StyledTitleText>Let me know in the comments</StyledTitleText>

          <StyledRow>
            {/* <StyledCenter>
              <StyledNextTimeTitle>Next Time</StyledNextTimeTitle>
              <StyledNextTimeText>
                Animate <br /> Helicopters <br />
              </StyledNextTimeText>
              <StyledNextTimeLibary>In React</StyledNextTimeLibary>
            </StyledCenter> */}
            <StyledLeft style={{ transform: "translateY(-10px)" }}>
              <StyledNextTimeTitle>Next Time</StyledNextTimeTitle>
              <StyledNextTimeText>
                Create <br /> Donut <br /> Charts
              </StyledNextTimeText>
              <StyledNextTimeLibary>In React</StyledNextTimeLibary>
            </StyledLeft>
            <StyledRight>
              <FocalCard />
            </StyledRight>
          </StyledRow>
        </div>
      </Middle>
      <Bottom textColor="#10132F" isDark />
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
  font-weight: 600;
`;

const StyledRight = styled.div`
  flex: 1 0 auto;
  transform: rotate(-1deg) translateX(-40px);
`;

const StyledCenter = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHowToText = styled.div`
  font-size: 50px;
  margin-bottom: 0px;
  letter-spacing: -1px;
  text-align: center;
  color: ${rgba("#fff", 0.85)};
  ${"" /* color: ${rgba("#10132F", 0.85)}; */}
`;

const StyledTitleText = styled.div`
  font-size: 25px;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
  text-align: center;
  color: ${rgba("#fff", 0.57)};
  ${"" /* color: ${rgba("#10132F", 0.57)}; */}
`;

const StyledNextTimeTitle = styled.div`
  font-size: 28px;
  letter-spacing: -0.5px;
  color: ${rgba("#fff", 0.57)};
  ${"" /* color: ${rgba("#10132F", 0.57)}; */}
`;

const StyledNextTimeText = styled.div`
  font-size: 38px;
  line-height: 1.2;
  letter-spacing: -1px;
  ${"" /* color: ${rgba("#10132F", 0.85)}; */}
  color: ${rgba("#fff", 0.85)};
  margin-bottom: 6px;
`;

const StyledNextTimeLibary = styled.div`
  font-size: 28px;
  letter-spacing: -0.5px;
  ${"" /* color: ${rgba("#522cad", 0.75)}; */}
  color: #7a68a6;
`;

export default LastSlide;
