import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import { Provider } from "urql";
import GqlClient from "../gql-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={GqlClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
