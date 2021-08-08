import React from 'react';
import ZenDeskLogo from '../../assets/zendesk-logo.inline.svg';
import { StyledLogo } from './Logo.styled';

type Props = {
  isSticky: boolean,
  isMobile?: boolean,
}

const Logo = ({ isSticky, isMobile = false }: Props) => {
  return (
    <StyledLogo isSticky={isSticky} isMobile={isMobile}>
      <ZenDeskLogo/>
    </StyledLogo>
  )
}

export default Logo;