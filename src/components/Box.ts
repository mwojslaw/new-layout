import styled from 'styled-components';
import { WithMarginConfig, withMargin } from '../mixins';

type BoxProps = WithMarginConfig;

export const Box = styled.div<BoxProps>(withMargin);

Box.displayName = 'Box';
