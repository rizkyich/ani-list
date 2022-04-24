/** @jsxImportSource @emotion/react */

import AniTextField from '../AniTextField';
import AniButton from '../AniButton';
import { useState } from 'react';

const formContainer = {
  width: '100%',
  display: 'flex',
  gap: '10px',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '5px'
};

const AniModalCreateEdit = ({
  content = 'create',
  id,
  text,
  handleChange,
  handleSubmit,
  errorInput,
  orientation = 'row'
}) => {
  const [defaultState, setDefaultState] = useState(text);

  const handleChangeInput = (e) => {
    e.preventDefault();

    handleChange(e.target.value);
  };

  return (
    <form css={{ ...formContainer, flexDirection: orientation }}>
      <AniTextField
        label="Collection Name"
        name="collection"
        value={text}
        placeholder="Best Anime"
        onChange={handleChangeInput}
        error={errorInput}
      />
      <AniButton
        type="submit"
        fullWidth={orientation === 'row' ? false : true}
        disabled={
          Boolean(errorInput || !text) || (content === 'edit' ? defaultState === text : false)
        }
        text={content !== 'create' ? 'Edit' : 'Create'}
        onClick={() => handleSubmit(id)}
      />
    </form>
  );
};

export default AniModalCreateEdit;
