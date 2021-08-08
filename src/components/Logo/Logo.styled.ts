import styled from 'styled-components';

interface iSticky {
  isSticky: boolean,
}

export const StyledLogo = styled.div<iSticky>`
  & .st0 {
    fill: ${({ isSticky, theme }) => isSticky ? theme.colors.primary : theme.colors.white};
  }
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme, isSticky }) => isSticky ? theme.nav.stickyHeight : theme.nav.height};
  padding: ${({ theme }) => theme.nav.padding};
`;