/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '@emotion/react';

import AniPaper from '../../components/AniPaper';
import AniCard from '../../components/AniCard';
import AniEmptyItem from '../../components/AniEmptyItem';
import AniModal from '../../components/AniModal';
import AniModalCreateEdit from '../../components/AniModalCreateEdit';
import AniModalRemove from '../../components/AniModalRemove';
import AniButton from '../../components/AniButton';
import BackRoute from '../../components/BackRoute';

import { usePersistedState } from '../../hooks/usePersistedState';
import { validateInputCollection } from '../../helpers/validateInputCollection';

import { modalContentWrapper } from '../AniCollections/styles';

const AniCollectionsDetail = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();

  const [collections, setCollections] = usePersistedState('collection', []);
  const [collection, setCollection] = useState({});
  const [showModal, setShowModal] = useState({ content: '', id: '' });
  const [inputText, setInputText] = useState('');
  const [errorInput, setErrorInput] = useState('');
  const [animeSelectedName, setAnimeSelectedName] = useState('');

  useEffect(() => {
    const collectionExist = collections.find((item) => item.id === id);

    if (collectionExist) {
      setCollection(collectionExist);
    } else {
      navigate('/collections');
    }
  }, [collections]);

  const handleClickItem = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleClickEdit = () => {
    setInputText(collection.name);
    setShowModal({ content: 'edit', id: collection.id });
  };

  const handleChange = (value) => {
    const errorValidate = validateInputCollection(value, collections);

    setErrorInput(errorValidate);
    setInputText(value);
  };

  const handleEdit = () => {
    const collectionToStore = collections.map((item) => {
      if (item.id === collection.id) {
        return { ...item, name: inputText.trim() };
      }

      return item;
    });

    setCollections(collectionToStore);
    setShowModal({ content: '', id: '' });
  };

  const handleRemove = () => {
    const filterOutAnime = collection.data.filter((item) => item.id !== Number(showModal.id));
    const storeCollection = collections.map((item) => {
      if (item.id === collection.id) {
        return {
          ...collection,
          data: filterOutAnime
        };
      }

      return item;
    });

    setCollections(storeCollection);
    setShowModal({ content: '', id: '' });
  };

  const handleClickRemove = (id) => {
    const animeName = collection.data.find((item) => item.id === id).title.romaji;
    setAnimeSelectedName(animeName);
    setShowModal({ content: 'remove', id: id.toString() });
  };

  return (
    <div>
      <BackRoute />

      <AniButton type="submit" text="Edit Collection Name" onClick={handleClickEdit} />

      {Boolean(collection) && (
        <h2 css={{ color: theme.colors.bold, margin: '20px 0 0 0', textAlign: 'center' }}>
          {collection.name}&apos;s collection
        </h2>
      )}

      {collection?.data?.length ? (
        <AniPaper container>
          {collection.data.map((anime, idx) => {
            return (
              <AniCard
                key={idx}
                id={anime.id}
                removeOnly
                title={anime.title.romaji}
                banner={anime.bannerImage}
                cover={anime.coverImage.medium}
                score={anime.averageScore}
                seasonYear={anime.seasonYear}
                onClickItem={handleClickItem}
                onClickRemove={handleClickRemove}
              />
            );
          })}
        </AniPaper>
      ) : (
        <AniEmptyItem text="No Anime yet. Add new one." />
      )}

      {showModal.content && (
        <AniModal onClose={() => setShowModal({ content: '', id: '' })}>
          <div css={modalContentWrapper}>
            {showModal.content !== 'remove' ? (
              <AniModalCreateEdit
                text={inputText}
                content={showModal.content}
                handleChange={handleChange}
                handleSubmit={handleEdit}
                errorInput={errorInput}
                orientation="column"
              />
            ) : (
              <AniModalRemove
                text={`Are you sure want to delete ${animeSelectedName} from ${collection.name}?`}
                onConfirm={() => handleRemove(showModal.id)}
                onClose={() => setShowModal({ content: '', id: '' })}
              />
            )}
          </div>
        </AniModal>
      )}
    </div>
  );
};

export default AniCollectionsDetail;
