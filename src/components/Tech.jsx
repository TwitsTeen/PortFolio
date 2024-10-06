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
            logo="./images/html.png"
            title="HTML"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="./images/css.png"
            title="CSS"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="./images/javascript.png"
            title="JavaScript"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="./images/typescript.png"
            title="TypeScript"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="images/react.png"
            title="React"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="./images/tailwind.png"
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
            logo="./images/php.png"
            title="PHP"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="./images/laravel.png"
            title="Laravel"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="./images/nodejs.png"
            title="Node.js"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="./images/flask.png"
            title="Flask"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="./images/psql.png"
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
            logo="./images/java.png"
            title="Java"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="./images/csharp.png"
            title="C#"
          ></TechCard>
          <TechCard
            percentage={70}
            logo="./images/python.png"
            title="Python"
          ></TechCard>
        </div>
      </div>
    </div>
  );
};

export default Tech;
