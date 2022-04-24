import { keyframes } from '@emotion/react';

export const bounce = keyframes({
  'from, 20%, 53%, 80%, to': {
    transform: 'translate3d(0,0,0)'
  },
  '40%, 43%': {
    transform: 'translate3d(0, -10px, 0)'
  },
  '70%': {
    transform: 'translate3d(0, -3px, 0)'
  },
  '90%': {
    transform: 'translate3d(0, -2px, 0)'
  }
});

export const navContainer = {
  position: 'fixed',
  bottom: 0,
  top: 'auto',
  width: '100%',
  height: '60px',
  overflowX: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '99'
};

export const linkMobile = {
  width: '50%',
  height: '100%',
  transition: '250ms ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

export const textNav = {
  fontSize: '.75rem',
  marginTop: '.25rem'
};
