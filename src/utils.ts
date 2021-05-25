import { Breakpoint, Space, Theme } from './Theme';

export type CSSUnit = 'px' | '%' | 'rem' | 'em';

export type ResponsiveProp<T> = Partial<Record<Breakpoint, T>>;

export type Length = `${number}${CSSUnit}` | number | Space | 'auto';

export type ResponsiveLength = ResponsiveProp<Length>;

export type Size = `${number}${CSSUnit}` | number;

export type ResponsiveSize = ResponsiveProp<Size>;

export const getLengthValueFactory = (theme: Theme) => (
    length: Length | ResponsiveLength | Size | ResponsiveSize,
    breakpoint?: Breakpoint,
): string | number => {
    if (typeof length === 'string') return isSpace(length) ? `${theme.space[length]}` : length;

    if (typeof length === 'number') return length;

    if (breakpoint) return length[breakpoint] ? getLengthValueFactory(theme)(length[breakpoint]!) : '';

    return '';
};

export const getBreakpointsFromResponsiveProp = (prop: ResponsiveProp<unknown>): Breakpoint[] => {
    return Object.keys(prop).filter((b) => b !== undefined) as Breakpoint[];
};

const isResponsiveProp = <T>(prop: unknown): prop is ResponsiveProp<T> => {
    return typeof prop === 'object';
};

export const getBreakpointsFromProps = (props: {}): Breakpoint[] => {
    const responsiveProps = Object.values(props).filter(isResponsiveProp);

    return [...new Set(responsiveProps.flatMap(getBreakpointsFromResponsiveProp))];
};

export const isSpace = (value: unknown): value is Space => {
    const spaceMap: Record<Space, true> = {
        sm: true,
        md: true,
        lg: true,
        xl: true,
        '2xl': true,
        none: true,
    };

    return spaceMap[value as Space];
};
