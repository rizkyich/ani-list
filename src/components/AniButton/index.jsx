/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';

import { button } from './styles';

const AniButton = ({ type = 'submit', fullWidth, disabled, text, icon, onClick }) => {
  const theme = useTheme();

  const IconButton = icon;

  const handleClick = (e) => {
    e.preventDefault();
    !disabled && onClick();
  };

  return (
    <button
      onClick={handleClick}
      css={{
        ...button,
        width: fullWidth && '100%',
        backgroundColor: disabled
          ? theme.colors.gray
          : type === 'submit'
          ? theme.colors.primary
          : theme.colors.bold,
        color: disabled ? theme.colors.primary : theme.colors.secondary,
        cursor: disabled ? 'default' : 'pointer',
        transition: 'all 0.25s ease',
        '&:hover': {
          backgroundColor: disabled
            ? theme.colors.gray
            : type === 'submit'
            ? theme.colors.secondary
            : theme.colors.primary,
          color: theme.colors.primary
        }
      }}>
      {Boolean(IconButton) && <IconButton />}
      <p>{text}</p>
    </button>
  );
};

export default AniButton;
