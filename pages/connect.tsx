import Head from 'next/head';
import HyperLink from '../components/HyperLink';
import Nav from '../components/Nav';

const Connect = () => (
  <>
    <Head>
      <title>Ben Adamsky - Connect</title>
      <meta
        name="description"
        content="How to contact me for work, opportunities, or just to say hi."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="h-full relative bg-ben-black flex flex-col items-center">
      <h1 className="mt-6 font-sans sm:text-6xl text-3xl text-white mb-2">
        How to connect
      </h1>
      <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 flex flex-col items-center justify-center">
        <p className="text-xl sm:text-2xl text-white mb-12 text-center">
          The easiest way to get in contact with me is via{' '}
          <HyperLink href="mailto:benadamsky@gmail.com">email</HyperLink>.
        </p>
        <p className="text-xl sm:text-2xl text-white mb-12 text-center">
          Want to hire me? Message me on{' '}
          <HyperLink href="https://www.upwork.com/freelancers/~01f344390ba3237708">
            Upwork
          </HyperLink>{' '}
          for dev work or consulting.
        </p>
        <p className="text-xl sm:text-2xl text-white text-center">
          My socials:{' '}
          <HyperLink href="https://twitter.com/benadamsky">Twitter</HyperLink>,{' '}
          <HyperLink href="https://linkedin.com/in/benadamsky">
            LinkedIn
          </HyperLink>
          , <HyperLink href="https://fcast.me/ba">Farcaster</HyperLink>
        </p>
      </div>
      <Nav />
    </div>
  </>
);

export default Connect;
