import { theme } from '../src/Theme';
import { RendererProvider, ThemeProvider } from 'react-fela';
import { createRenderer } from 'fela';
import { responsivePropsPlugin, spacePlugin } from '../src/plugins';
import { normalize } from 'polished';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

const renderer = createRenderer({
    plugins: [spacePlugin, responsivePropsPlugin],
});

export const decorators = [
    (Story) => {
        renderer.renderStatic(`
            ${normalize()};

            html, body, #root { 
                height: 100%;
            }
        `);

        return (
            <RendererProvider renderer={renderer}>
                <ThemeProvider theme={theme}>
                    <Story />
                </ThemeProvider>
            </RendererProvider>
        );
    },
];
