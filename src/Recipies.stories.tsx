import { Box, Flex } from './components';

export default {
    title: 'Recipies',
};

export const FlexboxGrid = () => (
    <Flex flexWrap="wrap" marginBottom="md" gap="md">
        <Box height={100} background="gray-light" width="50%"></Box>
        <Box height={100} background="black-dark" color="gray-light" width="50%"></Box>
        <Box height={100} background="black-dark" color="gray-light" width="75%"></Box>
        <Box height={100} background="gray-light" width="25%"></Box>
    </Flex>
);
