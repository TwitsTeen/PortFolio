import React from "react";

const TechCard = ({ title, percentage, logo }) => {
  return (
    <span className="flex flex-col rounded-lg bg-darkcyan items-center p-4 mr-0 m-4 w-32 h-44">
      <img src={logo} alt={logo} width={100} className="my-auto" />
      <p className="text-xl">{title}</p>
      <progress
        className="progress progress-accent w-11/12"
        value={percentage}
        max="100"
      ></progress>
    </span>
  );
};

export default TechCard;
