import Typewriter from 'typewriter-effect';

const DynamicText = () => (
  <h2 className="font-mono md:text-2xl sm:mt-2 text-md text-blue-500 h-8 px-6 text-center">
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString('Founder, ')
          .pauseFor(500)
          .typeString('React developer, ')
          .pauseFor(500)
          .changeDelay(225)
          .typeString('UI/UX ')
          .changeDelay('natural')
          .typeString('designer')
          .pauseFor(3500)
          .deleteAll()
          .pauseFor(2000)
          .typeString('Always building web apps')
          .pauseFor(500)
          .deleteChars(8)
          .typeString('software products')
          .pauseFor(250)
          .deleteChars(17)
          .typeString('<i>good vibes<i> ???')
          .deleteChars(14)
          .typeString('stuff')
          .pauseFor(3500)
          .deleteAll()
          .pauseFor(2000)
          .typeString('Want to connect?')
          .pauseFor(500)
          .typeString(' Shoot me an email or Twitter DM')
          .pauseFor(3500)
          .deleteAll()
          .pauseFor(2000)
          .typeString('Check out my portfolio')
          .pauseFor(250)
          .typeString(' or blog')
          .pauseFor(250)
          .typeString(' (coming soon!)')
          .pauseFor(3500)
          .deleteAll()
          .pauseFor(2000)
          .start();
      }}
      options={{
        loop: true,
        autoStart: true,
        wrapperClassName: 'ben-gradient'
      }}
    />
  </h2>
);

export default DynamicText;
