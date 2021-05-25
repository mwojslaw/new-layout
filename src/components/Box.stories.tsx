import { Box } from './Box';

export default {
    title: 'Components/Box',
    component: Box,
};

export const Lengths = () => (
    <>
        <Box padding="md" color="white-light" background="gray-moderate" marginBottom={10}>
            Using number, unit default to px (10px)
        </Box>
        <Box padding="md" color="white-light" background="gray-moderate" marginBottom="30px">
            Using string. number + unit (30px)
        </Box>
        <Box padding="md" color="white-light" background="gray-moderate" marginBottom="xl">
            Using space alias from `theme.space.xl` (32px)
        </Box>
        <Box padding="md" color="white-light" background="gray-moderate" marginBottom={{ sm: 20, md: '40px', lg: 'md' }}>
            Using responsive object, with breakpoint alias from `theme.breakpoints` (sm: 20px, md: 40px, lg: 8px)
        </Box>
    </>
);
