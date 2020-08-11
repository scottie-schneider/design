import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html, #__next {    
    margin: 0;
    min-height: 100%;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
