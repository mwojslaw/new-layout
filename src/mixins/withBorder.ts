import { WithTheme, Color } from '../Theme';
import { Length } from '../utils';
import * as CSS from 'csstype';

export type WithBorderConfig = {
    borderWidth?: Length;
    borderColor?: Color;
    borderStyle?: CSS.Property.BorderStyle;
    borderRadius?: Length;
};

export const withBorder = ({
    borderStyle,
    borderColor,
    borderRadius,
    borderWidth,
    theme,
}: WithTheme<WithBorderConfig>): Partial<Record<keyof CSS.Properties, any>> => ({
    borderStyle,
    borderWidth,
    borderRadius,
    borderColor: borderColor && theme.colorPalette[borderColor],
});
