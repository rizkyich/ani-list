/** @jsxImportSource @emotion/react */

import AniButton from '../AniButton';

import { removeContent, removeConfirm } from './styles';

const AniModalRemove = ({ text, onConfirm, onClose }) => {
  return (
    <div css={removeContent}>
      <p>{text}</p>

      <div css={removeConfirm}>
        <AniButton fullWidth text="Yes" onClick={onConfirm} />
        <AniButton fullWidth text="No" onClick={onClose} />
      </div>
    </div>
  );
};

export default AniModalRemove;
