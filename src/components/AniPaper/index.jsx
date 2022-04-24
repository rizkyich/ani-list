/** @jsxImportSource @emotion/react */

import { mq } from '../../helpers/mediaQueries';
import { breakPoints } from '../../constants';

const AniPaper = ({ container = false, collection = false, children }) => {
  return (
    <div
      css={mq({
        width: '100%',
        display: container ? 'grid' : 'block',
        paddingTop: '40px',
        paddingLeft: ['0px', '0px', '0px', '0px', '30px'],
        paddingRight: ['0px', '0px', '0px', '0px', '30px'],
        paddingBottom: '40px',
        ...(container
          ? {
              gridTemplateColumns: collection
                ? [
                    '1fr',
                    'repeat(2, minmax(0, 1fr))',
                    'repeat(2, minmax(0, 1fr))',
                    'repeat(3, minmax(0, 1fr))'
                  ]
                : ['1fr', '1fr', '1fr', 'repeat(2, minmax(0, 1fr))']
            }
          : {})
      })}
    >
      {children}
    </div>
  );
};

export default AniPaper;