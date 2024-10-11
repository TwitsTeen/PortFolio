import TechCard from "./TechCard";

const Tech = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center my-8 ">
        Mes compétences
      </h1>
      <div className="flex flex-wrap justify-center space-4">
        <TechCard logo="/PortFolio/images/html.png" title="HTML"></TechCard>
        <TechCard logo="/PortFolio/images/css.png" title="CSS"></TechCard>
        <TechCard
          logo="/PortFolio/images/javascript.png"
          title="JavaScript"
        ></TechCard>
        <TechCard
          logo="/PortFolio/images/typescript.png"
          title="TypeScript"
        ></TechCard>
        <TechCard logo="/PortFolio/images/php.png" title="PHP"></TechCard>
        <TechCard logo="/PortFolio/images/java.png" title="Java"></TechCard>
        <TechCard logo="/PortFolio/images/csharp.png" title="C#"></TechCard>
        <TechCard logo="/PortFolio/images/python.png" title="Python"></TechCard>
        <TechCard
          logo="/PortFolio/images/laravel.png"
          title="Laravel"
        ></TechCard>
        <TechCard
          logo="/PortFolio/images/nodejs.png"
          title="Node.js"
        ></TechCard>
        <TechCard logo="/PortFolio/images/flask.png" title="Flask"></TechCard>
        <TechCard
          logo="/PortFolio/images/psql.png"
          title="PostgreSQL"
        ></TechCard>

        <TechCard logo="/PortFolio/images/react.png" title="React"></TechCard>
        <TechCard
          logo="/PortFolio/images/tailwind.png"
          title="TailwindCSS"
        ></TechCard>
      </div>
    </>
  );
};

export default Tech;
