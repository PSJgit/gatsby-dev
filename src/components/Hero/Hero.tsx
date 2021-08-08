import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { StyledSection, StyledHeroText, StyledSideHero, StyledButton, StyledButtonGhost, StyledButtonContainer } from './Hero.styled';
import MiniSlider from '../MiniSlider/MiniSlider';

const heroContent = [
  {text: 'customer', color: '#00a656'},
  {text: 'no-hassle', color: '#00a656'},
  {text: 'not waiting on', color: '#efc93d'},
  {text: 'social', color: '#bdd9d7'},
  {text: 'extra sauce', color: '#f79a3e'},
  {text: 'actually having', color: '#30aabc'},
  {text: 'customer', color: '#00a656'}
];

const heroContent2 = [
  {text: 'service', color: '#30aabc'},
  {text: 'returns', color: '#00a656'},
  {text: 'hold forever', color: '#efc93d'},
  {text: 'messaging', color: '#bdd9d7'},
  {text: 'on the side', color: '#bdd9d7'},
  {text: 'a nice day', color: '#30aabc'},
  {text: 'service', color: '#30aabc'}
]

const Hero = () => {
  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <StyledHeroText>
              <p>Champions of</p>
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