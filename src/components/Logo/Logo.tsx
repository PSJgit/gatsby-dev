import * as React from 'react';
import ZenDeskLogo from '../../assets/zendesk-logo.inline.svg';
import { StyledLogo } from './Logo.styled';

type Props = {
  isSticky: boolean,
}

const Logo = ({ isSticky }: Props) => {
  return (
    <StyledLogo isSticky={isSticky}>
      <ZenDeskLogo/>
    </StyledLogo>
  )
}

export default Logo;