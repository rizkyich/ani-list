/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';

import AniBanner from '../../../../components/AniBanner';

import { mq } from '../../../../helpers/mediaQueries';

const DetailView = ({ anime }) => {
  const theme = useTheme();

  return (
    <div>
      <AniBanner image={anime.bannerImage} height={200} />
      <div css={mq({ padding: ['0px', '0px', '20px 0', '0 40px'] })}>
        <h2 css={{ color: theme.colors.secondary, margin: '35px 0 25px 0' }}>
          {anime.title.romaji}
        </h2>

        <div css={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
          <img src={anime.coverImage.medium} alt={anime.title.romaji} />

          <div css={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <p>Episodes: {anime.episodes}</p>
            <p>Year aired: {anime.seasonYear}</p>
            <p>Score: {anime.averageScore}</p>
          </div>
        </div>

        <div>
          <h3 css={{ marginBottom: '5px' }}>Description:</h3>
          <div
            css={{ textAlign: 'justify' }}
            dangerouslySetInnerHTML={{ __html: anime.description }}></div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
