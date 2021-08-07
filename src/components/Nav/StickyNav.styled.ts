import styled from 'styled-components';

export const StyledNavContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  & li {
    display: block;
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
`;
