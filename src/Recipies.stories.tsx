import { Box, Flex } from './components';

export default {
    title: 'Recipies',
};

export const FlexboxGrid = () => (
    <Flex flexWrap="wrap" mb="md" g="md">
        <Box h={100} background="gray-light" w="50%"></Box>
        <Box h={100} background="black-dark" color="gray-light" w="50%"></Box>
        <Box h={100} background="black-dark" color="gray-light" w="75%"></Box>
        <Box h={100} background="gray-light" w="25%"></Box>
    </Flex>
);
