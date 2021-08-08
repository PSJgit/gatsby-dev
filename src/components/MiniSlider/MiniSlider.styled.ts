import styled, { css, keyframes } from 'styled-components';

export const StyledContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 95px;
`;

interface iSlide {
  animateOn: boolean,
  color: string,
}

export const animateTop = () => keyframes`
  from { top: -100px }
  to { top: 0px }
`;

export const StyledSlide = styled.div<iSlide>`
  height: auto;
  width: auto;
  transition: 750ms all ease-in-out;
  position: absolute;
  top: 100px;
  color: ${({ color }) => color};
  ${({ animateOn }) => animateOn && css`
    animation-name: ${animateTop()};
    top: 0;
  `}
`;