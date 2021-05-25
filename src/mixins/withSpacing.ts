import { CSSObject } from 'styled-components';
import { WithTheme } from '../Theme';
import { getBreakpointsFromProps, Length, getLengthValueFactory, ResponsiveSize, ResponsiveLength, Size } from '../utils';

export type WithSpacingConfig = Partial<{
    margin: Length | ResponsiveLength;
    marginBottom: Length | ResponsiveLength;
    marginTop: Length | ResponsiveLength;
    marginX: Length | ResponsiveLength;

    padding: Length | ResponsiveLength;
    paddingX: Length | ResponsiveLength;
    width: Size | ResponsiveSize;
    height: Size | ResponsiveSize;
}>;

export const withSpacing = ({ theme, ...config }: WithTheme<WithSpacingConfig>): CSSObject => {
    const breakpoints = getBreakpointsFromProps(config);

    const getLengthValue = getLengthValueFactory(theme);

    return {
        boxSizing: 'border-box',
        ...(config.margin ? { margin: getLengthValue(config.margin) } : {}),
        ...(config.marginBottom ? { marginBottom: getLengthValue(config.marginBottom) } : {}),
        ...(config.marginTop ? { marginTop: getLengthValue(config.marginTop) } : {}),
        ...(config.marginX
            ? {
                  marginLeft: getLengthValue(config.marginX),
                  marginRight: getLengthValue(config.marginX),
              }
            : {}),

        ...(config.padding ? { padding: getLengthValue(config.padding) } : {}),
        ...(config.paddingX ? { paddingLeft: getLengthValue(config.paddingX), paddingRight: getLengthValue(config.paddingX) } : {}),

        ...(config.width ? { width: getLengthValue(config.width) } : {}),
        ...(config.height ? { height: getLengthValue(config.height) } : {}),

        ...breakpoints.reduce(
            (rules, breakpoint) => ({
                ...rules,
                [`@media(min-width: ${theme.breakpoints[breakpoint]})`]: {
                    ...(config.margin ? { margin: getLengthValue(config.margin, breakpoint) } : {}),
                    ...(config.marginBottom ? { marginBottom: getLengthValue(config.marginBottom, breakpoint) } : {}),
                    ...(config.marginTop ? { marginTop: getLengthValue(config.marginTop, breakpoint) } : {}),
                    ...(config.marginX
                        ? {
                              marginLeft: getLengthValue(config.marginX, breakpoint),
                              marginRight: getLengthValue(config.marginX, breakpoint),
                          }
                        : {}),

                    ...(config.paddingX
                        ? {
                              paddingLeft: getLengthValue(config.paddingX, breakpoint),
                              paddingRight: getLengthValue(config.paddingX, breakpoint),
                          }
                        : {}),
                    ...(config.padding ? { padding: getLengthValue(config.padding, breakpoint) } : {}),

                    ...(config.width ? { width: getLengthValue(config.width, breakpoint) } : {}),
                    ...(config.height ? { height: getLengthValue(config.height, breakpoint) } : {}),
                },
            }),
            {},
        ),
    };
};
