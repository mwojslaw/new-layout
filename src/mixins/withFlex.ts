import * as CSS from 'csstype';
import { Length, ResponsiveLength, ResponsiveProp } from '../utils';

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
}: WithFlexConfig): Partial<Record<keyof CSS.Properties, any>> => ({
    display: 'flex',
    flexWrap,
    gap,
    justifyContent,
    alignItems,
    flexDirection,
});
