import { getResponsiveProps, getBreakpointsFromResponsiveProp } from './utils';
import { TPlugin } from 'fela';
import { Theme, isSpace, WithTheme } from './Theme';

const mapValue = (value: any, theme: Theme) => {
    if (typeof value === 'number') return `${value}px`;

    if (isSpace(value)) return `${theme.space[value]}`;

    return value;
};

export const spacePlugin: TPlugin<WithTheme<Record<string, unknown>>> = (style, type, renderer, properties) => {
    const { theme } = properties;

    return Object.entries(style).reduce((styles, [key, value]) => {
        return {
            ...styles,
            [key]: mapValue(value, theme),
        };
    }, {});
};

export const responsivePropsPlugin: TPlugin<WithTheme<Record<string, unknown>>> = (style, type, renderer, properties) => {
    const { theme } = properties;

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
