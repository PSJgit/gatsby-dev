import { createContext } from 'react';

type HeroContextValue = {
  complete: boolean,
}

export const initialState = {
  complete: false,
}

const HeroContext = createContext<HeroContextValue>(initialState);

export default HeroContext;