import Head from 'next/head';
import HyperLink from '../components/HyperLink';
import Nav from '../components/Nav';

const Connect = () => (
  <>
    <Head>
      <title>Ben Adamsky - Connect</title>
      <meta name="title" content="Ben Adamsky - Connect" />
      <meta
        name="description"
        content="How to contact me for work, cool opportunities, or just to say hi."
      />
      <meta name="og:title" content="Ben Adamsky - Connect" />
      <meta
        name="og:description"
        content="How to contact me for work, cool opportunities, or just to say hi."
      />
    </Head>
    <div className="h-full relative bg-ben-black flex flex-col items-center">
      <h1 className="mt-6 font-sans sm:text-6xl text-3xl text-white mb-2">
        How to Connect
      </h1>
      <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 flex flex-col items-center justify-center">
        <p className="text-xl sm:text-2xl text-white mb-12 text-center">
          the easiest way to get in contact with me is via{' '}
          <HyperLink href="mailto:benadamsky@gmail.com">email</HyperLink>.
        </p>
        <p className="text-xl sm:text-2xl text-white mb-12 text-center">
          want to hire me? email or message on{' '}
          <HyperLink href="https://www.upwork.com/freelancers/~01f344390ba3237708">
            upwork
          </HyperLink>{' '}
          for dev work / consulting.
        </p>
        <p className="text-xl sm:text-2xl text-white text-center">
          my socials:{' '}
          <HyperLink href="https://twitter.com/benadamsky">twitter</HyperLink>,{' '}
          <HyperLink href="https://linkedin.com/in/benadamsky">
            linkedin
          </HyperLink>
          , <HyperLink href="https://warpcast.com/ba">farcaster</HyperLink>
        </p>
      </div>
      <Nav />
    </div>
  </>
);

export default Connect;
