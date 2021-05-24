import { Breakpoint, Space, Theme } from './Theme';

export type CSSUnit = 'px' | '%' | 'rem' | 'em';

export type Length = [number, CSSUnit] | number | Space;

export type ResponsiveProp<T> = Partial<Record<Breakpoint, T>>;

export type ResponsiveLength = ResponsiveProp<Length>;

type GetLengthValueConfig = {
    length: Length | ResponsiveLength;
    theme: Theme;
    breakpoint?: Breakpoint;
};

export const getLengthValue = ({ length, theme, breakpoint }: GetLengthValueConfig): string => {
    if (Array.isArray(length)) return `${length[0]}${length[1]}`;

    if (typeof length === 'string') return `${theme.space[length]}`;

    if (isResponsiveLength(length)) return length[breakpoint!] ? getLengthValue({ length: length[breakpoint!]!, theme }) : '';

    return `${length}px`;
};

export const isResponsiveLength = (prop: unknown): prop is ResponsiveLength => {
    return typeof prop === 'object';
};

export const getBreakpointsFromResponsiveProp = (prop: ResponsiveProp<unknown>): Breakpoint[] => {
    return Object.keys(prop).filter((b) => b !== undefined) as Breakpoint[];
};

export const getBreakpointsFromProps = (props: {}): Breakpoint[] => {
    const responsiveProps = Object.values(props).filter(isResponsiveLength);
    return [...new Set(responsiveProps.flatMap(getBreakpointsFromResponsiveProp))];
};
