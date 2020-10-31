import React from "react";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 400px;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressBackground = styled.div`
  overflow: hidden;
  position: relative;
  background: linear-gradient(90deg, #00c4cc, #7d2ae8);
  border-radius: 1rem;
  height: 56px;
  width: 100%;
`;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let bubbles = [];
let counter = 0;

for (let i = 0; i < 15; i++) {
  let size = `${getRandomInt(20, 40)}px`;
  bubbles.push({
    opacity: `0.${getRandomInt(20, 50)}`,
    bottom: `-${getRandomInt(20, 60)}px`,
    left: `${getRandomInt(counter - 10, counter + 10)}px`,
    width: size,
    height: size,
  });
  counter = counter + 50;
}

const blockerAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  33% {
    transform: translateX(25%);
  }
  66% {
    transform: translateX(55%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const ProgressBlocker = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #03000a;
  transform: translateX(100%);
  animation: ${blockerAnimation} 5s;
`;

const bubbleMove = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100px);
  }
`;

const bubbleScale = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
`;

const BubbleWrapper = styled.div`
  position: absolute;
  animation: ${bubbleMove} 3s 2 ease-out;
`;

const Bubble = styled.div`
  border-radius: 50%;
  background: white;
  transform: scale(0);
  animation: ${bubbleScale} 3s 2;
`;

const textIn = keyframes`
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  color: ${rgba("white", 0.75)};
  animation: ${textIn} 5.5s;
`;

const BubblingProgress = ({}) => {
  return (
    <Wrapper>
      <ProgressBackground>
        <Text>Completed in 5 seconds</Text>
        {bubbles.map((b) => (
          <BubbleWrapper style={{ left: b.left, bottom: b.bottom }}>
            <Bubble
              style={{ width: b.width, height: b.height, opacity: b.opacity }}
            />
          </BubbleWrapper>
        ))}
        <ProgressBlocker />
      </ProgressBackground>
    </Wrapper>
  );
};

export default BubblingProgress;
