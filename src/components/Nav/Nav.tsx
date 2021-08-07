import * as React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-grid-system';
import { StyledNavContainer } from './Nav.styled';

const Nav = () => {
  return (
    <Container>
      <nav className='main-nav'>
        <StyledNavContainer>
          <li>Products</li>
          <li>Pricing</li>
          <li>Solutions</li>
          <li>Demo</li>
          <li>Services</li>
          <li>Resources</li>
          <li>Free Trial</li>
        </StyledNavContainer>
      </nav>
    </Container>

  )
}

export default Nav;