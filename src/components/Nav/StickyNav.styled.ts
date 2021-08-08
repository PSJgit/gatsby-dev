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
    position: relative;
    @media only screen and ${({ theme }) => theme.breakpoints.xs}{
      padding: ${({ theme }) => theme.nav.xsPadding};
      font-size: 12px;
    }
    @media only screen and ${({ theme }) => theme.breakpoints.lg}{
      padding: ${({ theme }) => theme.nav.padding};
    }
  }
  & li:last-child {
    background: ${({ theme, isSticky }) => isSticky ? theme.colors.primary : theme.colors.tertiary};
    color: ${({ theme, isSticky }) => isSticky ? theme.colors.white : theme.colors.secondary};
    transition: ${({ theme }) => theme.transitions.fast};
    cursor: pointer;
  }
  & li:last-child:hover {
    background: ${({ theme, isSticky }) => isSticky ? theme.colors.black : theme.colors.white};
  }
  & li:not(:last-child):after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${({ theme }) => theme.colors.white};
    transition: ${({ theme }) => theme.transitions.fastest};
    width: 0;
  }
  & li:hover:after {
    width: 60%; 
    left: 20%; 
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
  z-index: ${({ theme }) => theme.zIndex.top};
  background: ${({ isSticky, theme }) => isSticky ? theme.colors.white : theme.colors.primary};
  color: ${({ isSticky, theme }) => isSticky ? theme.colors.secondary : theme.colors.white};
  top: 0;
  width: 100%;
`;

export const StyledMobileNav = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 16px;
  height: 62px;
  align-items: center;
  & p {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    margin-right: 16px;
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;