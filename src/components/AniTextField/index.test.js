import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import AniTextField from '.';

import { theme } from '../../constants';

describe('TextField Component', () => {
  it('should show label text', () => {
    render(
      <ThemeProvider theme={theme}>
        <AniTextField label="Collection Name" />
      </ThemeProvider>
    );

    const label = screen.getByText('Collection Name');
    expect(label).toHaveTextContent('Collection Name');
  });

  it('should show error text and style', () => {
    render(
      <ThemeProvider theme={theme}>
        <AniTextField placeholder="test placeholder" error="Collecion name must be unique" />
      </ThemeProvider>
    );

    const errorText = screen.getByText('Collecion name must be unique');
    const inputNode = screen.getByPlaceholderText('test placeholder');

    expect(errorText).toHaveTextContent('Collecion name must be unique');
    expect(inputNode).toHaveStyle(`border: .5px solid ${theme.colors.red}`);
  });

  it('should fire onChange event when input is changed and update input value', () => {
    const handleChange = jest.fn();

    const { rerender } = render(
      <ThemeProvider theme={theme}>
        <AniTextField value="" placeholder="test placeholder" onChange={handleChange} />
      </ThemeProvider>
    );

    const inputNode = screen.getByPlaceholderText('test placeholder');
    fireEvent.change(inputNode, { target: { value: 'a' } });
    expect(handleChange).toHaveBeenCalledTimes(1);

    rerender(
      <ThemeProvider theme={theme}>
        <AniTextField value="a" placeholder="test placeholder" onChange={handleChange} />
      </ThemeProvider>
    );

    expect(inputNode).toHaveValue('a');
  });
});
