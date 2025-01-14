import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        width: 100%;
        min-height: 100vh;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export default GlobalStyle