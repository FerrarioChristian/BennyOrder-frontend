import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
      --text: #707070;
      --background: #eef0f4;
      --primary: #1f1d36;
      --accent: #b4b4f2;
      --danger: #ff0062;
      --success: #00d165;
      --warning: #ffaa00;
      --info: #35a8f0;
      --disabled: #8989cf; /* opacity: 0.8 */
    }
    * {
        font-family: "Open Sans", sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active {
        font-family: "Open Sans", sans-serif;
        -webkit-box-shadow: 0 0 0 30px var(--primary) inset !important;
        box-shadow: 0 0 0 30px var(--primary) inset !important;
        caret-color: white;
    }

    input:-webkit-autofill{
        font-family: "Open Sans", sans-serif;
        -webkit-text-fill-color: var(--background) !important;
        caret-color: white;
    }

`;

export default GlobalStyles;
