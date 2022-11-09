import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: url('/fonts/poppins-v20-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/poppins-v20-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/poppins-v20-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/poppins-v20-latin-500.woff') format('woff'), /* Modern Browsers */
       url('/fonts/poppins-v20-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/poppins-v20-latin-500.svg#Poppins') format('svg'); /* Legacy iOS */
}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	html {
		font-size: 16px;
	}
	body {
        font-family: "Poppins",sans-serif;
		margin: 0;
        height: 100vh;
        font-size: 1rem;
        background: #e7f6f2;
    }


`;
