import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { rgba, lighten } from "polished";
import Bottom from "./shared/Bottom";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImageNext from "./shared/ImageNext";
import Middle from "./shared/Middle";
import Top from "./shared/Top";
import secondSlideImage from "../../assets/images/second-slide.png";
import imageNext from "../../assets/images/slide-second.png";
import waves from "../../assets/images/first-slide-wave.png";
import FocalCard from "../cards/CountryPicker";

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
  padding: 19px 28px 0;
  font-weight: 600;
`;

const StyledHowToText = styled.div`
  font-size: 50px;
  font-weight: ${({ isDark }) => (isDark ? 500 : 600)};
  line-height: 50px;
  margin-bottom: 14px;
  letter-spacing: -2px;
  color: ${({ isDark }) =>
    isDark ? rgba("#fff", 0.65) : rgba("#10132F", 0.57)};
`;

const StyledTitleText = styled.div`
  font-size: 5.25rem;
  font-weight: ${({ isDark }) => (isDark ? 500 : 600)};
  letter-spacing: -2px;
  line-height: 92px;
  margin-bottom: 35px;
  color: ${({ isDark }) =>
    isDark ? rgba("#FFF", 0.95) : rgba("#10132F", 0.85)};
`;

const StyledSubtitleText = styled.div`
  font-size: 50px;
  letter-spacing: -2px;
  font-weight: ${({ isDark }) => (isDark ? 500 : 600)};
  color: #7245c7;
  ${"" /* color: ${rgba("white", 0.38)}; */}
  display: flex;
  align-items: center;
`;

const StyledBannerText = styled.div`
  position: absolute;
  z-index: 0;
  top: 173px;
  left: -25px;
  letter-spacing: -10px;
  font-size: 180px;
  font-weight: 600;
  color: ${({ isDark }) =>
    isDark ? rgba("#fff", 0.05) : rgba("#10132F", 0.025)};
  white-space: nowrap;
`;

const StyledCardFrame = styled.div`
  position: absolute;
  z-index: 5;
  bottom: 102px;
  right: 21px;
  ${"" /* width: 325px; */}
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

const StyledIconWrapper = styled.span`
  width: 54px;
  height: 54px;
  border-radius: 10px;
  color: white;
  font-size: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  box-shadow: 0 11px 15px -7px ${rgba("#4e3dc8", 0.5)};
  background: linear-gradient(
    45deg,
    ${lighten(0.2, "#522cad")} 0%,
    #522cad 100%
  );
`;

const FirstSlide = (props) => (
  <FrameWrapper>
    {false && <ImageNext image={imageNext} />}
    <Frame background="#100F10">
      {false && <StyledWaves />}
      <Top textColor="#fff" isDark />
      <Middle verticalAlign="flex-start">
        <StyledBannerText isDark>Country</StyledBannerText>
        <StyledMiddleContent>
          <StyledHowToText isDark>How To</StyledHowToText>
          <StyledTitleText isDark>
            Create <br />
            Country <br />
            Picker
            {/* Theme a Mountain <br /> Card */}
            {/* Use Dark Theme on a Card */}
          </StyledTitleText>
          <StyledSubtitleText isDark>
            <StyledIconWrapper>
              <FontAwesomeIcon icon={faReact} />
            </StyledIconWrapper>
            <span>React</span>
          </StyledSubtitleText>
        </StyledMiddleContent>
        <StyledCardFrame>
          <FocalCard />
        </StyledCardFrame>
      </Middle>
      <Bottom textColor="#10132F" isDark />
    </Frame>
  </FrameWrapper>
);

export default FirstSlide;
