import { CSSObject } from 'styled-components';
import { Color, WithTheme } from '../Theme';

export type WithColorConfig = {
    color?: Color;
    background?: Color;
};

export const withColor = ({ theme, ...config }: WithTheme<WithColorConfig>): CSSObject => {
    return {
        ...(config.color ? { color: theme.colorPalette[config.color] } : {}),
        ...(config.background ? { background: theme.colorPalette[config.background] } : {}),
    };
};
