import Heading from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Heading />', () => {
  it('Should render with deafult settings', () => {
    renderTheme(<Heading />);
  });
});
