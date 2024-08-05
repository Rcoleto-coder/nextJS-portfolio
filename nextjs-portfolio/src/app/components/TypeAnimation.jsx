import { TypeAnimation } from 'react-type-animation';

const HeaderTypewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Rafael',
        1000, // wait 1s before replacing first string
        'Web Developer',
        1000,
        'Game Developer',
        1000,
        'Groot!',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3rem', display: 'block' }}
      repeat={Infinity}
    />
  );
};

export default HeaderTypewriter;