import { CSSObject } from 'styled-components';
import { WithTheme } from '../Theme';
import { getBreakpointsFromProps, Length, getLengthValueFactory, ResponsiveSize, ResponsiveLength, Size } from '../utils';

export type WithSpacingConfig = Partial<{
    m: Length | ResponsiveLength;
    mb: Length | ResponsiveLength;
    mt: Length | ResponsiveLength;
    mx: Length | ResponsiveLength;

    p: Length | ResponsiveLength;
    px: Length | ResponsiveLength;
    w: Size | ResponsiveSize;
    h: Size | ResponsiveSize;
}>;

export const withSpacing = ({ theme, ...config }: WithTheme<WithSpacingConfig>): CSSObject => {
    const breakpoints = getBreakpointsFromProps(config);

    const getLengthValue = getLengthValueFactory(theme);

    return {
        boxSizing: 'border-box',
        ...(config.m ? { margin: getLengthValue(config.m) } : {}),
        ...(config.mb ? { marginBottom: getLengthValue(config.mb) } : {}),
        ...(config.mt ? { marginTop: getLengthValue(config.mt) } : {}),
        ...(config.mx
            ? {
                  marginLeft: getLengthValue(config.mx),
                  marginRight: getLengthValue(config.mx),
              }
            : {}),

        ...(config.p ? { padding: getLengthValue(config.p) } : {}),
        ...(config.px ? { paddingLeft: getLengthValue(config.px), paddingRight: getLengthValue(config.px) } : {}),

        ...(config.w ? { width: getLengthValue(config.w) } : {}),
        ...(config.h ? { height: getLengthValue(config.h) } : {}),

        ...breakpoints.reduce(
            (rules, breakpoint) => ({
                ...rules,
                [`@media(min-width: ${theme.breakpoints[breakpoint]})`]: {
                    ...(config.m ? { margin: getLengthValue(config.m, breakpoint) } : {}),
                    ...(config.mb ? { marginBottom: getLengthValue(config.mb, breakpoint) } : {}),
                    ...(config.mt ? { marginTop: getLengthValue(config.mt, breakpoint) } : {}),
                    ...(config.mx
                        ? { marginLeft: getLengthValue(config.mx, breakpoint), marginRight: getLengthValue(config.mx, breakpoint) }
                        : {}),

                    ...(config.px
                        ? { paddingLeft: getLengthValue(config.px, breakpoint), paddingRight: getLengthValue(config.px, breakpoint) }
                        : {}),
                    ...(config.p ? { padding: getLengthValue(config.p, breakpoint) } : {}),

                    ...(config.w ? { width: getLengthValue(config.w, breakpoint) } : {}),
                    ...(config.h ? { height: getLengthValue(config.h, breakpoint) } : {}),
                },
            }),
            {},
        ),
    };
};
