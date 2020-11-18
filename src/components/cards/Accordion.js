import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

const Wrapper = styled.div`
  overflow: hidden;
  max-height: ${(p) => (p.isOpen ? "400px" : "50px")};
`;

const Header = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  width: 100%;
  border: 0;
  padding: 0;
  text-align: left;
  background: transparent;
  color: ${rgba("white", 0.85)};
`;

const Content = styled.div`
  color: ${rgba("white", 0.85)};
  font-weight: 400;
  font-size: 0.875rem;
`;

const Accordion = ({ active, activeColor, items, setActive }) => (
  <div>
    {items.map((item, index) => (
      <Wrapper key={index} isOpen={active === index}>
        <Header onClick={() => setActive(index)}>
          {item.header &&
            React.createElement(item.header, { isOpen: active === index })}
        </Header>
        <Content>{item.content && React.createElement(item.content)}</Content>
      </Wrapper>
    ))}
  </div>
);

export default Accordion;
