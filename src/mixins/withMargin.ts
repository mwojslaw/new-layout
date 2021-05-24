import { CSSObject } from 'styled-components';
import { WithTheme } from '../Theme';
import { ResponsiveLength, Length, getBreakpointsFromProps, getLengthValue } from '../utils';

export type WithMarginConfig = {
    mb?: Length | ResponsiveLength;
    mt?: Length | ResponsiveLength;
    mx?: Length | ResponsiveLength;
};

export const withMargin = ({ theme, ...config }: WithTheme<WithMarginConfig>): CSSObject => {
    const breakpoints = getBreakpointsFromProps(config);

    return {
        marginBottom: config.mb ? getLengthValue({ length: config.mb, theme }) : 0,
        marginTop: config.mt ? getLengthValue({ length: config.mt, theme }) : 0,
        marginInlineStart: config.mx ? getLengthValue({ length: config.mx, theme }) : 0,
        marginInlineEnd: config.mx ? getLengthValue({ length: config.mx, theme }) : 0,

        ...breakpoints.reduce(
            (rules, breakpoint) => ({
                ...rules,
                [`@media(min-width: ${theme.breakpoints[breakpoint]})`]: {
                    marginBottom: config.mb ? getLengthValue({ length: config.mb, theme, breakpoint }) : 0,
                    marginTop: config.mt ? getLengthValue({ length: config.mt, theme, breakpoint }) : 0,
                },
            }),
            {},
        ),
    };
};
