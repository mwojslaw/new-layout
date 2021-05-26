import { Box, BoxProps } from './Box';
import styled from 'styled-components';
import { WithFlexConfig, withFlex } from '../mixins';

export type FlexProps = WithFlexConfig & BoxProps;

export const Flex = styled(Box)<FlexProps>(withFlex);
