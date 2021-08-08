import styled, { css } from 'styled-components';

interface iBurger {
  isActive: boolean,
}

export const StyledHamburger = styled.button<iBurger>`
  cursor: pointer;
  & .line {
    width: 28px;
    height: 2px;
    display: block;
    margin: 6px auto;
    transition: all 0.3s ease-in-out;
    background: ${({ theme }) => theme.colors.primary}
  }
  ${({ isActive }) => isActive && css`
    & .line:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }
    & .line:nth-child(2) {
      opacity: 0;
    }
    & .line:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  `}
`;
