import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <NavContainer>
      <NavItems>
        <Link to='/'>
          <NavItem>Home</NavItem>
        </Link>
        <Link to='/counter'>
          <NavItem>Counter</NavItem>
        </Link>
        <Link to='/form'>
          <NavItem>Form</NavItem>
        </Link>
        <Link to='/cocktails'>
          <NavItem>Cocktails</NavItem>
        </Link>
        <Link to='/todos'>
          <NavItem>Todos</NavItem>
        </Link>
      </NavItems>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
  box-shadow: 2px 2px 10px #636363;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  font-size: 2rem;
  color: white;
  padding: 1.5rem 2rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
    cursor: pointer;
    color: #dddddd;
  }
`;
