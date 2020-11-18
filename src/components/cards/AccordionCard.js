import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import Accordion from "./Accordion";

const Card = styled.div`
  width: 300px;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  background: #191919;
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.175rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${rgba("white", 0.05)};
  color: ${rgba("white", 0.75)};
`;

const CardIcon = styled.span`
  color: ${rgba("white", 0.38)};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  opacity: ${(p) => (p.isOpen ? 1 : 0.5)};
  color: ${rgba("white", 0.85)};
`;

const HeaderText = styled.div`
  margin-left: 0.75rem;
`;

const Icon = styled.span`
  font-size: 1.175rem;
  padding: 0.5rem;
  color: ${(p) =>
    p.isOpen ? p.activeColor || rgba("white", 0.85) : rgba("white", 0.85)};
  border-radius: 6px;
  margin-right: ${(p) => (p.hasColor ? "0.875rem" : 0)};
`;

const Content = styled.div`
  color: ${rgba("white", 0.57)};
  margin-bottom: 0.5rem;
`;

const Content1 = () => (
  <Content>
    This is where we talk about this feature in more detail. We can explain just
    the right amount.
  </Content>
);

const Content2 = () => (
  <Content>
    It could hold information about a particular feature of your amazing new
    website here.
  </Content>
);

const Content3 = () => (
  <Content>
    Another place to display extra information about a particular topic or
    field.
  </Content>
);

// const items = [
//   {
//     color: "#6b35ce",
//     icon: "cloud",
//     title: "Cloud Backup",
//     content: Content1,
//   },
//   {
//     color: "#3579ce",
//     icon: "https",
//     title: "Secure Domain",
//     content: Content2,
//   },
//   {
//     color: "#35c0ce",
//     icon: "hourglass_full",
//     title: "24 Hour Support",
//     content: Content3,
//   },
// ];

const AccordionCard = () => {
  const [active, setActive] = useState(0);

  const Header1 = ({ isOpen }) => (
    <Header isOpen={isOpen}>
      <Icon className="material-icons" style={{ background: "#6b35ce" }}>
        cloud
      </Icon>
      <HeaderText>Cloud Backup</HeaderText>
    </Header>
  );

  const Header2 = ({ isOpen }) => (
    <Header isOpen={isOpen}>
      <Icon className="material-icons" style={{ background: "#3579ce" }}>
        https
      </Icon>
      <HeaderText>Secure Domain</HeaderText>
    </Header>
  );

  const Header3 = ({ isOpen }) => (
    <Header isOpen={isOpen}>
      <Icon className="material-icons" style={{ background: "#35c0ce" }}>
        hourglass_full
      </Icon>
      <HeaderText>24 Hour Support</HeaderText>
    </Header>
  );

  const [items, setItems] = useState([
    {
      header: Header1,
      content: Content1,
    },
    {
      header: Header2,
      content: Content2,
    },
    {
      header: Header3,
      content: Content3,
    },
  ]);

  return (
    <Card>
      <CardTitle>
        <span>Our Services</span>
        <CardIcon className="material-icons">more_horiz</CardIcon>
      </CardTitle>
      <Accordion items={items} active={active} setActive={setActive} />
    </Card>
  );
};

export default AccordionCard;
