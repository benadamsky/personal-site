import { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const Document = () => {
  const ogImageUrl = `${publicRuntimeConfig.basePath}/favicon.png`;

  return (
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
        <meta property="og:title" content="Ben Adamsky - building stuff" />
        <meta
          property="og:description"
          content="Founder, developer, UI/UX designer. Always looking to connect with interesting people because we can't build an exciting (and sustainable) future alone."
        />
        <meta property="og:image" content={ogImageUrl} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
