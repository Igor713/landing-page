import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Home />', () => {
  it('Should render home', () => {
    renderTheme(<Home />);
  });
});
