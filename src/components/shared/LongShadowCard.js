import React from "react";
import styled from "styled-components";
import { rgba, darken } from "polished";
import "../../assets/css/icofont.min.css";

const StyledCard = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  margin-left: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background: ${(p) => p.background};
`;

const longShadow = (background) => {
  let val = `0px 0px ${background}`;
  for (var i = 0; i < 200; i++) {
    val += `,${i}px ${i}px ${darken(0.05, background)}`;
  }

  return val;
};
//
// @function makelongshadow($color) {
//   $val: 0px 0px $color;
//   @for $i from 1 through 200 {
//     $val: #{$val}, #{$i}px #{$i}px #{$color};
//   }
//   @return $val;
// }

const StyledIcon = styled.i`
  font-size: 4.25rem;
  font-weight: 700;
  color: ${rgba("white", 0.85)};
  text-shadow: ${(p) => longShadow(rgba(p.background, 0.5))};
`;

const LongShadowCard = ({ background, icon }) => (
  <StyledCard background={background}>
    <StyledIcon background={background} className={icon} />
  </StyledCard>
);

export default LongShadowCard;
