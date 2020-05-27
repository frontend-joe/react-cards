import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import Bottom from "./shared/Bottom";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImageNext from "./shared/ImageNext";
import Middle from "./shared/Middle";
import Top from "./shared/Top";
import secondSlideImage from "../../assets/images/second-slide.png";
import imageNext from "../../assets/images/slide-second.png";
import waves from "../../assets/images/first-slide-wave.png";
import FocalCard from "../cards/3DHoverCard";

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledMiddleContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 9px 28px 0;
  font-family: "DM Sans";
  font-weight: 600;
`;

const StyledHowToText = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 0px;
  letter-spacing: -2px;
  color: ${rgba("#10132F", 0.57)};
`;

const StyledTitleText = styled.div`
  font-size: 5.25rem;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 92px;
  margin-bottom: 14px;
  color: ${rgba("#090C22", 0.85)};
`;

const StyledSubtitleText = styled.div`
  ${"" /* font-size: 38px; */}
  font-size: 50px;
  letter-spacing: -1px;
  color: ${rgba("#522cad", 0.75)};
`;

const StyledBannerText = styled.div`
  position: absolute;
  z-index: 0;
  top: -40px;
  left: -32px;
  letter-spacing: -20px;
  font-size: 260px;
  font-family: "DM Sans";
  font-weight: 600;
  color: #f1f1fa;
  white-space: nowrap;
`;

const StyledCardFrame = styled.div`
  position: absolute;
  z-index: 2;
  right: 30px;
  bottom: 115px;
  width: 325px;
  transform: rotate(-2deg);
`;

const StyledWaves = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -18px;
  left: 0;
  width: 100%;
  height: 500px;
  background: url(${waves});
  background-size: 200%;
  background-position: left bottom;
  background-repeat: no-repeat;
`;

const FirstSlide = props => (
  <FrameWrapper>
    {true && <ImageNext image={imageNext} />}
    <Frame background="#FAF9FE">
      <StyledWaves />
      <Top />
      <Middle verticalAlign="flex-start">
        <StyledBannerText>React</StyledBannerText>
        <StyledMiddleContent>
          <StyledHowToText>How To</StyledHowToText>
          <StyledTitleText>
            Create a <br /> 3D Hover Card
            {/* Use Dark Theme on a Card */}
          </StyledTitleText>
          <StyledSubtitleText>In React</StyledSubtitleText>
        </StyledMiddleContent>
        <StyledCardFrame>
          <FocalCard />
        </StyledCardFrame>
      </Middle>
      <Bottom />
    </Frame>
  </FrameWrapper>
);

export default FirstSlide;
