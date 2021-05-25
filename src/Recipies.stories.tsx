import { Box, Flex } from './components';

export default {
    title: 'Recipies',
};

export const FlexboxGrid = () => (
    <>
        <Flex marginBottom="md" gap="md">
            <Box height={100} background="gray-light" width="50%"></Box>
            <Box height={100} background="gray-dark" color="gray-light" width="50%"></Box>
        </Flex>
        <Flex gap="md">
            <Box height={100} background="black-dark" color="gray-light" width="75%"></Box>
            <Box height={100} background="gray-light" width="25%"></Box>
        </Flex>
    </>
);

export const FlexboxGridWrap = () => (
    <Flex flexWrap="wrap" gap="md">
        <Box height={100} background="gray-light" width="50%"></Box>
        <Box height={100} background="gray-dark" color="gray-light" width="50%"></Box>
        <Box height={100} background="gray-dark" color="gray-light" width="75%"></Box>
        <Box height={100} background="gray-light" width="25%"></Box>
    </Flex>
);

export const CenteredContainer = () => (
    <Flex flexDirection="column" background="black-dark" width="100%" height="100%" alignItems="center" justifyContent="center">
        <Box background="white-dark" width={100} height={100}></Box>
    </Flex>
);

export const Navbar = () => (
    <Flex height={50} paddingX="lg" color="white-light" background="black-dark" alignItems="center">
        Home
        <Box marginX="auto" />
        <a href="/profile">Profile</a>
    </Flex>
);

export const TwoColumnsLayout = () => (
    <Flex flexDirection="column" height="100%" width="100%">
        <Navbar />
        <Flex flex={1}>
            <Box width={300} background="gray-moderate">
                <ul>
                    <li>Menu item</li>
                    <li>Menu item</li>
                    <li>Menu item</li>
                    <li>Menu item</li>
                    <li>Menu item</li>
                </ul>
            </Box>
            <Box padding="md" flex={1} background="gray-light">
                Content
            </Box>
        </Flex>
    </Flex>
);
