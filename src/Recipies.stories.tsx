import { Box, Flex } from './components';

export default {
    title: 'Recipes',
};

export const FlexboxGrid = () => (
    <>
        <Flex marginBottom="md" gap="md">
            <Box height="100px" background="gray-light" width="50%">
                1/2
            </Box>
            <Box height="100px" background="gray-dark" color="gray-light" width="50%">
                1/2
            </Box>
        </Flex>
        <Flex gap="md">
            <Box height="100px" background="black-dark" color="gray-light" width="75%">
                3/4
            </Box>
            <Box height="100px" background="gray-light" width="25%">
                1/4
            </Box>
        </Flex>
    </>
);

export const CenteredContainer = () => (
    <Flex flexDirection="column" background="black-dark" width="100%" height="100%" alignItems="center" justifyContent="center">
        <Box background="white-dark" width="100px" height="100px"></Box>
    </Flex>
);

export const Navbar = () => (
    <Flex height="50px" paddingX="lg" color="white-light" background="black-dark" alignItems="center">
        Home
        <Box marginX="auto" />
        <a href="/profile">Profile</a>
    </Flex>
);

export const ResponsiveTwoColumnsLayout = () => (
    <Flex flexDirection="column" height="100%" width="100%">
        <Navbar />
        <Flex
            flexDirection={{
                sm: 'column',
                md: 'row',
            }}
            flex={1}
        >
            <Box width={{ sm: '100%', md: '300px' }} background="gray-moderate">
                <Flex
                    style={{
                        listStyle: 'none',
                    }}
                    flexDirection={{
                        sm: 'row',
                        md: 'column',
                    }}
                    as="ul"
                >
                    {[...new Array(5)].map(() => (
                        <Box
                            as="li"
                            marginRight={{
                                sm: 'md',
                                md: '0px',
                            }}
                            marginBottom={{
                                sm: '0px',
                                md: 'md',
                            }}
                        >
                            Menu item
                        </Box>
                    ))}
                </Flex>
            </Box>
            <Box padding="md" flex={1} background="gray-light">
                Content
            </Box>
        </Flex>
    </Flex>
);

export const Card = () => (
    <Box overflow="hidden" borderRadius="md" borderWidth="2px" borderStyle="solid" borderColor="gray-light" width="400px">
        <img style={{ maxWidth: '100%' }} alt="Rear view of modern home with pool" src="https://bit.ly/2Z4KKcF" />
        <Box padding="lg">
            <p>3 BEDS • 2 BATHS</p>
            <p>
                <strong>Modern home in city center in Los Angeles.</strong>
            </p>
            $1,900.00/ wk
        </Box>
    </Box>
);
