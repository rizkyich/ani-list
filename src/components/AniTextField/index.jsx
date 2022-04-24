/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';

import { textFieldContainer, labelText, input } from './styles';

const AniTextField = ({ error, label, name, value, placeholder, onChange }) => {
  const theme = useTheme();

  return (
    <div css={textFieldContainer}>
      <label css={{ ...labelText, color: theme.colors.primary }} htmlFor={name}>
        {label}
      </label>
      <input
        css={{
          ...input,
          border: error ? `.5px solid ${theme.colors.red}` : `.5px solid ${theme.colors.primary}`
        }}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <sub css={{ color: theme.colors.red, height: '16px', fontSize: '12px' }}>{error}</sub>
    </div>
  );
};

export default AniTextField;
