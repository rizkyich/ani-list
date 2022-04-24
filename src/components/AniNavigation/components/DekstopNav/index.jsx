/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { NavLink, useLocation } from 'react-router-dom';
import { SiAnilist } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
import { BsFillCollectionFill } from 'react-icons/bs';

import { desktopNav, brandIcon, linkContainer, linkItem } from './styles';

const DekstopNav = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <div
      css={{
        ...desktopNav,
        backgroundColor: theme.colors.primary
      }}>
      <div css={{ ...brandIcon, color: theme.colors.secondary }}>
        <SiAnilist size={70} />
      </div>

      <div css={linkContainer}>
        <div css={{ paddingLeft: '1.5rem' }}>
          <NavLink
            to="/"
            css={{
              ...linkItem,
              borderBottom: `1px solid ${theme.colors.secondary}`,
              color: location.pathname === '/' ? theme.colors.primary : theme.colors.secondary,
              backgroundColor:
                location.pathname === '/' ? theme.colors.secondary : theme.colors.primary,
              '&:hover': {
                backgroundColor: theme.colors.secondary,
                color: theme.colors.primary
              }
            }}>
            <AiFillHome />
            <p>Home</p>
          </NavLink>
        </div>

        <div css={{ paddingLeft: '1.5rem' }}>
          <NavLink
            to="/collections"
            css={{
              ...linkItem,
              borderBottom: `1px solid ${theme.colors.secondary}`,
              color:
                location.pathname === '/collections'
                  ? theme.colors.primary
                  : theme.colors.secondary,
              backgroundColor:
                location.pathname === '/collections'
                  ? theme.colors.secondary
                  : theme.colors.primary,
              '&:hover': {
                backgroundColor: theme.colors.secondary,
                color: theme.colors.primary
              }
            }}>
            <BsFillCollectionFill />
            <p>Collections</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DekstopNav;
