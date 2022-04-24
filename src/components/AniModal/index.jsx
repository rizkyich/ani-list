/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import { darkBg, centered, modal, closeButton } from './styles';

const AniModal = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div css={darkBg}>
      <div css={centered}>
        <div css={modal}>
          <button onClick={onClose} css={closeButton}>
            <RiCloseLine size={20} css={{ marginBottom: '-3px' }} />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AniModal;
