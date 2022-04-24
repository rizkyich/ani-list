/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';

import { mq } from '../../helpers/mediaQueries';

import defaultBanner from '../../assets/default-placeholder.png';

const AniCover = ({ image, height, grayOut = false }) => {
  const theme = useTheme();

  return (
    <div
      css={mq({
        width: '100%',
        height: `${height}px`,
        backgroundImage: `url(${image ? image : defaultBanner})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        '&::before': grayOut && {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
          background: `linear-gradient(0deg, ${theme.colors.bold}, white)`,
          opacity: [0, 0, 0.65]
        }
      })}
    />
  );
};

export default AniCover;
