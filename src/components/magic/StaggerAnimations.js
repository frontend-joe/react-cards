import React from "react";
import styled, { keyframes } from "styled-components";
import LongShadowCard from "../shared/LongShadowCard";

const purple = "#4c2992";
const pink = "#393540";
const blue = "#43329c";
const red = "#393540";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
`;

const jump = "8px";

const appear1 = keyframes`
  0% { opacity: 0; transform: translateY(${jump}); }
  40% { opacity: 1; transform: translateY(0); }
  100% { opacity: 1; }
`;

const appear2 = keyframes`
  0% { opacity: 0; }
  20% { opacity: 0; transform: translateY(${jump}); }
  60% { opacity: 1; transform: translateY(0); }
  100% { opacity: 1; }
`;

const appear3 = keyframes`
  0% { opacity: 0;  }
  40% { opacity: 0; transform: translateY(${jump}); }
  80% { opacity: 1; transform: translateY(0); }
  100% { opacity: 1; }
`;

const appear4 = keyframes`
  0% { opacity: 0; }
  60% { opacity: 0; transform: translateY(${jump}); }
  100% { opacity: 1; transform: translateY(0); }
`;

const CardAnimation = styled.div`
  animation: ${(p) => p.animation} 1.5s;
`;

const StaggerAnimations = ({}) => (
  <Wrapper>
    <CardAnimation animation={appear1}>
      <LongShadowCard background={purple} icon="icofont-brand-bing" />
    </CardAnimation>
    <CardAnimation animation={appear2}>
      <LongShadowCard background={purple} icon="icofont-brand-apple" />
    </CardAnimation>
    <CardAnimation animation={appear3}>
      <LongShadowCard background={purple} icon="icofont-brand-vodafone" />
    </CardAnimation>
    <CardAnimation animation={appear4}>
      <LongShadowCard background={purple} icon="icofont-brand-airbnb" />
    </CardAnimation>
  </Wrapper>
);

export default StaggerAnimations;
