import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Nav';

const projects = [
  {
    role: 'Freelance Senior React developer',
    title: 'Stealth startup',
    subtitle: 'Next-gen home buying platform',
    description:'Refactored over a dozen React components spanning across different parts of the app. Implemented new features and fixed bugs. Helped identify painpoints in the codebase and suggested solutions.',
    image: '/stealth.png'
  },
  {
    role: 'Co-Founder, COO',
    title: 'Kettle',
    subtitle: 'Host virtual events with personalized activities',
    description:'Had a major role in company operations and the product lifecycle. Led crucial product decisions on 3 MVPs. Helped facilitate user feedback and all product iterations.',
    video: '/kettle.mp4'
  },
  {
    role: 'Founding Engineer',
    title: 'Branch.gg',
    subtitle: 'Your space for work and play',
    description:'Created spatial audio software at a fast-paced venture backed tech startup. Had a key role in development of both the MVP and industrial-ready web app, including major design decisions of the core app and custom style library.',
    video: '/branch.mp4'
  },
  {
    role: 'Freelance React developer',
    title: 'Modzy',
    subtitle: 'MLOps Platform for Enterprise and Edge',
    description:'Refactored and optimized existing React components using in-house style library. Completed advanced problem-solving tasks such as complicated bug fixes. Created brand new Documentation site for public facing API.',
    image: '/modzy.png'
  }
]

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
    <div className="min-h-screen py-2 relative bg-ben-black flex flex-col items-center">
      <div className='mt-6 flex flex-col items-center justify-center'>
        <h1 className="font-sans sm:text-6xl text-3xl text-white mb-2">
          Recent projects
        </h1>
        <p className="font-mono text-xs sm:text-lg ben-gradient italic px-8 mb-4 text-center">
          A mix of freelance work and startups I&apos;ve been a part of
        </p>
      </div>
      <div className="flex flex-wrap -m-2 max-w-full">
          {projects.map((project, index) => (
            <div className="p-4 xl:w-1/2 w-full" key={project.title}>
              <div className={`flex relative w-[300px] h-[217.75px] sm:w-[600px] sm:h-[435.5px] xl:w-[600px] xl:h-[435.5px] mx-auto ${index % 2 === 0 ? 'xl:ml-auto xl:mr-0' : 'xl:mr-auto xl:ml-0'}`}>
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
                  className="px-8 py-10 relative z-10 w-full bg-[#020202] border-2 overflow-auto opacity-0 hover:opacity-100"
                  style={{
                    borderImageSlice: 1,
                    borderImageSource: 'linear-gradient(45deg, rgb(99 102 241), rgb(147 197 253) 45%, rgb(96 165 250) 70%, rgb(59 130 246))'
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
                  <p className="leading-relaxed text-sm sm:text-xl text-white mt-4 sm:mt-16">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      <Nav className="z-20 relative my-2 sm:my-4 xl:fixed xl:bottom-12 xl:my-0" />
    </div>
  </>
);

export default Work;
