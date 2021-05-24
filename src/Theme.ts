export type Space = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Theme = {
    space: Record<Space, string>;
    breakpoints: Record<Breakpoint, string>;
};

export type WithTheme<T> = T & { theme: Theme };

export const theme: Theme = {
    space: {
        none: '0',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '32px',
        '2xl': '64px',
    },
    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    },
};
