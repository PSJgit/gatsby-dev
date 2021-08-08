import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { StyledSection, StyledHeroText, StyledSideHero, StyledButton, StyledButtonGhost, StyledButtonContainer } from './Hero.styled';
import MiniSlider from '../MiniSlider/MiniSlider';

const heroContent = ['customer', 'no-hassle', 'not waiting on', 'social', 'extra sauce', 'actually having', 'customer'];
const heroContent2 = ['service', 'returns', 'hold forever', 'messaging', 'on the side', 'a nice day', 'service']

const Hero = () => {
  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <StyledHeroText>
              Champions
              <span>of</span>
              <MiniSlider autoPlayInterval={1000} content={heroContent}/>
              <MiniSlider autoPlayInterval={1000} content={heroContent2}/>
            </StyledHeroText>
          </Col>
          <Col>
            <StyledSideHero>
              <p>Zendesk makes customer service better. We build software to meet customer needs, set your team up for success, and keep your business in sync.</p>
              <StyledButtonContainer>
                <StyledButton>Free trial</StyledButton>
                <StyledButtonGhost>View demo</StyledButtonGhost>
              </StyledButtonContainer>
            </StyledSideHero>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  )
}

export default Hero;