import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import AniModalRemove from '.';

import { theme } from '../../constants';

describe('Modal Remove Item Component', () => {
  it('should show text from props', () => {
    render(
      <ThemeProvider theme={theme}>
        <AniModalRemove text="test" />
      </ThemeProvider>
    );

    const content = screen.getByText('test');
    expect(content).toHaveTextContent('test');
  });
});
