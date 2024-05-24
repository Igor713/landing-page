import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story>
        <GlobalStyles></GlobalStyles>
      </Story>
    </ThemeProvider>
  ),
];

export default preview;
export { decorators };
