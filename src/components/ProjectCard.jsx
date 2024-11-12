import PropTypes from "prop-types";

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="card card-side bg-base-300 shadow-xl transform transition-transform duration-300 hover:scale-110 hover:bg-base-200">
      <figure className="w-1/3 flex-shrink-0">
        <img src={image} alt={image} className="object-cover" />
      </figure>
      <div className="card-body my-auto">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
