import Head from 'next/head';
import DynamicText from '../components/DynamicText';
import Nav from '../components/Nav';

const Home = () => (
  <>
    <Head>
      <title>Ben Adamsky - Building stuff</title>
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
    </Head>
    <div className="h-full relative bg-ben-black flex flex-col items-center justify-center">
      <h1 className="font-sans md:text-8xl text-5xl text-white mb-2">
        Ben Adamsky
      </h1>
      <DynamicText />
      <Nav />
    </div>
  </>
);

export default Home;
