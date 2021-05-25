import { Box } from './Box';

export default {
    title: 'Components/Box',
    component: Box,
};

export const Spacing = () => (
    <>
        <Box marginBottom={10}>Number margin, unit default to px</Box>
        <Box marginBottom="10px">Number and unit string</Box>
        <Box marginBottom="sm">Space margin sm</Box>
        <Box marginBottom="md">Space margin md</Box>
        <Box marginBottom="lg">Space margin lg</Box>

        <Box marginBottom={{ sm: 20, md: '40px', lg: 'md' }} marginTop={{ sm: 'lg' }}>
            Responsive margin
        </Box>
        <Box marginX={20}>marginX</Box>
    </>
);

export const Size = () => (
    <>
        <Box width="20%" height="200px">
            Width 20%
        </Box>
        <Box
            width={{
                sm: '100%',
                md: '75%',
            }}
            height={{
                sm: 100,
            }}
        >
            Responsive width
        </Box>
    </>
);

export const Color = () => (
    <>
        <Box color="black-light">From color palette</Box>
        <Box padding="md" background="black-dark" color="gray-light">
            From color palette
        </Box>
    </>
);
