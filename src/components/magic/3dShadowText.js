import React from "react";
import styled from "styled-components";
import { rgba, darken } from "polished";

const longShadow = (background) => {
  let val = `0px 0px ${background}`;
  let increment = 0.0125;
  for (var i = 0; i < 400; i++) {
    val += `,${i}px ${i}px ${darken(increment, background)}`;
    increment += 0.00125;
  }

  return val;
};

const Wrapper = styled.div`
  font-size: 146px;
  color: ${rgba("white", 0.95)};
  text-shadow: ${(p) => longShadow(rgba("#5B1EBD", 0.25))};
`;

const ShadowText = () => <Wrapper>Texts</Wrapper>;

export default ShadowText;
