import { getResponsiveProps, getBreakpointsFromResponsiveProp } from './utils';
import { TPlugin } from 'fela';
import { Theme, isSpace } from './Theme';

export const spacePlugin: TPlugin = (style, type, renderer, properties) => {
    const { theme: almostTheme } = properties;

    const theme = almostTheme as Theme;

    return Object.entries(style).reduce((styles, [key, value]) => {
        return {
            ...styles,
            [key]: isSpace(value) ? `${theme.space[value]}` : value,
        };
    }, {});
};

export const responsivePropsPlugin: TPlugin = (style, type, renderer, properties) => {
    const { theme: almostTheme } = properties;

    const theme = almostTheme as Theme;

    const responsiveRules = getResponsiveProps(style);

    const breakpoints = [...new Set(responsiveRules.flatMap(([_, value]) => getBreakpointsFromResponsiveProp(value)))];

    return {
        ...style,
        ...breakpoints.reduce(
            (rules, breakpoint) => ({
                ...rules,
                [`@media(min-width: ${theme.breakpoints[breakpoint]})`]: {
                    ...responsiveRules.reduce((result, rule) => {
                        const [property, responsiveValue] = rule;
                        const value = responsiveValue[breakpoint];

                        return {
                            ...result,
                            [property]: value,
                        };
                    }, {}),
                },
            }),
            {},
        ),
    };
};
