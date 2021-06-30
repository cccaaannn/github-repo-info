import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: #092a5c;
        color: #ffff;
    }

    a {
        color: #00ffcc;
        text-decoration: none;
    }

    img {
        border-radius: 50%;
    }

    footer {
        margin-top: 30px;
        text-align: center
    }
`;
 
export default GlobalStyles;