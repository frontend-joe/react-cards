import React from "react";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";
import Bottom from "./shared/Bottom";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImagePrev from "./shared/ImagePrev";
import ImageNext from "./shared/ImageNext";
import Middle from "./shared/Middle";
import Top from "./shared/Top";
import lastCodeSlide from "../../assets/images/slide-8.png";
import slideLast from "../../assets/images/slide-last.png";
import Godzilla from "./shared/Godzilla";

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
  width: 750px;
  left: -77px;
  bottom: -40px;
`;

const LastSlide = props => (
  <FrameWrapper>
    {false && <ImagePrev image={lastCodeSlide} />}
    {false && <ImageNext image={require("../../assets/images/slide-10.png")} />}
    <Frame background="#FAF9FE">
      <FrameInner>
        <Top centerText="Result" />
        <Middle verticalAlign="center"></Middle>
        <Bottom />

        <GodzillaMountains src={require("../../assets/images/mountains.png")} />
        <Godzilla />
      </FrameInner>
    </Frame>
  </FrameWrapper>
);

export default LastSlide;
