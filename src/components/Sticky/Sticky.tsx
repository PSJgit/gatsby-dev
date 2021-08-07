import React, { useState, useEffect, useRef } from "react"
import { StyledSticky } from './Sticky.styled';

type Props = {
  children: React.ReactNode,
}

const Sticky = ({ children }: Props) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky((!isSticky && window.pageYOffset > 0));
  }

  // This should be throttled for better performance
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  return (
    <StyledSticky
      isSticky={isSticky}
      ref={ref}
    >
      {React.cloneElement(children as React.ReactElement<any>, {isSticky: isSticky})}
    </StyledSticky>
  )
}

export default Sticky;
