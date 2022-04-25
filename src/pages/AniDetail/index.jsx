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
  const [reload, setReload] = useState(false);

  const { loading, data } = useQuery(ANIME_DETAIL, {
    fetchPolicy: 'network-only',
    variables: {
      id
    }
  });

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setReload(true);
    setInterval(() => {
      setReload(false);
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
        {loading || reload ? <p>Please wait...</p> : <DetailView anime={data?.Media} />}
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
