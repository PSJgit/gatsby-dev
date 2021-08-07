import { ReactNode, useMemo, useReducer } from 'react';
import HeroContext from './HeroContext';
import { initialState } from './HeroContext';

const { Provider } = HeroContext;

type Props = {
  children: ReactNode;
};

const HeroReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_COMPLETE': 
      return {...state, complete: action.payload};
    case 'RESET':
      return initialState;
    case 'SET_ERROR':
      return { ...state, error: true};
    default:
      throw new Error();
  }
};

const HeroProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(HeroReducer, initialState);
  
  const setComplete = (payload: any) => {
    dispatch({ type: 'SET_COMPLETE', payload});
  }

  const value = useMemo(
    () => ({
      complete: state.complete,
      error: false,
      setComplete,
    }),
    [state.complete],
  );
  return <Provider value={value}>{children}</Provider>;
};

export default HeroProvider;