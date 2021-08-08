import styled from 'styled-components';

export const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  min-height: 38rem;
  padding-top: 100px;
`;

export const StyledHeroText = styled.div`
  font-size: 72px;
  font-weight: bold;
  color: #ce9fb7;
`;

export const StyledSideHero = styled.div`
  font-size: 20px; 
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  & p {
    margin-bottom: 24px;
  }
  padding-top: 50px;
`;

export const StyledButton = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  padding: 13px 24px 12px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledButtonGhost = styled.div`
  border: ${({ theme }) => `2px solid ${theme.colors.tertiary}`};
  color: ${({ theme }) => theme.colors.tertiary};
  transition: ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  padding: 12px 24px 11px;
  margin-left: 15px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
`;