const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-1/3 flex-shrink-0">
        <img src={image} alt={image} className="object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
