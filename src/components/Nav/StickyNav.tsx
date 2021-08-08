import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-grid-system';
import { useMediaQuery } from 'react-responsive';
import breakpoints from '../../theme/breakpoints/breakpoints';
import Logo from '../Logo/Logo';
import Hamburger from "./Hamburger";
import { StyledMainNav, StyledAltNav, StyledSticky, StyledMobileNav, StyledFlex } from './StickyNav.styled';

const StickyNav = () => {

  const isXs = useMediaQuery({query: `(min-width: ${breakpoints.xs})`});
  const isSm = useMediaQuery({query: `(min-width: ${breakpoints.sm})`});

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
    <>
      {isSm && 
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
              <Col xs={1} md={2}>
                <Logo isSticky={isSticky}/>
              </Col>
              <Col xs={11} md={10}>
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
      }
      {(isXs && !isSm) && 
        <StyledSticky isSticky={isSticky}>
          <StyledMobileNav>
            <Logo isSticky={isSticky} isMobile/>
            <StyledFlex>
              <p>Contact Us</p>
              <Hamburger />
            </StyledFlex>
          </StyledMobileNav>
        </StyledSticky>
      }
    </>   
  )
}

export default StickyNav;
