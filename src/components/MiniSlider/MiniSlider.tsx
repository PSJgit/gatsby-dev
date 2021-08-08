import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

type Props = {
  autoPlayInterval: number,
  content: string[],
  callback?: () => void
}

const Container = styled.div`
  overflow: hidden;
  position: relative;
  height: 75px;
`;


interface iSlide {
  animateOn: boolean,
}

const animateTop = () => keyframes`
  from { top: -100px }
  to { top: 0px }
`;

const StyledSlide = styled.div<iSlide>`
  height: auto;
  width: auto;
  transition: 750ms all ease-in-out;
  position: absolute;
  top: 100px;
  ${({ animateOn }) => animateOn && css`
    animation-name: ${animateTop()};
    top: 0;
  `}
`;

const MiniSlider = ({ autoPlayInterval, content }: Props) => {

  const [current, setCurrent] = useState(0);
  const slideLength = content.length;

  function nextSlide() {
    const target = current + 1;
    if (target !== slideLength) {
      setCurrent(target);
    } else {
      console.log('COMPLETE')
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <Container>
      {content.map((item, index) => (
        <StyledSlide key={index} animateOn={index === current} >
          {item}
        </StyledSlide>
      ))}
    </Container>
  );
};

export default MiniSlider;
