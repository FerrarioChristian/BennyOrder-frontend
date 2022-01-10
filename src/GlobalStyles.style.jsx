import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
      --background: #1f1d36;
      --primary: #f7f7f7;
      --accent: #8989cf;
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
        -webkit-box-shadow: 0 0 0 30px var(--background) inset !important;
    }

    input:-webkit-autofill{
        -webkit-text-fill-color: var(--primary) !important;
    }

`;
