import React from "react";

const About = () => {
  return (
    <div className="flex text-cyan bg-beige  text-center">
      <h1 className="text-9xl font-bold text-center p-24">
        FIERQUIN <br /> Mattéo
      </h1>

      <div className="mockup-code m-auto h-56 w-1/3">
        <pre data-prefix="1" className="text-justify">
          <code>Developpeur web fullstack</code>
        </pre>
        <pre data-prefix="2" className="text-justify">
          <code>HTML, CSS, JavaScript, React</code>
        </pre>
        <pre data-prefix="3" className="text-justify">
          <code>Node.js, Express, Flask</code>
        </pre>
      </div>
    </div>
  );
};

export default About;
