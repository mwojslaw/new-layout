import * as CSS from 'csstype';
import { Length, ResponsiveLength, ResponsiveProp, Prefer } from '../utils';

export type WithFlexConfig = {
    flexWrap?: CSS.Property.FlexWrap;
    flexDirection?: CSS.Property.FlexDirection | ResponsiveProp<CSS.Property.FlexDirection>;
    justifyContent?: CSS.Property.JustifyContent;
    alignItems?: CSS.Property.AlignItems;
    gap?: Length | ResponsiveLength;
};

export const withFlex = ({
    flexWrap,
    gap,
    justifyContent,
    alignItems,
    flexDirection,
}: WithFlexConfig): Prefer<WithFlexConfig, CSS.Properties> => ({
    display: 'flex',
    flexWrap,
    gap,
    justifyContent,
    alignItems,
    flexDirection,
});
