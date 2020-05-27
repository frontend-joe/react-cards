import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import Bottom from "./shared/Bottom";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImagePrev from "./shared/ImagePrev";
import Middle from "./shared/Middle";
import Top from "./shared/Top";
import lastCodeSlide from "../../assets/images/lastCodeSlide.png";
import waves from "../../assets/images/first-slide-wave.png";
import FocalCard from "../cards/PerspectiveCardProps";

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

const StyledCol = styled.div`
  width: 33.33%;
  padding: 1rem;
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
  background-position: right bottom;
  background-repeat: no-repeat;
`;

const ExampleSlide = props => (
  <FrameWrapper>
    <ImagePrev image={lastCodeSlide} />
    <Frame background="#FAF9FE">
      <StyledWaves />
      <Top centerText="Example" />
      <Middle verticalAlign="center">
        <StyledRow>
          <StyledCol>
            <FocalCard
              cardTitle="Rocky Mountains"
              cardSubtitle="Mount Elbert"
              cardImage={require("../../assets/images/landscape4.jpg")}
              cardImageSize="115%"
            />
          </StyledCol>
          <StyledCol>
            <FocalCard
              cardTitle="Himalayas"
              cardSubtitle="Mount Everest"
              cardImage={require("../../assets/images/landscape3.webp")}
              cardImageSize="230%"
            />
          </StyledCol>
          <StyledCol>
            <FocalCard
              cardTitle="Alps"
              cardSubtitle="Mont Blanc"
              cardImage={require("../../assets/images/landscape2.png")}
              cardImageSize="145%"
            />
          </StyledCol>
        </StyledRow>
      </Middle>
      <Bottom />
    </Frame>
  </FrameWrapper>
);

export default ExampleSlide;
