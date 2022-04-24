/** @jsxImportSource @emotion/react */

import DekstopNav from './components/DekstopNav';
import MobileNav from './components/MobileNav';

import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { mdBreakPoint } from '../../constants';

const AniNavigation = () => {
  const { width } = useWindowDimensions();

  const matchMobileDisplay = width <= mdBreakPoint;

  return (
    <nav
      css={{
        backgroundColor: 'cyan',
        position: 'fixed',
        display: 'contents',
        overflow: 'hidden',
        width: '230px',
        height: '100vh',
        flexShrink: 0
      }}
    >
      {!matchMobileDisplay ? <DekstopNav /> : <MobileNav />}
    </nav>
  );
};

export default AniNavigation;
