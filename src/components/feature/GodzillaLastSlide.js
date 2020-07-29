import React from "react";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";
import Bottom from "./shared/Bottom";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImagePrev from "./shared/ImagePrev";
import Middle from "./shared/Middle";
import Top from "./shared/Top";
import resultSlide from "../../assets/images/slide-result.png";
import waves from "../../assets/images/first-slide-wave.png";
import FocalCard from "../cards/ScrollableCard.js";
import Godzilla from "./shared/Godzilla";

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
  padding: 0 60px 0 60px;
  font-family: "DM Sans";
  font-weight: 600;
`;

const StyledMessageTitle = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 0px;
  letter-spacing: -1px;
  text-align: center;
  color: ${rgba("#10132F", 0.85)};
`;

const StyledMessageSubtitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-bottom: 80px;
  text-align: center;
  color: ${rgba("#090C22", 0.57)};
`;

const StyledNextTimeTitle = styled.div`
  font-size: 28px;
  letter-spacing: -0.5px;
  text-align: center;
  color: ${rgba("#090C22", 0.57)};
`;

const StyledNextTimeText = styled.div`
  font-size: 38px;
  line-height: 1.2;
  letter-spacing: -1px;
  color: ${rgba("#10132F", 0.85)};
  margin-bottom: 6px;
  text-align: center;
`;

const StyledNextTimeLibary = styled.div`
  font-size: 28px;
  letter-spacing: -0.5px;
  text-align: center;
  color: ${rgba("#522cad", 0.75)};
`;

const frameJudder = keyframes`
  0% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(0);;
  }
  80% {
    transform: translateY(-5px);;
  }
  90% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
`;

const FrameInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  animation: ${frameJudder} 1s infinite;
`;

const GodzillaMountains = styled.img`
  position: absolute;
  width: 850px;
  left: -77px;
  bottom: -40px;
`;

const LastSlide = props => (
  <FrameWrapper>
    {false && <ImagePrev image={resultSlide} />}
    <Frame background="#f7f7fd">
      <Godzilla />
      <FrameInner>
        <GodzillaMountains src={require("../../assets/images/mountains.png")} />
        <Top isLastSlide />
        <Middle verticalAlign="flex-start">
          <div style={{ padding: "70px 24px", marginTop: "0", width: "100%" }}>
            <StyledMessageTitle>Was It Useful?</StyledMessageTitle>
            <StyledMessageSubtitle>
              Let me know in the comments
            </StyledMessageSubtitle>

            <StyledRow>
              <StyledLeft style={{ transform: "translateY(-10px)" }}>
                <StyledNextTimeTitle>Next Time</StyledNextTimeTitle>
                <StyledNextTimeText>Animate Godzilla</StyledNextTimeText>
                <StyledNextTimeLibary>In React</StyledNextTimeLibary>
              </StyledLeft>
            </StyledRow>
          </div>
        </Middle>

        <Bottom />
      </FrameInner>
    </Frame>
  </FrameWrapper>
);

export default LastSlide;
