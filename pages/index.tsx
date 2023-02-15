import Head from 'next/head';
import DynamicText from '../components/DynamicText';
import Nav from '../components/Nav';

const Home = () => (
  <>
    <Head>
      <title>Ben Adamsky - Building stuff</title>
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
