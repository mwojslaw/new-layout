import { Box } from './Box';

export default {
    title: 'Components/Box',
    component: Box,
};

export const Spacing = () => (
    <>
        <Box mb={10}>Number margin, unit default to px</Box>
        <Box mb="10px">Number and unit string</Box>
        <Box mb="sm">Space margin sm</Box>
        <Box mb="md">Space margin md</Box>
        <Box mb="lg">Space margin lg</Box>

        <Box mb={{ sm: 20, md: '40px', lg: 'md' }} mt={{ sm: 'lg' }}>
            Responsive margin
        </Box>
        <Box mx={20}>mx</Box>
    </>
);

export const Size = () => (
    <>
        <Box w="20%" h="200px">
            Width 20%
        </Box>
        <Box
            w={{
                sm: '100%',
                md: '75%',
            }}
            h={{
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
        <Box p="md" background="black-dark" color="gray-light">
            From color palette
        </Box>
    </>
);
