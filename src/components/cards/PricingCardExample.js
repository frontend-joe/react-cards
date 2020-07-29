import React, { Component } from "react";
import styled from "styled-components";
import PricingCardProps from "./PricingCardProps";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class PricingCardExample extends Component {
  render() {
    return (
      <Wrapper style={{ transform: "scale(0.55)" }}>
        <PricingCardProps
          gradientFirst="#fc00ff"
          gradientSecond="#00dbde"
          icon="icofont-paper-plane"
          planTitle="Basic"
          planCost="25"
          features={["10 GB Space", "5 Domain Names", "Unlimited Mail"]}
        />
        <PricingCardProps
          gradientFirst="#FF5F6D"
          gradientSecond="#FFC371"
          icon="icofont-airplane-alt"
          planTitle="Advanced"
          planCost="50"
          features={["50 GB Space", "10 Domain Names", "Unlimited Mail"]}
        />
        <PricingCardProps
          gradientFirst="#24C6DC"
          gradientSecond="#514A9D"
          icon="icofont-rocket"
          planTitle="Professional"
          planCost="100"
          features={["Unlimited Space", "25 Domain Names", "Unlimited Mail"]}
        />
      </Wrapper>
    );
  }
}

export default PricingCardExample;
