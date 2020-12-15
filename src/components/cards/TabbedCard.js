import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import woman1 from "assets/images/woman1.jpg";
import woman2 from "assets/images/woman2.png";
import woman3 from "assets/images/woman3.jpg";

const transition = "0.45s";

const Card = styled.div`
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 240px;
  padding: 1rem 0;
  border-radius: 3rem;
  background: #190835;
`;

const Row = styled.div`
  display: flex;
  position: relative;
`;

const Button = styled.button`
  flex: 1 1 33.33%;
  height: 56px;
  border: 0;
  border-bottom: 1px solid ${rgba("white", 0.25)};
  font-size: 0.875rem;
  color: ${(p) => rgba("white", p.isActive ? 0.85 : 0.25)};
  background: transparent;
`;

const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 33.33%;
  height: 4px;
  background: #6b44a9;
  transform: translateX(${(p) => (p.active === 0 ? 0 : p.active * 100)}%);
  transition: transform ${transition};
`;

const Content = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  transform: translateX(
    ${(p) => (p.active === 0 ? 0 : `-${p.active * 300}px`)}
  );
  transition: transform ${transition};
`;

const Tab = styled.div`
  width: 300px;
`;

const ContentRow = styled.div`
  display: flex;
  align-items: center;
  height: 160px;
  padding: 0 2rem;
`;

const ContentImageWrapper = styled.div`
  flex: 0 0 100px;
  margin-right: 1rem;
  padding: 5px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid ${rgba("white", 0.05)};
  transition: border-color 0.35s;

  &:hover {
    border-color: ${rgba("white", 0.25)};
  }
`;

const ContentImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const ContentTitle = styled.div`
  font-size: 0.975rem;
  margin-bottom: 0.325rem;
  color: ${rgba("white", 0.85)};
`;

const ContentText = styled.div`
  font-size: 0.75rem;
  color: ${rgba("white", 0.5)};
`;

const TabbedCard = () => {
  const [active, setActive] = useState(0);
  return (
    <Card>
      <Row>
        <Underline active={active} />
        <Button isActive={active === 0} onClick={() => setActive(0)}>
          Vibrant
        </Button>
        <Button isActive={active === 1} onClick={() => setActive(1)}>
          Pretty
        </Button>
        <Button isActive={active === 2} onClick={() => setActive(2)}>
          Natural
        </Button>
      </Row>
      <Content active={active}>
        <Tab>
          <ContentRow>
            <ContentImageWrapper>
              <ContentImage src={woman1} />
            </ContentImageWrapper>
            <div>
              <ContentTitle>Vibrant</ContentTitle>

              <ContentText>
                This years hot new look with a hint of purple
              </ContentText>
            </div>
          </ContentRow>
        </Tab>
        <Tab>
          <ContentRow>
            <ContentImageWrapper>
              <ContentImage src={woman2} />
            </ContentImageWrapper>
            <div>
              <ContentTitle>Pretty</ContentTitle>

              <ContentText>
                This years hot new look with a hint of purple
              </ContentText>
            </div>
          </ContentRow>
        </Tab>
        <Tab>
          <ContentRow>
            <ContentImageWrapper>
              <ContentImage src={woman3} />
            </ContentImageWrapper>
            <div>
              <ContentTitle>Natural</ContentTitle>

              <ContentText>
                This years hot new look with a hint of purple
              </ContentText>
            </div>
          </ContentRow>
        </Tab>
      </Content>
    </Card>
  );
};

export default TabbedCard;
