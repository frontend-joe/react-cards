import React from "react";
import styled, { keyframes } from "styled-components";
import LongShadowCard from "../shared/LongShadowCard";

const purple = "#4c2992";
const pink = "#393540";
const blue = "#43329c";
const red = "#393540";

const duration = "2.75s";

const wrapperAnimation = keyframes`
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
    transform: translateY(0);
  }
  75% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(600px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  animation: ${wrapperAnimation} ${duration} infinite linear;
`;

const gap = 20;

const appearKeyframes = (i) => keyframes`
  0% { opacity: 0; }
  ${i === 0 ? 0 : (i * gap) / 2}% {
    opacity: 0;
  }
  ${i === 0 ? gap : (i * gap) / 2 + gap}% {
    opacity: 1;
  }
  100% { opacity: 1; }
`;

const CardAnimation = styled.div`
  animation: ${(p) => appearKeyframes(p.index, gap)} ${duration} infinite linear;
`;

const StaggerAnimations = ({}) => (
  <Wrapper>
    <CardAnimation index={0}>
      <LongShadowCard background={purple} icon="icofont-brand-bing" />
    </CardAnimation>
    <CardAnimation index={1}>
      <LongShadowCard background={purple} icon="icofont-brand-apple" />
    </CardAnimation>
    <CardAnimation index={2}>
      <LongShadowCard background={purple} icon="icofont-brand-vodafone" />
    </CardAnimation>
    <CardAnimation index={3}>
      <LongShadowCard background={purple} icon="icofont-brand-airbnb" />
    </CardAnimation>
  </Wrapper>
);

export default StaggerAnimations;
