import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" >
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/*  i should put an img  */}
        <body className="bg-fixed bg-gradient-to-r from-pink to-pink-100 dark:from-dark-500 dark:to-dark-700 dark:text-white ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
// from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white