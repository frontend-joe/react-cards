import React from "react";
import styled from "styled-components";
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
import waves from "../../assets/images/first-slide-wave.png";
import FocalCard from "../cards/LazyLoadCard";

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

const StyledWaves = styled.div`
  position: absolute;
  z-index: 0;
  bottom: -6px;
  right: 0;
  width: 100%;
  height: 500px;
  background: url(${require("../../assets/images/first-slide-wave.png")});
  background-size: 200%;
  background-position: left bottom;
  background-repeat: no-repeat;
`;

const StyledCardFrame = styled.div`
  width: auto;
`;

const LastSlide = (props) => (
  <FrameWrapper>
    {false && <ImagePrev image={lastCodeSlide} />}
    {false && <ImageNext image={require("../../assets/images/slide-10.png")} />}
    <Frame background="#591FAE">
      {false && <StyledWaves />}
      <Top textColor="white" isDark centerText="Result" />
      <Middle verticalAlign="center">
        <StyledCardFrame style={{ transform: "scale(1)" }}>
          <FocalCard
            cardTitle="Test"
            cardSubtitle="title"
            cardImage={require("../../assets/images/landscape.jpg")}
          />
        </StyledCardFrame>
      </Middle>
      <Bottom textColor="#fff" isDark />
    </Frame>
  </FrameWrapper>
);

export default LastSlide;
