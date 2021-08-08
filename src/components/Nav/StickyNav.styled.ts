import styled from 'styled-components';
interface iSticky {
  isSticky: boolean,
}

export const StyledMainNav = styled.ul<iSticky>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  margin-left: 50px;
  height: ${({ theme, isSticky }) => isSticky ? theme.nav.stickyHeight : theme.nav.height};
  & li {
    display: block;
    padding: ${({ theme }) => theme.nav.padding};
  }
  & li:last-child {
    background: ${({ theme, isSticky }) => isSticky ? theme.colors.primary : theme.colors.tertiary};
    color: ${({ theme, isSticky }) => isSticky ? theme.colors.white : theme.colors.secondary};
    transition: ${({ theme }) => theme.transitions.fast};
  }
`; 

export const StyledAltNav = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0 20px 0;
  font-size: 11px;
  & li {
    display: block;
    padding-left: 10px;
  }
`; 

export const StyledSticky = styled.div<iSticky>`
  position: ${({ isSticky }) => isSticky ? 'fixed' : 'relative'};
  background: ${({ isSticky, theme }) => isSticky ? theme.colors.white : theme.colors.primary};
  color: ${({ isSticky, theme }) => isSticky ? theme.colors.secondary : theme.colors.white};
  top: 0;
  width: 100%;
  height: ${({ theme, isSticky }) => isSticky ? theme.nav.stickyHeight : theme.nav.height};
`;


