import { modularScale } from 'polished';

export type Space = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type ColorName = 'black' | 'gray' | 'white';

type ColorRange = 'light' | 'moderate' | 'dark';

export type Color = `${ColorName}-${ColorRange}`;

export type Theme = {
    space: Record<Space, string>;
    breakpoints: Record<Breakpoint, string>;
    colorPalette: Record<Color, string>;
};

export type WithTheme<T> = T & { theme: Theme };

const createScale = (ratio: number, base: number) => (steps: number) => `${modularScale(steps, base, ratio)}px`;

const spaceScale = createScale(2, 4);

export const theme: Theme = {
    space: {
        none: '0',
        sm: spaceScale(0),
        md: spaceScale(1),
        lg: spaceScale(2),
        xl: spaceScale(3),
        '2xl': spaceScale(4),
    },
    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    },
    colorPalette: {
        'black-dark': 'black',
        'black-light': 'black',
        'black-moderate': 'black',
        'gray-dark': '#374151',
        'gray-light': '#F3F4F6',
        'gray-moderate': '#6B7280',
        'white-dark': 'white',
        'white-light': 'white',
        'white-moderate': 'white',
    },
};
