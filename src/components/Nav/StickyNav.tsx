import React, { useState, useEffect } from "react"
import { Container, Row, Col } from 'react-grid-system';
import Logo from '../Logo/Logo';
import { StyledMainNav, StyledAltNav, StyledSticky } from './StickyNav.styled';

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
        {!isSticky && 
          <Row>
            <Col>
              <nav className='alt-nav'>
                <StyledAltNav>
                  <li>Sign in</li>
                  <li>Product Support</li>
                  <li>Company</li>
                  <li>Contact us</li>
                  <li>English</li>
                </StyledAltNav>
              </nav>
            </Col>
          </Row>
        }
        <Row>
          <Col xs={2}>
            <Logo isSticky={isSticky}/>
          </Col>
          <Col>
            <nav className='main-nav'>
              <StyledMainNav isSticky={isSticky}>
                <li>Products</li>
                <li>Pricing</li>
                <li>Solutions</li>
                <li>Demo</li>
                <li>Services</li>
                <li>Resources</li>
                <li>Free Trial</li>
              </StyledMainNav>
            </nav>
          </Col>
        </Row>
      </Container>
    </StyledSticky>
  )
}

export default StickyNav;
