/** @jsxImportSource @emotion/react */

import AniNavigation from '../AniNavigation';

import { mq } from '../../helpers/mediaQueries';

const MainContainer = ({ children }) => {
  return (
    <main
      css={mq({
        width: ['100%', '100%', 'calc(100% - 230px)'],
        marginLeft: ['0px', '0px', '230px'],
        display: 'flex',
        flexWrap: 'wrap'
      })}>
      <AniNavigation />

      <div
        css={mq({
          width: '100%',
          paddingTop: '40px',
          paddingLeft: ['20px', '30px', '30px', '30px', '50px'],
          paddingRight: ['20px', '30px', '30px', '30px', '50px'],
          paddingBottom: '65px'
        })}>
        {children}
      </div>
    </main>
  );
};

export default MainContainer;
