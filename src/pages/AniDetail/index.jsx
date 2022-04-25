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
import DetailCollection from './components/DetailCollection';

import { ANIME_DETAIL } from '../../GraphQL/queries';

const AnimeDetail = () => {
  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadCollection, setLoadCollection] = useState(false);

  const { loading, data } = useQuery(ANIME_DETAIL, {
    fetchPolicy: 'network-only',
    variables: {
      id
    }
  });

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setLoadCollection(true);
    setInterval(() => {
      setLoadCollection(false);
    }, 500);
  };

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

      <AniPaper>
        {loading ? (
          <p>Please wait...</p>
        ) : (
          <>
            <DetailView anime={data?.Media} />
            {loadCollection ? <p>Load collection...</p> : <DetailCollection id={id} />}
          </>
        )}
      </AniPaper>

      {isModalOpen && (
        <AniModal onClose={handleCloseModal}>
          <AniCollectionModalList noBulk data={data?.Media} closeModal={handleCloseModal} />
        </AniModal>
      )}
    </div>
  );
};

export default AnimeDetail;
