import { CSSObject } from 'styled-components';
import { WithTheme } from '../Theme';
import * as CSS from 'csstype';
import { Length, ResponsiveLength, getLengthValueFactory, getBreakpointsFromProps } from '../utils';

export type WithFlexConfig = Partial<{
    flexWrap: CSS.Property.FlexWrap;
    g: Length | ResponsiveLength;
}>;

export const withFlex = ({ theme, ...config }: WithTheme<WithFlexConfig>): CSSObject => {
    const breakpoints = getBreakpointsFromProps(config);

    const getLengthValue = getLengthValueFactory(theme);

    return {
        display: 'flex',
        ...(config.g ? { gap: getLengthValue(config.g) } : {}),
        ...(config.flexWrap ? { flexWrap: config.flexWrap } : {}),

        ...breakpoints.reduce(
            (rules, breakpoint) => ({
                ...rules,
                [`@media(min-width: ${theme.breakpoints[breakpoint]})`]: {
                    ...(config.g ? { gap: getLengthValue(config.g) } : {}),
                },
            }),
            {},
        ),
    };
};
