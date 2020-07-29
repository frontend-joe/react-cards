import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const OuterWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 300px;
`;

const moveAnimation = keyframes`
  0% {
    transform: translateX(-1800px);
  }
  100% {
    transform: translateX(2000px);
  }

`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  animation: ${moveAnimation} 90s linear;
`;

const CloudWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: ${props => props.cloudHeight};
  width: 240px;
  transform-origin: center;
`;

const Cloud = styled.img`
  width: 50px;
  transform: scale(${props => props.scale});
`;

class MovingClouds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clouds: []
    };
  }

  componentDidMount() {
    this.generateClouds();
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  generateClouds() {
    let clouds = [];

    const cloud1 = {
      id: this.getRandomArbitrary(0, 10000),
      cloudHeight: "400px",
      scale: 0.75
    };

    const cloud2 = {
      id: this.getRandomArbitrary(0, 10000),
      cloudHeight: "300px",
      scale: 1.5
    };

    const cloud3 = {
      id: this.getRandomArbitrary(0, 10000),
      cloudHeight: "100px",
      scale: 2
    };

    for (let i = 0; i < 25; i++) {
      clouds.push(cloud1);
      clouds.push(cloud2);
      clouds.push(cloud3);
    }

    // for (let i = 0; i < 25; i++) {
    //   const cloud = {
    //     id: this.getRandomArbitrary(0, 10000),
    //     cloudHeight: `${this.getRandomArbitrary(100, 400)}px`,
    //     scale: this.getRandomArbitrary(0.5, 3)
    //   };
    //
    //   clouds.push(cloud);
    // }

    console.log("clouds", clouds);

    this.setState({ clouds });
  }

  render() {
    return (
      <OuterWrapper>
        <Wrapper>
          {this.state.clouds.map(cloud => (
            <CloudWrapper
              style={{ height: cloud.cloudHeight }}
              cloudHeight={cloud.cloudHeight}
            >
              <Cloud
                scale={cloud.scale}
                src={require("../../assets/images/cloud.png")}
              />
            </CloudWrapper>
          ))}
        </Wrapper>
      </OuterWrapper>
    );
  }
}

export default MovingClouds;
