import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import AniEmptyItem from '.';

import { theme } from '../../constants';

describe('Empty Item Interface Component', () => {
  it('should show text from props', () => {
    render(
      <ThemeProvider theme={theme}>
        <AniEmptyItem text="test" />
      </ThemeProvider>
    );

    const content = screen.getByText('test');
    expect(content).toHaveTextContent('test');
  });
});
