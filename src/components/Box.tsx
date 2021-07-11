import * as React from 'react';
import { WithSpacingConfig, withSpacing, WithColorConfig, withColor, withBorder, WithBorderConfig } from '../mixins';
import { useFela } from 'react-fela';
import { Theme } from '../Theme';
import { WithAsProp } from '../utils';

export type BoxProps<T extends React.ElementType> = WithAsProp<T, WithSpacingConfig & WithColorConfig & WithBorderConfig>;

const mixins = [withSpacing, withColor, withBorder];

export function Box<T extends React.ElementType = 'div'>({
    className,
    children,
    as,
    marginRight,
    marginBottom,
    margin,
    marginTop,
    marginX,
    padding,
    paddingX,
    width,
    height,
    flex,
    overflow,
    display,
    color,
    background,
    borderStyle,
    borderColor,
    borderRadius,
    borderWidth,
    ...props
}: BoxProps<T>) {
    const { css, theme } = useFela<Theme>();

    const Tag = as || 'div';

    const style = mixins.map((mixin) =>
        mixin({
            marginRight,
            marginBottom,
            margin,
            marginTop,
            marginX,
            padding,
            paddingX,
            width,
            height,
            flex,
            overflow,
            display,
            color,
            background,
            borderStyle,
            borderColor,
            borderRadius,
            borderWidth,
            theme,
        }),
    );

    return (
        <Tag {...props} className={`${className || ''} ` + css(style)}>
            {children}
        </Tag>
    );
}

Box.displayName = 'Box';
