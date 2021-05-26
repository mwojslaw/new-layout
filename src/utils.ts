import { Breakpoint, Space, Theme, isBreakpoint, isSpace } from './Theme';

export type CSSUnit = 'px' | '%' | 'rem' | 'em';

export type Length = `${number}${CSSUnit}` | number | Space | 'auto';

export type ResponsiveProp<T> = Partial<Record<Breakpoint, T>>;

export type ResponsiveLength = ResponsiveProp<Length>;

export type Size = Exclude<Length, Space>;

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

const getBreakpointsFromResponsiveProp = (prop: ResponsiveProp<unknown>): Breakpoint[] => {
    return Object.keys(prop).filter((b) => b !== undefined) as Breakpoint[];
};

export const isResponsiveProp = <T>(prop: Required<unknown>): prop is ResponsiveProp<T> => {
    if (typeof prop !== 'object') return false;

    return Object.keys(prop).some(isBreakpoint);
};

export const getBreakpointsFromProps = (props: Record<string, any>): Breakpoint[] => {
    const responsiveProps = Object.values(props).filter(isResponsiveProp);

    return [...new Set(responsiveProps.flatMap(getBreakpointsFromResponsiveProp))];
};
