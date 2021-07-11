import { Color, WithTheme } from '../Theme';
import * as CSS from 'csstype';

export type WithColorConfig = {
    color?: Color;
    background?: Color;
};

export const withColor = ({ theme, color, background }: WithTheme<WithColorConfig>): CSS.Properties => ({
    color: color && theme.colorPalette[color],
    background: background && theme.colorPalette[background],
});
