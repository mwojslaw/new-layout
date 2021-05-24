import { Box } from './Box';

export default {
    title: 'Example/Box',
    component: Box,
};

export const Margin = () => (
    <>
        <Box mb={10}>Number margin, unit default to px</Box>
        <Box mb={[20, 'px']}>Number margin with unit</Box>
        <Box mb="sm">Space margin</Box>
        <Box mb={{ sm: 20, md: 40, lg: 'md' }} mt={{ sm: 'lg' }}>
            Responsive margin
        </Box>
        <Box mx={20}>mx</Box>
    </>
);
