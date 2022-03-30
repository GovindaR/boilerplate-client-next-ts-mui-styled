import Head from "next/head";
import { AppProps } from "next/app";
import { ReactElement, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { ReactQueryDevtools } from "react-query/devtools";
import { PersistGate } from "redux-persist/integration/react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledCompThemeProvider } from "styled-components";

import theme from "../src/styles/theme";
import { persistor, RootState, store } from "../src/state/store";

const WrapperComp = (props: WrapperCompTypes): ReactElement => {
  const { Component, pageProps } = props;
  const rtl = useSelector(({ settings }: RootState) => settings.rtl);
  const darkTheme = useSelector(
    ({ settings }: RootState) => settings.darkTheme
  );

  const cusTheme = theme({ rtl, darkTheme });

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={cusTheme}>
        <StyledCompThemeProvider theme={cusTheme}>
          <CssBaseline />
          <div dir={rtl ? "rtl" : "ltr"}>
            <Component {...pageProps} />
          </div>
        </StyledCompThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default function MyApp(props: AppPropsExtended) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={props.pageProps.dehydratedState}>
            <WrapperComp {...props} />
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
type WrapperCompTypes = {
  isRtl?: boolean;
  Component?: any;
  pageProps?: object;
};

type AppPropsExtended = AppProps;
