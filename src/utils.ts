import React from 'react';
import { Breakpoint, Space, isBreakpoint } from './Theme';

export type CSSUnit = 'px' | '%' | 'rem' | 'em';

export type Length = `${number}${CSSUnit}` | Space | number | 'auto';

export type ResponsiveProp<T> = Partial<Record<Breakpoint, T>>;

export type ResponsiveLength = ResponsiveProp<Length>;

export type Size = `${number}${CSSUnit}` | Space;

export type ResponsiveSize = ResponsiveProp<Size>;

export const getBreakpointsFromResponsiveProp = (prop: ResponsiveProp<unknown>): Breakpoint[] => {
    return Object.keys(prop).filter((b) => b !== undefined) as Breakpoint[];
};

export const isResponsiveProp = <T>(prop: Required<unknown>): prop is ResponsiveProp<T> => {
    if (typeof prop !== 'object') return false;

    return Object.keys(prop).some(isBreakpoint);
};

export const getResponsiveProps = (props: Record<string, any>): [string, ResponsiveProp<unknown>][] => {
    return Object.entries(props).filter(([, value]) => isResponsiveProp(value));
};

export type Prefer<P, T> = P & Omit<T, keyof P>;

export type ElementPropsWithoutRef<T extends React.ElementType> = Pick<
    React.ComponentPropsWithoutRef<T>,
    keyof React.ComponentPropsWithoutRef<T>
>;

export type OverwritableType<OwnProps, Type extends React.ElementType> = Prefer<OwnProps, ElementPropsWithoutRef<Type>>;

type AsProp<T> = { as?: T };

export type WithAsProp<As extends React.ElementType, OwnProps> = OverwritableType<OwnProps & AsProp<As>, As>;
