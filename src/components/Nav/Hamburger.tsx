import React, { useState } from 'react';
import { StyledHamburger } from './Hamburger.styled';

const Hamburger = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
   <StyledHamburger onClick={handleClick} isActive={isActive}>
      <span className='line'></span>
      <span className='line'></span>
      <span className='line'></span>
   </StyledHamburger>
  )
}

export default Hamburger;
