import {createGlobalStyle} from 'styled-components';

const GlobalReset = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`;

export default GlobalReset;