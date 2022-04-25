/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';

const AniPageNotFound = () => {
  const theme = useTheme();

  return (
    <div css={{ margin: '30px 0' }}>
      <h1 css={{ color: theme.colors.bold, marginBottom: '5px' }}>Page not Found.</h1>
      <p>Sorry, page you looking for its not available.</p>
    </div>
  );
};

export default AniPageNotFound;
