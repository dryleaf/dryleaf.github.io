import Document, { Html, Head, Main, NextScript } from "next/document";
//import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, ...ctx };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1325330735397854" crossOrigin="anonymous"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-QYZDF1YELD');
            `}
          </script>
          <link rel="icon" href={"/favicon.ico"} />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Engagement&family=Nunito Sans&display=swap"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="8CYV4Oyz865mIuy-fi8ERPZBOxhznQKaKWCn9CDcgPE"
          />
          <meta name="google-adsense-account" content="ca-pub-1325330735397854" />
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
