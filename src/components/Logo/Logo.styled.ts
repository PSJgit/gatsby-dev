import styled, { css } from 'styled-components';

interface iLogo {
  isSticky: boolean,
  isMobile: boolean,
}

export const StyledLogo = styled.div<iLogo>`
  & .st0 {
    transition: ${({ theme }) => theme.transitions.fast};
    fill: ${({ isSticky, theme }) => isSticky ? theme.colors.primary : theme.colors.white};
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme, isSticky }) => isSticky ? theme.nav.stickyHeight : theme.nav.height};
  padding: ${({ theme }) => theme.nav.padding};
  width: 170px;
  ${({ isMobile }) => isMobile && css`
    height: 25px;
    padding: 0;
    display: flex;
    & .st0 {
      fill: ${({ theme }) => theme.colors.primary};
    }
  `}
`;