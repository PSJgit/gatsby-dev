import styled from 'styled-components';

interface iSticky {
  isSticky: boolean,
}

export const StyledSticky = styled.div<iSticky>`
  position: ${({ isSticky }) => isSticky ? 'fixed' : 'relative'};
  top: 0;
  width: 100%;
`;
