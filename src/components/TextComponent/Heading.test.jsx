import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<TextComponent />', () => {
  it('should render with default values', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
  });
});
