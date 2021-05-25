import { CSSObject } from 'styled-components';
import { WithTheme } from '../Theme';
import * as CSS from 'csstype';
import { Length, ResponsiveLength, ResponsiveProp, getLengthValueFactory, getBreakpointsFromProps, isResponsiveProp } from '../utils';

export type WithFlexConfig = Partial<{
    flexWrap: CSS.Property.FlexWrap;
    flexDirection: CSS.Property.FlexDirection | ResponsiveProp<CSS.Property.FlexDirection>;
    justifyContent: CSS.Property.JustifyContent;
    alignItems: CSS.Property.AlignItems;
    gap: Length | ResponsiveLength;
}>;

export const withFlex = ({ theme, ...config }: WithTheme<WithFlexConfig>): CSSObject => {
    const breakpoints = getBreakpointsFromProps(config);

    const getLengthValue = getLengthValueFactory(theme);

    return {
        display: 'flex',
        ...(config.gap && { gap: getLengthValue(config.gap) }),
        ...(config.flexWrap && { flexWrap: config.flexWrap }),
        ...(config.alignItems && { alignItems: config.alignItems }),
        ...(config.flexDirection && !isResponsiveProp(config.flexDirection) && { flexDirection: config.flexDirection }),
        ...(config.justifyContent && { justifyContent: config.justifyContent }),

        ...breakpoints.reduce(
            (rules, breakpoint) => ({
                ...rules,
                [`@media(min-width: ${theme.breakpoints[breakpoint]})`]: {
                    ...(config.gap && { gap: getLengthValue(config.gap) }),
                    ...(config.flexDirection &&
                        isResponsiveProp(config.flexDirection) && { flexDirection: config.flexDirection[breakpoint] }),
                },
            }),
            {},
        ),
    };
};
