/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';

import AniBanner from '../AniBanner';
import AniButton from '../AniButton';

import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { mq } from '../../helpers/mediaQueries';
import { mdBreakPoint } from '../../constants';

import {
  cardContainer,
  card,
  imageCard,
  coverImage,
  cardTitle,
  collectionButton,
  scoreCard
} from './styles';

const AniCard = ({
  id,
  collection = false,
  removeOnly = false,
  title,
  cover,
  banner,
  onClickItem,
  onClickEdit,
  onClickRemove
}) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  const matchMobileDisplay = width <= mdBreakPoint;

  return (
    <div css={mq({ ...cardContainer, padding: ['15px 5px', '15px 10px', '15px 10px', '15px'] })}>
      <button
        onClick={() => onClickItem(id)}
        css={{ ...card, backgroundColor: theme.colors.white }}>
        <div css={imageCard}>
          {typeof banner === 'string' || !banner ? (
            <AniBanner image={banner} height={120} grayOut />
          ) : (
            banner.map((item, idx) => {
              if (idx > 3) return;
              return (
                <AniBanner
                  key={idx}
                  image={item.bannerImage}
                  height={
                    banner.length === 1
                      ? 120
                      : banner.length === 2
                      ? 60
                      : banner.length === 3
                      ? 40
                      : 30
                  }
                />
              );
            })
          )}
          {!matchMobileDisplay && !collection && <img css={coverImage} src={cover} alt={title} />}
        </div>

        <h3
          css={mq({
            ...cardTitle,
            width: ['85%', '85%', '60%'],
            color: theme.colors.primary,
            marginLeft: !collection && ['0px', '0px', '120px']
          })}>
          {title}
        </h3>

        <div css={scoreCard}></div>
      </button>

      {(collection || removeOnly) && (
        <div css={collectionButton}>
          {!removeOnly && (
            <AniButton onClick={() => onClickEdit(id)} type="submit" fullWidth text="Edit Name" />
          )}
          <AniButton onClick={() => onClickRemove(id)} type="submit" fullWidth text="Remove" />
        </div>
      )}
    </div>
  );
};

export default AniCard;
