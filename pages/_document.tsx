import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content="Ben Adamsky - Building stuff" />
      <meta
        name="description"
        content="Founder, developer, UI/UX designer. Always looking to connect with interesting people because we can't build an exciting (and sustainable) future alone."
      />
      <meta property="og:title" content="Ben Adamsky - Building stuff" />
      <meta
        property="og:description"
        content="Founder, developer, UI/UX designer. Always looking to connect with interesting people because we can't build an exciting (and sustainable) future alone."
      />
      <meta property="og:image" content="https://benadamsky.com/favicon.png" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
