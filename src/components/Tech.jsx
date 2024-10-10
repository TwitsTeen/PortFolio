import TechCard from "./TechCard";

const Tech = () => {
  return (
    <div role="tablist" className="tabs tabs-lifted m-8">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Frontend"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <div className="flex flex-wrap space-x-4">
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/html.png"
            title="HTML"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/css.png"
            title="CSS"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/javascript.png"
            title="JavaScript"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/typescript.png"
            title="TypeScript"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/react.png"
            title="React"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/tailwind.png"
            title="TailwindCSS"
          ></TechCard>
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Backend"
        defaultChecked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <div className="flex flex-wrap space-x-4">
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/php.png"
            title="PHP"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/laravel.png"
            title="Laravel"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/nodejs.png"
            title="Node.js"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/flask.png"
            title="Flask"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/psql.png"
            title="PostgreSQL"
          ></TechCard>
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Languages"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <div className="flex flex-wrap space-x-4">
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/java.png"
            title="Java"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/csharp.png"
            title="C#"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="/PorteFolio/images/python.png"
            title="Python"
          ></TechCard>
        </div>
      </div>
    </div>
  );
};

export default Tech;
