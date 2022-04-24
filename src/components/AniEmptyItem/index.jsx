/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { IoMdAddCircleOutline } from 'react-icons/io';

const AniEmptyItem = ({ text }) => {
  const theme = useTheme();

  return (
    <div css={{ color: theme.colors.secondary, textAlign: 'center', margin: '20px 0' }}>
      <p>{text}</p>
      <IoMdAddCircleOutline size={40} />
    </div>
  );
};

export default AniEmptyItem;
