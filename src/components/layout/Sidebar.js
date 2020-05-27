import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledSidebar = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 84px;
  height: 100%;
  background: black;
  color: white;
  padding: 1rem 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  width: 100%;
  color: white;
  text-decoration: none;

  &.active {
    color: pink;
  }
`;

const Sidebar = props => (
  <StyledSidebar>
    <StyledNavLink exact to="/">
      First
    </StyledNavLink>
    <StyledNavLink exact to="/result-slide">
      Result
    </StyledNavLink>
    <StyledNavLink exact to="/example-slide">
      Example
    </StyledNavLink>
    <StyledNavLink exact to="/last-slide">
      Last
    </StyledNavLink>
  </StyledSidebar>
);

export default Sidebar;
