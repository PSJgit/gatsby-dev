import React, { useState, useEffect } from 'react';
import { StyledContainer, StyledSlide } from './MiniSlider.styled';

type Props = {
  autoPlayInterval: number,
  content: Content[],
  callback?: () => void,
  delay?: number,
}

type Content = {
  text: string,
  color: string,
}

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
    <StyledContainer>
      {content.map((content, index) => (
        <StyledSlide key={index} animateOn={index === current} color={content.color}>
          {content.text}
        </StyledSlide>
      ))}
    </StyledContainer>
  );
};

export default MiniSlider;
