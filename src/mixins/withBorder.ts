import { CSSObject } from 'styled-components';
import { WithTheme, Color } from '../Theme';
import { Length, getLengthValueFactory } from '../utils';
import * as CSS from 'csstype';

export type WithBorderConfig = Partial<{
    borderWidth: Length;
    borderColor: Color;
    borderStyle: CSS.Property.BorderStyle;
    borderRadius: Length;
}>;

export const withBorder = ({ theme, ...config }: WithTheme<WithBorderConfig>): CSSObject => {
    const getLengthValue = getLengthValueFactory(theme);

    return {
        ...(config.borderWidth && { borderWidth: getLengthValue(config.borderWidth) }),
        ...(config.borderColor && { borderColor: theme.colorPalette[config.borderColor] }),
        ...(config.borderStyle && { borderStyle: config.borderStyle }),
        ...(config.borderRadius && { borderRadius: getLengthValue(config.borderRadius) }),
    };
};