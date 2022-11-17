import Head from 'next/head';
import DynamicText from '../components/DynamicText';
import Nav from '../components/Nav';

const Home = () => (
  <>
    <Head>
      <title>Ben Adamsky - Creating things</title>
      <meta
        name="description"
        content="Founder, React developer, UI/UX designer. Always looking to connect with interesting people because we can't build an exciting (and sustainable) future alone."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="min-h-screen py-2 relative bg-ben-black flex flex-col items-center justify-center">
      <h1 className="font-sans md:text-8xl text-5xl text-white mb-2">
        Ben Adamsky
      </h1>
      <DynamicText />
      <Nav />
    </div>
  </>
);

export default Home;
