import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	html {
		font-size: 16px;
	}
	body {
		margin: 0;
        height: 100vh;
        font-size: 1rem;
    }

`;
