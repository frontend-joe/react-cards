import React, { useState } from "react";
import styled, { css } from "styled-components";

const gradient = degs => css`
  background: linear-gradient(
    ${degs || 130}deg,
    ${props => props.gradientFirst} 0%,
    ${props => props.gradientSecond} 100%
  );
`;

const Card = styled.div`
  margin: 0 1rem;
  position: relative;
  overflow: hidden;
  width: 300px;
  padding: 3rem 0 2rem;
  border-radius: 0.5rem;
  color: white;
  ${gradient()};
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);

  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    ${gradient(-50)};
    transition: opacity 0.75s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const BackgroundSquare = styled.div`
  position: absolute;
  z-index: 2;
  top: 52%;
  left: 0;
  width: 200%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(-3deg);
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  flex: 0 0 auto;
  margin-bottom: 2rem;
  border-radius: 50%;
  font-size: 40px;
  color: white;
  ${gradient()};
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
`;

const PlanTitle = styled.div`
  font-size: 1.25rem;
`;

const PlanCost = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const FeatureList = styled.div`
  margin-bottom: 1.5rem;
`;

const FeatureListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.325rem;

  & > i {
    font-size: 20px;
    margin-right: 0.5rem;
  }
`;

const ActionButton = styled.button`
  flex: 0 0 auto;
  height: 40px;
  padding: 0 2rem;
  border: 0;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.85);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
  transition: background 0.25s;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

const PricingCard = props => {
  // const [features] = useState([
  //   "10 GB Space",
  //   "5 Domain Names",
  //   "Unlimited Mail"
  // ]);

  const {
    gradientFirst,
    gradientSecond,
    icon,
    planTitle,
    planCost,
    features
  } = props;

  console.log("gradientFirst", gradientFirst);

  // icofont-rocket-alt-1

  return (
    <Card gradientFirst={gradientFirst} gradientSecond={gradientSecond}>
      <BackgroundSquare />
      <Content>
        <Icon
          className={icon}
          gradientFirst={gradientFirst}
          gradientSecond={gradientSecond}
        />
        <PlanTitle>{planTitle}</PlanTitle>
        <PlanCost>${planCost}</PlanCost>
        <FeatureList>
          {features.map(f => (
            <FeatureListItem>
              <i className="icofont-check" />
              <span>{f}</span>
            </FeatureListItem>
          ))}
        </FeatureList>
        <ActionButton>Order Now</ActionButton>
      </Content>
    </Card>
  );
};

export default PricingCard;
