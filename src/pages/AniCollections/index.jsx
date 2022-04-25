/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { MdAdd } from 'react-icons/md';

import AniPaper from '../../components/AniPaper';
import AniCard from '../../components/AniCard';
import AniEmptyItem from '../../components/AniEmptyItem';
import AniModal from '../../components/AniModal';
import AniButton from '../../components/AniButton';
import AniModalCreateEdit from '../../components/AniModalCreateEdit';
import AniModalRemove from '../../components/AniModalRemove';

import { usePersistedState } from '../../hooks/usePersistedState';
import { validateInputCollection } from '../../helpers/validateInputCollection';

import { modalContentWrapper } from './styles';

const AniCollections = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [collections, setCollections] = usePersistedState('collection', []);
  const [showModal, setShowModal] = useState({ content: '', id: '' });
  const [inputText, setInputText] = useState('');
  const [errorInput, setErrorInput] = useState('');

  const handleClickItem = (id) => {
    navigate(`/collections/${id}`);
  };

  const handleChange = (value) => {
    const errorValidate = validateInputCollection(value, collections || []);

    setErrorInput(errorValidate);
    setInputText(value);
  };

  const handleClickEdit = (id) => {
    const name = collections.find((item) => item.id === id)?.name;
    setInputText(name);
    setShowModal({ content: 'edit', id });
  };

  const handleCreateEdit = () => {
    if (showModal.content === 'edit') {
      const collectionToStore = collections?.map((item) => {
        if (item.id === showModal.id) {
          return { ...item, name: inputText.trim() };
        }

        return item;
      });

      setCollections(collectionToStore);
    } else {
      setCollections([
        ...collections,
        {
          id: collections.length
            ? (Number(collections[collections.length - 1].id) + 1).toString()
            : '1',
          name: inputText.trim(),
          data: []
        }
      ]);
    }

    handleCloseModal();
  };

  const handleCloseModal = () => {
    setErrorInput('');
    setInputText('');
    setShowModal({ content: '', id: '' });
  };

  const handleRemove = (id) => {
    const filterOutCollection = collections.filter((item) => item.id !== id);
    setCollections(filterOutCollection);
    setShowModal({ content: '', id: '' });
  };

  return (
    <div>
      <h2 css={{ color: theme.colors.bold, marginBottom: '10px' }}>Collection List</h2>

      <AniButton
        type="submit"
        text="Add New Collection"
        icon={MdAdd}
        onClick={() => setShowModal({ content: 'create', id: '' })}
      />

      {collections?.length ? (
        <AniPaper container collection>
          {collections.map((collection, idx) => {
            return (
              <AniCard
                key={idx}
                id={collection.id}
                collection
                title={collection.name}
                banner={collection.data[0] ? collection.data : ''}
                onClickItem={handleClickItem}
                onClickEdit={handleClickEdit}
                onClickRemove={(id) => setShowModal({ content: 'remove', id })}
              />
            );
          })}
        </AniPaper>
      ) : (
        <AniEmptyItem text="No Collection yet. Create new One." />
      )}

      {showModal.content && (
        <AniModal onClose={handleCloseModal}>
          <div css={modalContentWrapper}>
            {showModal.content !== 'remove' ? (
              <AniModalCreateEdit
                text={inputText}
                content={showModal.content}
                handleChange={handleChange}
                handleSubmit={handleCreateEdit}
                errorInput={errorInput}
                orientation="column"
              />
            ) : (
              <AniModalRemove
                text={`Are you sure want to delete ${
                  collections.find((item) => item.id === showModal.id).name
                } collection?`}
                onConfirm={() => handleRemove(showModal.id)}
                onClose={handleCloseModal}
              />
            )}
          </div>
        </AniModal>
      )}
    </div>
  );
};

export default AniCollections;
