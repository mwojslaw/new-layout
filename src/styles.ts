import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const Styles = createGlobalStyle`
    ${normalize()};

    html, body, #root { 
        height: 100%;
    }

    * {
        box-sizing: border-box;
    }
`;
