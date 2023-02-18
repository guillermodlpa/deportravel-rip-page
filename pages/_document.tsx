import getConfig from "next/config";
import Document, { Html, Head, Main, NextScript } from "next/document";

const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href={
              "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
            }
            rel="stylesheet"
          />
          {publicRuntimeConfig.UMAMI_WEBSITE_ID && (
            <script
              async
              defer
              data-website-id={publicRuntimeConfig.UMAMI_WEBSITE_ID}
              data-domains="depor.travel"
              src="https://umami-pvn48eb4t-guillermodlpa.vercel.app/umami.js"
            ></script>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
