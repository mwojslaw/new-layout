import { ThemeProvider } from 'styled-components';
import { theme } from '../src/Theme';
import { Styles } from '../src/styles';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <Story />
            <Styles />
        </ThemeProvider>
    ),
];
