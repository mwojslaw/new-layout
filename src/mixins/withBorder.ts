import { CSSObject } from 'styled-components';
import { WithTheme, Color } from '../Theme';
import { Length, getLengthValueFactory } from '../utils';
import * as CSS from 'csstype';

export type WithBorderConfig = {
    borderWidth?: Length;
    borderColor?: Color;
    borderStyle?: CSS.Property.BorderStyle;
    borderRadius?: Length;
};

export const withBorder = ({ theme, borderStyle, ...config }: WithTheme<WithBorderConfig>): CSSObject => {
    const getLengthValue = getLengthValueFactory(theme);

    return {
        borderStyle,
        ...(config.borderWidth && { borderWidth: getLengthValue(config.borderWidth) }),
        ...(config.borderColor && { borderColor: theme.colorPalette[config.borderColor] }),
        ...(config.borderRadius && { borderRadius: getLengthValue(config.borderRadius) }),
    };
};
