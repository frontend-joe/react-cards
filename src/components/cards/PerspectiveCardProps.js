import React, { Component } from "react";
import styled from "styled-components";
import { rgba } from "polished";

const Container = styled.div`
  perspective: 30px;
`;

const Card = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 150px;
  width: 150px;
  border-radius: 0.5rem;
  background: white;
  background-image: url(${props => props.cardImage});
  background-size: ${props => props.cardImageSize};
  background-repeat: no-repeat;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.15);
  transition: transform 0.5s;
`;

const CardContent = styled.div`
  align-self: stretch;
  padding: 1rem;
  background: #ffffff;
`;

const CardTitle = styled.div`
  font-weight: 600;
  font-size: 10px;
  color: ${rgba("#090C22", 0.85)};
`;

const CardSubtitle = styled.div`
  color: ${rgba("#090C22", 0.57)};
  font-size: 9px;
  margin-bottom: 0.5rem;
`;

class PerspectiveCardProps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onMouseMove = e => {
    const event = e || window.event;
    const target = event.target || event.srcElement;
    const rect = target.getBoundingClientRect();
    const degIncrement = 0.35;
    const cardWidth = 150;

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
    const { cardTitle, cardSubtitle, cardImage, cardImageSize } = this.props;
    const { rotateX, rotateY } = this.state;
    return (
      <Container>
        <Card
          cardImage={cardImage}
          cardImageSize={cardImageSize}
          style={{ transform: `rotateX(${rotateX}) rotateY(${rotateY})` }}
          onMouseMove={this.onMouseMove}
          onMouseLeave={this.onMouseLeave}
        >
          <CardContent>
            <CardTitle>{cardTitle}</CardTitle>
            <CardSubtitle>{cardSubtitle}</CardSubtitle>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default PerspectiveCardProps;
