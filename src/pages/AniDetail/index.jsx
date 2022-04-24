/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { MdAdd } from 'react-icons/md';

import BackRoute from '../../components/BackRoute';
import AniPaper from '../../components/AniPaper';
import AniButton from '../../components/AniButton';
import AniModal from '../../components/AniModal';
import AniCollectionModalList from '../../components/AniCollectionModalList';
import DetailView from './components/DetailView/';

import { ANIME_DETAIL } from '../../GraphQL/queries';

const AnimeDetail = () => {
  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { loading, data } = useQuery(ANIME_DETAIL, {
    fetchPolicy: 'no-cache',
    variables: {
      id
    }
  });

  return (
    <div>
      <BackRoute />

      {!loading && (
        <AniButton
          type="submit"
          text="Add to Collection"
          icon={MdAdd}
          onClick={() => setIsModalOpen(true)}
        />
      )}

      <AniPaper>{loading ? <p>Please wait...</p> : <DetailView anime={data.Media} />}</AniPaper>

      {isModalOpen && (
        <AniModal onClose={() => setIsModalOpen(false)}>
          <AniCollectionModalList
            noBulk
            data={data.Media}
            closeModal={() => setIsModalOpen(false)}
          />
        </AniModal>
      )}
    </div>
  );
};

export default AnimeDetail;
