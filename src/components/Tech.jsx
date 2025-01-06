import TechCard from "./TechCard";

const techData = [
  { logo: "/PortFolio/images/html.png", title: "HTML" },
  { logo: "/PortFolio/images/css.png", title: "CSS" },
  { logo: "/PortFolio/images/javascript.png", title: "JavaScript" },
  { logo: "/PortFolio/images/typescript.png", title: "TypeScript" },
  { logo: "/PortFolio/images/php.png", title: "PHP" },
  { logo: "/PortFolio/images/java.png", title: "Java" },
  { logo: "/PortFolio/images/csharp.png", title: "C#" },
  { logo: "/PortFolio/images/python.png", title: "Python" },
  { logo: "/PortFolio/images/symfony.png", title: "Symfony" },
  { logo: "/PortFolio/images/laravel.png", title: "Laravel" },
  { logo: "/PortFolio/images/nodejs.png", title: "Node.js" },
  { logo: "/PortFolio/images/flask.png", title: "Flask" },
  { logo: "/PortFolio/images/psql.png", title: "PostgreSQL" },
  { logo: "/PortFolio/images/react.png", title: "React" },
  { logo: "/PortFolio/images/reactnative.png", title: "React Native" },
  { logo: "/PortFolio/images/vuejs.png", title: "Vue.js" },
  { logo: "/PortFolio/images/tailwind.png", title: "TailwindCSS" },
];

const Tech = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center my-8">
        Mes compétences
      </h1>
      <div className="flex flex-wrap justify-center space-4">
        {techData.map((tech, index) => (
          <TechCard key={index} logo={tech.logo} title={tech.title} />
        ))}
      </div>
    </>
  );
};

export default Tech;
