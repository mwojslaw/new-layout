import { getResponsiveProps, getBreakpointsFromResponsiveProp } from './utils';
import { TPlugin } from 'fela';
import { isSpace, WithTheme } from './Theme';

export const spacePlugin: TPlugin<WithTheme<Record<string, unknown>>> = (style: any, type, renderer, properties) => {
    const { theme } = properties;

    let result = style;
    for (const rule in style) {
        const value = style[rule];

        if (isSpace(value)) {
            result[rule] = `${theme.space[value]}`;
        }
    }

    return result;
};

export const responsivePropsPlugin: TPlugin<WithTheme<Record<string, unknown>>> = (style: any, type, renderer, properties) => {
    const { theme } = properties;

    const responsiveRules = getResponsiveProps(style);

    if (!responsiveRules.length) return style;

    const breakpoints = [...new Set(responsiveRules.flatMap(([_, value]) => getBreakpointsFromResponsiveProp(value)))];

    let result = style;

    for (const breakpoint of breakpoints) {
        result[`@media(min-width: ${theme.breakpoints[breakpoint]})`] = {};

        for (const rule of responsiveRules) {
            const [property, responsiveValue] = rule;
            const value = responsiveValue[breakpoint];
            result[`@media(min-width: ${theme.breakpoints[breakpoint]})`][property] = value;
        }
    }

    return result;
};
