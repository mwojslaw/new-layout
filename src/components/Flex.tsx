import * as React from 'react';
import { useFela } from 'react-fela';
import { Box, BoxProps } from './Box';
import { WithFlexConfig, withFlex } from '../mixins';

export type FlexProps<T extends React.ElementType> = WithFlexConfig & BoxProps<T>;

const mixins = [withFlex];

export function Flex<T extends React.ElementType = 'div'>({
    flexWrap,
    gap,
    justifyContent,
    alignItems,
    flexDirection,
    children,
    ...props
}: FlexProps<T>) {
    const { css } = useFela();

    const style = mixins.map((mixin) =>
        mixin({
            flexWrap,
            gap,
            justifyContent,
            alignItems,
            flexDirection,
        }),
    );

    return (
        <Box {...props} className={css(style)}>
            {children}
        </Box>
    );
}
