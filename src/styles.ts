import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const Styles = createGlobalStyle`
    ${normalize()};

    * {
        box-sizing: border-box;
    }
`;
