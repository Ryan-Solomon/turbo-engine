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
      </NavItems>
    </NavContainer>
  );
};

const NavContainer = styled.nav``;

const NavItems = styled.ul``;

const NavItem = styled.li``;
