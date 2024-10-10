import TechCard from "./TechCard";

const Tech = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center my-8">
        Mes compétences{" "}
      </h1>
      <div className="flex flex-wrap justify-center space-4">
        <TechCard logo="/PorteFolio/images/html.png" title="HTML"></TechCard>
        <TechCard logo="/PorteFolio/images/css.png" title="CSS"></TechCard>
        <TechCard
          logo="/PorteFolio/images/javascript.png"
          title="JavaScript"
        ></TechCard>
        <TechCard
          logo="/PorteFolio/images/typescript.png"
          title="TypeScript"
        ></TechCard>
        <TechCard logo="/PorteFolio/images/php.png" title="PHP"></TechCard>
        <TechCard logo="/PorteFolio/images/java.png" title="Java"></TechCard>
        <TechCard logo="/PorteFolio/images/csharp.png" title="C#"></TechCard>
        <TechCard
          logo="/PorteFolio/images/python.png"
          title="Python"
        ></TechCard>
        <TechCard
          logo="/PorteFolio/images/laravel.png"
          title="Laravel"
        ></TechCard>
        <TechCard
          logo="/PorteFolio/images/nodejs.png"
          title="Node.js"
        ></TechCard>
        <TechCard logo="/PorteFolio/images/flask.png" title="Flask"></TechCard>
        <TechCard
          logo="/PorteFolio/images/psql.png"
          title="PostgreSQL"
        ></TechCard>

        <TechCard logo="/PorteFolio/images/react.png" title="React"></TechCard>
        <TechCard
          logo="/PorteFolio/images/tailwind.png"
          title="TailwindCSS"
        ></TechCard>
      </div>
    </>
  );
};

export default Tech;
