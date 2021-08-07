import styled from 'styled-components';

export const StyledMainNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  & li {
    display: block;
    padding: 20px;
  }
`; 

export const StyledAltNav = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0 20px 0;
  font-size: 12px;
  & li {
    display: block;
    padding-left: 10px;
  }
`; 
interface iSticky {
  isSticky: boolean,
}

export const StyledSticky = styled.div<iSticky>`
  position: ${({ isSticky }) => isSticky ? 'fixed' : 'relative'};
  background: ${({ isSticky, theme }) => isSticky ? 'white' : theme.colors.primary};
  top: 0;
  width: 100%;
  height: 90px;
`;


