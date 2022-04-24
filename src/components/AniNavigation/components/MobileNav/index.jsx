/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillCollectionFill, BsDot } from 'react-icons/bs';

import { bounce, navContainer, linkMobile, textNav } from './styles';

const MobileNav = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <div
      css={{
        ...navContainer,
        backgroundColor: theme.colors.primary,
        boxShadow: theme.shadow.primary
      }}>
      <NavLink
        to="/"
        css={{
          ...linkMobile,
          borderRight: '.5px solid white',
          color: location.pathname === '/' ? theme.colors.secondary : '#fff',
          '&:hover': {
            color: theme.colors.secondary
          }
        }}>
        {location.pathname === '/' && (
          <BsDot
            css={{
              animation: `${bounce} 1s forwards`
            }}
          />
        )}
        <AiFillHome />
        {!(location.pathname === '/') && <p css={textNav}>Home</p>}
      </NavLink>
      <NavLink
        to="/collections"
        css={{
          ...linkMobile,
          borderLeft: '.5px solid white',
          color: location.pathname === '/collections' ? theme.colors.secondary : '#fff',
          '&:hover': {
            color: theme.colors.secondary
          }
        }}>
        {location.pathname === '/collections' && (
          <BsDot
            css={{
              animation: `${bounce} 1s forwards`
            }}
          />
        )}
        <BsFillCollectionFill />
        {location.pathname !== '/collections' && <p css={textNav}>Collections</p>}
      </NavLink>
    </div>
  );
};

export default MobileNav;
