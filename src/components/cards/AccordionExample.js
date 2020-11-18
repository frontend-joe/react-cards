import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import Accordion from "./Accordion";

const Page = styled.div`
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 450px;
  border-radius: 1rem;
  display: flex;
  align-items: stretch;
`;

const Content = styled.div`
  background: white;
  flex: 1 1 auto;
  padding: 2rem;
`;

const Skeleton = styled.div`
  width: ${(p) => p.width || "100px"};
  height: 10px;
  margin: ${(p) => p.margin || "0 0 1rem"};
  border-radius: 5px;
  opacity: 0.1;
  background: linear-gradient(to right, #e7e7e7, #191919);
`;

const Sidebar = styled.div`
  width: 200px;
  height: 100%;
  padding: 1rem;
  background: #191919;
`;

const colorActive = rgba("white", 0.38);
const colorHover = rgba("white", 0.65);

const Icon = styled.span`
  font-size: 16px;
  margin-right: 0.5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  opacity: ${(p) => (p.isOpen ? 1 : 0.5)};
  color: ${rgba("white", 0.85)};
`;

const HeaderText = styled.div`
  margin-left: 0.325rem;
  font-size: 0.875rem;
`;

const HeaderIcon = styled.span`
  font-size: 1.175rem;
  color: ${(p) =>
    p.isOpen ? p.activeColor || rgba("white", 0.85) : rgba("white", 0.85)};
  border-radius: 6px;
  margin-right: ${(p) => (p.hasColor ? "0.875rem" : 0)};
`;

const Text = styled.span``;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  text-align: left;
  font-size: 0.75rem;
  background: transparent;
  border: 0;
  padding: 0 0.6rem;

  & > ${Icon}, & > ${Text} {
    color: ${colorActive};
  }

  &:hover > ${Icon}, &:hover > ${Text} {
    color: ${colorHover};
  }
`;

const Header1 = ({ isOpen }) => (
  <Header isOpen={isOpen}>
    <HeaderIcon className="material-icons">dashboard</HeaderIcon>
    <HeaderText>Dashboard</HeaderText>
  </Header>
);

const Header2 = ({ isOpen }) => (
  <Header isOpen={isOpen}>
    <HeaderIcon className="material-icons">support</HeaderIcon>
    <HeaderText>Support</HeaderText>
  </Header>
);

const Header3 = ({ isOpen }) => (
  <Header isOpen={isOpen}>
    <HeaderIcon className="material-icons">settings</HeaderIcon>
    <HeaderText>Settings</HeaderText>
  </Header>
);

const Content1 = () => (
  <>
    <MenuButton>
      <Icon className="material-icons">analytics</Icon>
      <Text>Analytics</Text>
    </MenuButton>
    <MenuButton>
      <Icon className="material-icons">emoji_objects</Icon>
      <Text>Brainstorm</Text>
    </MenuButton>
    <MenuButton>
      <Icon className="material-icons">emoji_events</Icon>
      <Text>Awards</Text>
    </MenuButton>
  </>
);

const Content2 = () => (
  <>
    <MenuButton>
      <Icon className="material-icons">opacity</Icon>
      <Text>Charts</Text>
    </MenuButton>
    <MenuButton>
      <Icon className="material-icons">favorite_border</Icon>
      <Text>Mentions</Text>
    </MenuButton>
    <MenuButton>
      <Icon className="material-icons">star_rate</Icon>
      <Text>Motivation</Text>
    </MenuButton>
  </>
);

const Content3 = () => <></>;

const items = [
  {
    icon: "dashboard",
    title: "Dashboard",
    content: Content1,
    header: Header1,
  },
  {
    icon: "help_center",
    title: "Support",
    content: Content2,
    header: Header2,
  },
  {
    icon: "settings",
    title: "Settings",
    header: Header3,
  },
  {
    icon: "chat",
    title: "Chat",
  },
];

const AccordionExample = ({}) => {
  const [active, setActive] = useState(-1);

  return (
    <Page>
      <Sidebar>
        <Skeleton margin="1rem 0 1rem" />
        <Accordion
          activeColor="#8260d3"
          animated
          items={items}
          active={active}
          setActive={setActive}
        />
      </Sidebar>
      <Content>
        <Skeleton />
      </Content>
    </Page>
  );
};

export default AccordionExample;
