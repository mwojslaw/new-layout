import * as React from 'react';
import { render } from 'react-dom';
import { Box } from './components';
import { ThemeProvider, RendererProvider } from 'react-fela';
import { createRenderer } from 'fela';
import { theme } from './Theme';

const renderer = createRenderer();

const App: React.FC = () => {
    return (
        <RendererProvider renderer={renderer}>
            <ThemeProvider theme={theme}>
                <Box
                    marginBottom="lg"
                    marginTop={{
                        md: 'none',
                        lg: '2xl',
                    }}
                >
                    A
                </Box>
            </ThemeProvider>
        </RendererProvider>
    );
};

render(<App />, document.querySelector('#root'));
