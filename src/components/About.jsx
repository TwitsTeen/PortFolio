import ThemeSwitcher from "./ThemeSwitcher";
const About = () => {
  return (
    <>
      <div className="bg-primary-content">
        <div>
          <ThemeSwitcher></ThemeSwitcher>
        </div>
        <div className="flex flex-col gap-8 md:flex-row text-primary text-center">
          <h1 className="text-5xl md:text-9xl font-bold text-center p-8 md:p-24">
            FIERQUIN <br /> Mattéo
          </h1>

          <div className="mockup-code m-auto h-auto md:h-56 w-full md:w-1/3 p-4">
            <pre data-prefix="1" className="text-justify">
              <code>Développeur web fullstack</code>
            </pre>
            <pre data-prefix="2" className="text-justify">
              <code>HTML, CSS, JavaScript, React</code>
            </pre>
            <pre data-prefix="3" className="text-justify">
              <code>Node.js, Laravel, Flask</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
