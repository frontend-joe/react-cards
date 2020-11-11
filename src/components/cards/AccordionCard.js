import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";

const Card = styled.div`
  width: 300px;
  padding: 1.5rem 2rem;
  border-radius: 3rem;
  background: #191919;
`;

const Wrapper = styled.div`
  overflow: hidden;
  max-height: ${(p) => (p.isOpen ? "400px" : "56px")};
`;

const Header = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 56px;
  width: 100%;
  border: 0;
  padding: 0;
  text-align: left;
  background: transparent;
  border-bottom: 2px solid ${rgba("white", 0.05)};
`;

const HeaderText = styled.div`
  margin-left: 1rem;
  color: ${(p) => (p.isOpen ? rgba("white", 0.85) : " #535156")};
`;

const Content = styled.div`
  padding: 0.75rem 0;
  color: ${rgba("white", 0.85)};
  font-weight: 400;
  font-size: 0.875rem;
`;

const Icon = styled.span`
  font-size: 18px;
  padding: 8px;
  color: white;
  border-radius: 6px;
  opacity: ${(p) => (p.isOpen ? 1 : 0.5)};
`;

const items = [
  { color: "#6b35ce", icon: "backup", title: "Cloud Backup" },
  { color: "#3579ce", icon: "https", title: "Secure Domain" },
  { color: "#35c0ce", icon: "hourglass_full", title: "24 Hour Support" },
];

const AccordionCard = () => {
  const [active, setActive] = useState(0);

  return (
    <Card>
      {items.map((item, index) => (
        <Wrapper key={index} isOpen={active === index}>
          <Header onClick={() => setActive(index)}>
            <Icon
              isOpen={active === index}
              className="material-icons"
              style={{ background: item.color }}
            >
              {item.icon}
            </Icon>
            <HeaderText isOpen={active === index}>{item.title}</HeaderText>
          </Header>
          <Content>
            This is where we talk about this feature in more detail. We can
            explain just the right amount.
          </Content>
        </Wrapper>
      ))}
    </Card>
  );
};

export default AccordionCard;
