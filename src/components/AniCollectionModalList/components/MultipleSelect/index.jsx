/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { checkbox, listSelect, label } from './styles';

const MultipleSelect = ({ data, onSelectedAnime }) => {
  const [checkedState, setCheckedState] = useState(new Array(data.length).fill(false));

  const handleOnChange = (pos) => {
    const updatedCheckedState = checkedState.map((item, idx) => {
      return idx === pos ? !item : item;
    });
    const selectedAnime = data.filter((_, idx) => {
      return updatedCheckedState[idx];
    });

    onSelectedAnime(selectedAnime);
    setCheckedState(updatedCheckedState);
  };

  return (
    <div>
      {data.length ? (
        <ul>
          {data?.map((anime, idx) => {
            return (
              <li key={idx} css={listSelect}>
                <input
                  css={checkbox}
                  type="checkbox"
                  name={anime.title.romaji}
                  value={anime.title.romaji}
                  checked={checkedState[idx]}
                  onChange={() => handleOnChange(idx)}
                />
                <label css={label} htmlFor={`custom-checkbox-${idx}`}>
                  {anime.title.romaji}
                </label>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>All anime in this page is already in this collection</p>
      )}
    </div>
  );
};

export default MultipleSelect;
