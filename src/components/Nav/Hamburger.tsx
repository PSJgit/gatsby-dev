import React from 'react';
import { StyledHamburger } from './Hamburger.styled';

type Props = {
  isActive: boolean,
}

const Hamburger = ({ isActive }: Props) => {
  return (
   <StyledHamburger isActive={isActive}>hambuger</StyledHamburger>
  )
}

export default Hamburger;
