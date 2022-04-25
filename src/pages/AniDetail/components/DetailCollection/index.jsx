/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';

import AniPaper from '../../../../components/AniPaper';
import AniButton from '../../../../components/AniButton';
import AniEmptyItem from '../../../../components/AniEmptyItem';

import { usePersistedState } from '../../../../hooks/usePersistedState';
import { mq } from '../../../../helpers/mediaQueries';

const DetailCollection = ({ id }) => {
  const navigate = useNavigate();

  const [collections] = usePersistedState('collection', []);

  const collectionAnime = collections?.filter((item) =>
    item.data.find((animeData) => Number(id) === animeData.id)
  );

  return (
    <div css={mq({ padding: ['0px', '0px', '0', '0 40px'] })}>
      <h3 css={{ marginBottom: '5px', marginTop: '25px' }}>Collection Info:</h3>
      {collectionAnime.length ? (
        <AniPaper container collection>
          {collectionAnime?.map((item, idx) => {
            return (
              <div key={idx} css={{ margin: '10px' }}>
                <AniButton
                  type="submit"
                  fullWidth
                  text={item.name}
                  onClick={() => navigate(`/collections/${item.id}`)}
                />
              </div>
            );
          })}
        </AniPaper>
      ) : (
        <AniEmptyItem text="Not in any collection yet" />
      )}
    </div>
  );
};

export default DetailCollection;
