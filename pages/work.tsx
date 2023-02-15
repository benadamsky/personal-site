import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Nav';

const projects = [
  {
    role: 'Full-Stack Developer (2022 - present)',
    title: 'Freeport',
    subtitle: 'Invest in the world\'s rarest fine art',
    description:
      'Developing front-end and back-end solutions for the platform\'s custom 3D art gallery. Assisting in various product decisions and building out new features.',
    image: '/freeport.png'
  },
  {
    role: 'Co-Founder, COO (2021 - 2022)',
    title: 'Kettle',
    subtitle: 'Virtual events with personalized activities',
    description:
      'Had a major role in company operations and the product lifecycle. Co-managed a team of 5 and led critical product decisions on 3 MVPs. Helped facilitate user feedback throughout all product iterations.',
    video: '/kettle.mp4'
  },
  {
    role: 'Founding Engineer (2020 - 2021)',
    title: 'Branch.gg',
    subtitle: 'Your space for work and play',
    description:
      'Created spatial audio software at a fast-paced venture backed tech startup. Had a key role in the development of both the MVP and industrial-ready web app, including major design decisions for the core app and custom style library.',
    video: '/branch.mp4'
  },
  {
    role: 'Freelance Senior React Developer (2021)',
    title: 'Modzy',
    subtitle: 'MLOps Platform for Enterprise and Edge',
    description:
      'Refactored and optimized existing React components using in-house style library. Worked closely with the team to solve complex bugs and technical issues throughout the application. Created new docs site for public facing API.',
    image: '/modzy.png'
  }
];

const Work = () => (
  <>
    <Head>
      <title>Ben Adamsky - Work</title>
      <meta
        name="description"
        content="A compilation of highlights from the things I've had the opportunity to build so far."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="h-full relative bg-ben-black flex flex-col items-center">
      <div className="mt-6 flex flex-col items-center justify-center">
        <h1 className="font-sans sm:text-6xl text-3xl text-white mb-2">
          Recent Projects
        </h1>
        <p className="font-mono text-xs sm:text-lg ben-gradient italic px-8 mb-4 text-center">
          some of the startups and contract work i&apos;ve been involved with lately
        </p>
      </div>
      <div className="flex flex-wrap -m-2 max-w-full">
        {projects.map((project, index) => (
          <div className="p-4 xl:w-1/2 w-full" key={project.title}>
            <div
              className={`flex relative w-[300px] h-[217.75px] sm:w-[600px] sm:h-[435.5px] xl:w-[600px] xl:h-[435.5px] mx-auto ${
                index % 2 === 0 ? 'xl:ml-auto xl:mr-0' : 'xl:mr-auto xl:ml-0'
              }`}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full xl:w-[600px] xl:h-[435.5px] object-cover object-center select-none"
                  fill
                  unoptimized
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
              ) : (
                <video
                  src={project.video}
                  className="absolute inset-0 w-full h-full xl:w-[600px] xl:h-[435.5px] object-cover object-center select-none"
                  autoPlay
                  muted
                  loop
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
              )}
              <div
                className="px-8 py-10 relative z-10 w-full bg-ben-black border-2 overflow-auto opacity-0 hover:opacity-100"
                style={{
                  borderImageSlice: 1,
                  borderImageSource:
                    'linear-gradient(45deg, rgb(99 102 241), rgb(147 197 253) 45%, rgb(96 165 250) 70%, rgb(59 130 246))'
                }}
              >
                <h3 className="title-font text-xs sm:text-base font-medium ben-gradient">
                  {project.role}
                </h3>
                <div className="flex flex-col sm:flex-row">
                  <h1 className="title-font text-sm sm:text-xl font-medium text-white">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-xs sm:text-base title-font font-medium text-gray-400 sm:ml-3 mt-1">
                    {project.subtitle}
                  </h2>
                </div>
                <p className="leading-relaxed text-sm sm:text-xl text-white mt-4 sm:mt-16">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Nav className="z-20 relative pt-4 pb-12 xl:pt-0 xl:pb-0 xl:fixed xl:bottom-12" />
    </div>
  </>
);

export default Work;
