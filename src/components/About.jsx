import ThemeSwitcher from "./ThemeSwitcher";
const About = () => {
  return (
    <>
      <div className="w-100vw bg-primary-content">
        <ThemeSwitcher></ThemeSwitcher>
      </div>
      <div className="flex flex-col gap-8 md:flex-row text-primary bg-primary-content text-center">
        <h1 className="text-5xl md:text-9xl font-bold text-center p-8 md:p-24">
          FIERQUIN <br /> Mattéo
        </h1>

        <div className="mockup-code m-auto h-auto md:h-56 w-full md:w-1/3 p-4">
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
    </>
  );
};

export default About;
