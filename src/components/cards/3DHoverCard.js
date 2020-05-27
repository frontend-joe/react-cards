import React, { Component } from "react";
import styled from "styled-components";
import { rgba } from "polished";

const cardWidth = 300;
const degIncrement = 0.2;

const Wrapper = styled.div`
  perspective: 30px;
`;

const Card = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 300px;
  width: 300px;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: white;
  background-image: url(${require("../../assets/images/landscape.jpg")});
  background-size: 115%;
  background-repeat: no-repeat;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.15);
  transition: transform 0.5s;
`;

const CardTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: ${rgba("#090C22", 0.85)};
`;

const CardSubtitle = styled.div`
  color: ${rgba("#090C22", 0.57)};
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

class HoverCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onMouseMove = e => {
    const event = e || window.event;
    const target = event.target || event.srcElement;
    const rect = target.getBoundingClientRect();

    const getRotateDeg = input => {
      if (input < cardWidth * 0.33) {
        return `${degIncrement * 2}deg`;
      } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
        return `${degIncrement}deg`;
      } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
        return "0deg";
      } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
        return `-${degIncrement}deg`;
      } else {
        return `-${degIncrement * 2}deg`;
      }
    };

    const rotateX = getRotateDeg(window.event.clientY - rect.top);
    const rotateY = getRotateDeg(window.event.clientX - rect.left);

    this.setState({ rotateX, rotateY });
  };

  onMouseLeave = () => {
    this.setState({ rotateX: "0deg", rotateY: "0deg" });
  };

  render() {
    const { rotateX, rotateY } = this.state;
    return (
      <Wrapper>
        <Card
          style={{ transform: `rotateX(${rotateX}) rotateY(${rotateY})` }}
          onMouseMove={this.onMouseMove}
          onMouseLeave={this.onMouseLeave}
        >
          <CardTitle>Destination</CardTitle>
          <CardSubtitle>Book your next trip</CardSubtitle>
        </Card>
      </Wrapper>
    );
  }
}

export default HoverCard;
