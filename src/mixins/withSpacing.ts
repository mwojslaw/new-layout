import { Length, ResponsiveLength } from '../utils';
import * as CSS from 'csstype';

export type WithSpacingConfig = {
    margin?: Length | ResponsiveLength;
    marginBottom?: Length | ResponsiveLength;
    marginTop?: Length | ResponsiveLength;
    marginX?: Length | ResponsiveLength;
    marginRight?: Length | ResponsiveLength;

    padding?: Length | ResponsiveLength;
    paddingX?: Length | ResponsiveLength;

    width?: Length | ResponsiveLength;
    height?: Length | ResponsiveLength;

    flex?: CSS.Property.Flex;
    overflow?: CSS.Property.Overflow;
    display?: CSS.Property.Display;
};

export const withSpacing = ({
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
}: WithSpacingConfig): Partial<Record<keyof CSS.Properties, any>> => ({
    boxSizing: 'border-box',
    margin,
    marginBottom,
    marginRight,
    marginTop,
    ...(marginX && {
        marginLeft: marginX,
        marginRight: marginX,
    }),
    padding,
    ...(paddingX && { paddingLeft: paddingX, paddingRight: paddingX }),
    width,
    height,
    flex,
    overflow,
    display,
});
