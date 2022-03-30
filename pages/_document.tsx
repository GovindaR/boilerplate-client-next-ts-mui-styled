import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import { LangType } from "../src/types";

export interface LangProps {
  lang: LangType;
}

export type DocumentProps = DocumentContext & LangProps;

export default class MyDocument extends Document<DocumentProps> {
  constructor(props: DocumentProps) {
    super(props as any);
  }
  render() {
    const lang: LangType = this.props.lang;
    return (
      <Html lang={lang}>
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={"#F9F9F9"} />

          <meta name="google" content="notranslate" />

          {/* <!-- fontawesome here --> */}
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous"
          />
          {/* Google fonts add*/}

          <script
            defer
            type="text/javascript"
            src="/js/persian.min.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
MyDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(
            <StyleSheetManager stylisPlugins={[stylisRTLPlugin]}>
              <App {...props} />
            </StyleSheetManager>
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};
