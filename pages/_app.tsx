import GlobalStyles from "@/styles/GlobalStyles";
import theme from "@/styles/theme";
import type {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import Layout from "@/components/common/Layout";

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
