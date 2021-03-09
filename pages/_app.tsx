import { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components';
import Head from 'next/head';

// import '../styles/globals.css'
import GlobalStyle from 'styles/global-styles';
import {theme} from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
