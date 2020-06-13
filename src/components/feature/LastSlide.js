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
import waves from "../../assets/images/first-slide-wave.png";
import FocalCard from "../cards/LongShadowCard.js";

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
  z-index: 1;
  padding: 0 60px 0 60px;
  font-family: "DM Sans";
  font-weight: 600;
`;

const StyledRight = styled.div`
  flex: 1 0 auto;
  transform: rotate(0deg) translateX(0px);
`;

const StyledHowToText = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 0px;
  letter-spacing: -1px;
  text-align: center;
  color: ${rgba("#10132F", 0.85)};
`;

const StyledTitleText = styled.div`
  font-size: 25px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
  text-align: center;
  color: ${rgba("#090C22", 0.57)};
`;

const StyledNextTimeTitle = styled.div`
  font-size: 28px;
  letter-spacing: -0.5px;
  color: ${rgba("#090C22", 0.57)};
`;

const StyledNextTimeText = styled.div`
  font-size: 38px;
  line-height: 1.2;
  letter-spacing: -1px;
  color: ${rgba("#10132F", 0.85)};
  margin-bottom: 6px;
`;

const StyledNextTimeLibary = styled.div`
  font-size: 28px;
  letter-spacing: -0.5px;
  color: ${rgba("#522cad", 0.75)};
`;

const StyledWaves = styled.div`
  position: absolute;
  z-index: 0;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 500px;
  background: url(${require("../../assets/images/first-slide-wave.png")});
  background-size: 200%;
  background-position: right bottom;
  background-repeat: no-repeat;
`;

const LastSlide = props => (
  <FrameWrapper>
    {false && <ImagePrev image={resultSlide} />}
    <Frame background="#f7f7fd">
      <StyledWaves />
      <Top isLastSlide />
      <Middle verticalAlign="center">
        <div style={{ padding: "0 24px", marginTop: "-40px", width: "100%" }}>
          <StyledHowToText>Was It Useful?</StyledHowToText>
          <StyledTitleText>Let me know in the comments</StyledTitleText>

          <StyledRow>
            <StyledLeft style={{ transform: "translateY(-10px)" }}>
              <StyledNextTimeTitle>Next Time</StyledNextTimeTitle>
              <StyledNextTimeText>
                Create <br />
                Long <br /> Shadow <br />
                Cards
              </StyledNextTimeText>
              <StyledNextTimeLibary>In React</StyledNextTimeLibary>
            </StyledLeft>
            <StyledRight>
              <FocalCard />
            </StyledRight>
          </StyledRow>
        </div>
      </Middle>
      <Bottom />
    </Frame>
  </FrameWrapper>
);

export default LastSlide;
