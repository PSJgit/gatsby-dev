import breakpoints from './breakpoints/breakpoints';

const Theme = {
  fonts: {
    primary: 'sans-serif',
  },
  colors: {
    primary: '#17494d',
    secondary: '#03363d',
    tertiary: '#ece0ce',
    white: '#ffffff',
    black: '#012b30',
    accent1: '#ce9fb7',
    accent2: '#fed6a8',
    accent3: '#00a656',
    accent4: '#30aabc',
  },
  nav: {
    height: '50px',
    stickyHeight: '90px',
    padding: '10px 30px 13px',
    xsPadding: '10px 10px 13px',
  },
  transitions: {
    fast: 'all .5s',
    fastest: 'all .2s',
  },
  zIndex: {
    top: 1000,
    mid: 500,
    bottom: 0,
  },
  breakpoints: {
    mob: `(min-width: ${breakpoints.mob})`,
    xs: `(min-width: ${breakpoints.xs})`,
    sm: `(min-width: ${breakpoints.sm})`,
    lg: `(min-width: ${breakpoints.lg})`,
  }
}

export default Theme;