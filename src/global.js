import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *:root {
    --heading-font: "Fraunces", serif;
    --text-font: "Barlow", sans-serif;
    --primary-yellow: hsl(51, 100%, 49%);

    --grayish-blue: hsl(210, 4%, 67%);
    --very-dark-grayish-blue: hsl(212, 27%, 19%);
    --white: hsl(0, 0%, 100%);

    --transition: 0.3s all ease-in-out;
    }

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    }
`;
