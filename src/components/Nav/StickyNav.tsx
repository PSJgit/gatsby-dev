import React, { useState, useEffect, useRef } from "react"
import { Link } from 'gatsby';
import { Container } from 'react-grid-system';
import { StyledNavContainer, StyledSticky } from './StickyNav.styled';

const StickyNav = () => {

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky((!isSticky && window.pageYOffset > 0));
  }

  // This should be throttled for better performance
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  return (
    <StyledSticky isSticky={isSticky}>
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
    </StyledSticky>
  )
}

export default StickyNav;
