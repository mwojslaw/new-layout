import styled from 'styled-components';
import { WithSpacingConfig, withSpacing, WithColorConfig, withColor, withBorder, WithBorderConfig } from '../mixins';

export type BoxProps = WithSpacingConfig & WithColorConfig & WithBorderConfig;

export const Box = styled.div<BoxProps>(withSpacing, withColor, withBorder);

Box.displayName = 'Box';
