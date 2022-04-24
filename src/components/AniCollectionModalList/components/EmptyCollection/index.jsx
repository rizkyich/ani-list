/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { IoMdAddCircleOutline } from 'react-icons/io';

const EmptyCollection = () => {
  const theme = useTheme();

  return (
    <div css={{ color: theme.colors.bold, textAlign: 'center' }}>
      <p>No collection yet. Create new one.</p>
      <IoMdAddCircleOutline
        css={{
          cursor: 'pointer',
          '&:hover': {
            color: theme.colors.primary
          }
        }}
        size={40}
      />
    </div>
  );
};

export default EmptyCollection;
