/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import AniButton from '../AniButton';
import AniModalCreateEdit from '../AniModalCreateEdit';
import AniEmptyItem from '../AniEmptyItem';
import MultipleSelect from './components/MultipleSelect';

import { usePersistedState } from '../../hooks/usePersistedState';
import { validateInputCollection } from '../../helpers/validateInputCollection';

import { collectionFormContainer, collectionFormWrapper, listCollection } from './styles';

const AniCollectionModalList = ({ noBulk = false, data, closeModal }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [collections, setCollections] = usePersistedState('collection', []);
  const [dataAnime, setDataAnime] = useState(data);
  const [collectionName, setCollectionName] = useState('');
  const [errorInput, setErrorInput] = useState('');
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const [selectedAnimes, setSelectedAnimes] = useState([]);
  const [successAdd, setSuccessAdd] = useState(false);

  const handleSubmit = () => {
    const submittedCollection = collections.map((item) => {
      return item.id === selectedCollectionId
        ? { ...item, data: [...new Set([...item.data, ...selectedAnimes])] }
        : item;
    });

    setCollections(submittedCollection);
    setSuccessAdd(true);
  };

  const handleCreateCollection = () => {
    const prevCollectionsExist = Boolean(collections.length);
    const constructCollection = {
      id: prevCollectionsExist ? (collections.length + 1).toString() : '1',
      name: collectionName.trim(),
      data: []
    };
    if (prevCollectionsExist) {
      setCollections([...collections, constructCollection]);
    } else {
      setCollections([constructCollection]);
    }

    setCollectionName('');
  };

  const handleChange = (value) => {
    const errorValidate = validateInputCollection(value, collections);

    setErrorInput(errorValidate);
    setCollectionName(value);
  };

  const handleSelectedCollection = (id) => {
    setSelectedCollectionId(id);
    if (!noBulk) {
      const animeInCollections = collections.find((item) => item.id === id)?.data;

      if (animeInCollections.length) {
        const notInCollectionAnime = dataAnime.filter((animeData) => {
          return !animeInCollections.find((anime) => anime.id === animeData.id);
        });
        setDataAnime(notInCollectionAnime);
      }
    } else {
      const storeAnime = collections.map((item) => {
        return item.id === id ? { ...item, data: [...item.data, data] } : item;
      });

      setCollections(storeAnime);
      setSuccessAdd(true);
    }
  };

  const handleBack = () => {
    setSelectedCollectionId('');
    setCollectionName('');
    setDataAnime(data);
  };

  if (successAdd) {
    return (
      <div css={collectionFormContainer}>
        <p css={{ textAlign: 'center', margin: '35px 0' }}>Anime is successfully added!</p>

        <div css={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <AniButton
            type="submit"
            fullWidth
            text={`Go to ${collections.find((item) => item.id === selectedCollectionId).name}`}
            onClick={() => navigate(`/collections/${selectedCollectionId}`)}
          />
          <AniButton text="Return" onClick={closeModal} fullWidth />
        </div>
      </div>
    );
  }

  return (
    <div css={collectionFormContainer}>
      <div css={{ ...collectionFormWrapper, color: theme.colors.bold }}>
        <p css={{ color: theme.colors.bold, borderBottom: `1px solid ${theme.colors.bold}` }}>
          {selectedCollectionId ? 'Pick Anime' : 'Select Collection'}
        </p>

        <div css={listCollection}>
          {selectedCollectionId && !noBulk ? (
            <MultipleSelect
              data={dataAnime}
              onSelectedAnime={(animes) => setSelectedAnimes(animes)}
            />
          ) : collections.length ? (
            collections.map((collection, idx) => {
              return (
                <AniButton
                  key={idx}
                  fullWidth
                  disabled={
                    noBulk && Boolean(collection.data.find((item) => item.id === data.id))
                      ? true
                      : false
                  }
                  onClick={() => handleSelectedCollection(collection.id)}
                  type="submit"
                  text={`${
                    collection.name.length > 30
                      ? collection.name.substring(0, 28) + '...'
                      : collection.name
                  } (${collection.data.length})`}
                />
              );
            })
          ) : (
            <AniEmptyItem text="No Collection yet. Create new One." />
          )}
        </div>

        {!selectedCollectionId && (
          <AniModalCreateEdit
            text={collectionName}
            handleChange={handleChange}
            handleSubmit={handleCreateCollection}
            errorInput={errorInput}
          />
        )}

        {selectedCollectionId && (
          <>
            <AniButton
              type="submit"
              fullWidth
              disabled={!selectedAnimes.length}
              text={`Add to ${collections.find((item) => item.id === selectedCollectionId).name}`}
              onClick={handleSubmit}
            />
            <AniButton text="Back" onClick={handleBack} fullWidth />
          </>
        )}
      </div>
    </div>
  );
};

export default AniCollectionModalList;
