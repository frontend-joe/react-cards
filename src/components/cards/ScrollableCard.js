import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import styled from "styled-components";
import { rgba } from "polished";

const Card = styled.div`
  position: relative;
  width: 300px;
  height: 440px;
  overflow: hidden;
  border-radius: 1rem;
  background: white;
  padding-top: 7rem;
  box-shadow: 0 4px 15px ${rgba("black", 0.05)};
`;

const Topbar = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: linear-gradient(90deg, #8000e0 20%, #01ced8 70%);
  transform: translate(-50%, -86%);
  padding-bottom: 3rem;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%) rotate(45deg);
    width: 16px;
    height: 16px;
    background: white;
  }
`;

const navProps = { isActive: Boolean };
const NavButton = styled("div", navProps)`
  color: ${props => rgba("white", props.isActive ? 0.85 : 0.5)};
  padding: 0 2rem;
  transform: scale(${props => (props.isActive ? 2 : 1)})
    translateY(${props => (props.isActive ? "8px" : "0")});
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${rgba("black", 0.05)};

  &:last-child {
    border: 0;
  }
`;

const Message = styled.div`
  font-size: 0.75rem;
  color: ${rgba("black", 0.625)};
  margin-bottom: 0.325rem;
`;

const Name = styled.div`
  font-weight: 700;
  color: ${rgba("black", 0.75)};
`;

const iconProps = { color: String };
const ListItemIcon = styled("div", iconProps)`
  text-transform: uppercase;
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  background: ${props => props.color};
  border-radius: 50%;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 1rem;
`;

const MessageIcon = styled.span`
  color: ${rgba("black", 0.3)};
  display: flex;
  align-items: center;

  & > i,
  & > span {
    font-size: 0.75rem;
  }

  & > span {
    margin: 0 0.5rem 0 0.25rem;
  }
`;

const ScrollableCard = () => {
  const [items] = useState([
    { id: 1, name: "Jane", color: "#00A6ED" },
    { id: 2, name: "Henry", color: "#E84855" },
    { id: 3, name: "Kwame", color: "#5fb38b" },
    { id: 4, name: "Nilam", color: "#00A6ED" },
    { id: 5, name: "Ted", color: "#E84855" },
    { id: 6, name: "Dipika", color: "#5fb38b" }
  ]);

  const [navItems] = useState([
    { icon: "pending" },
    { icon: "maps_ugc", isActive: true },
    { icon: "offline_bolt" }
  ]);

  return (
    <Card>
      <Topbar>
        {navItems.map(n => (
          <NavButton isActive={n.isActive} className="material-icons-outlined">
            {n.icon}
          </NavButton>
        ))}
      </Topbar>
      <Scrollbars autoHide>
        {items.map(item => (
          <ListItem>
            <ListItemIcon color={item.color}>
              {item.name.substr(0, 2)}
            </ListItemIcon>
            <div>
              <Name>{item.name}</Name>
              <Message>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eros lectus, vehicula quis commodo eu ...
              </Message>
              <MessageIcon>
                <i className="material-icons-outlined">favorite_border</i>
                <span>51</span>
                <i className="material-icons-outlined">visibility</i>
                <span>12</span>
                <i className="material-icons-outlined">bookmark_outline</i>
                <span>8</span>
              </MessageIcon>
            </div>
          </ListItem>
        ))}
      </Scrollbars>
    </Card>
  );
};

export default ScrollableCard;
