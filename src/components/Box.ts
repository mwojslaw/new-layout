import styled from 'styled-components';
import { WithSpacingConfig, withSpacing, WithColorConfig, withColor } from '../mixins';

export type BoxProps = WithSpacingConfig & WithColorConfig;

export const Box = styled.div<BoxProps>(withSpacing, withColor);

Box.displayName = 'Box';
