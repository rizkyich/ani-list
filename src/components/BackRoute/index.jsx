/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { BiArrowBack } from 'react-icons/bi';

const BackRoute = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div css={{ width: '100%', marginBottom: '40px' }}>
      <button
        onClick={handleClick}
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px',
          color: theme.colors.bold
        }}>
        <BiArrowBack size={30} />
        <h3>Go Back</h3>
      </button>
    </div>
  );
};

export default BackRoute;
