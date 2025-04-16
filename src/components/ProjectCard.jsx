import PropTypes from "prop-types";

const ProjectCard = ({ title, description, image, tags }) => {
  return (
    <div className="card card-side bg-base-300 shadow-xl transform transition-transform duration-300 hover:scale-110 hover:bg-base-200 max-h-fit">
      <figure className="w-1/3 flex-shrink-0">
        <img src={image} alt={image} className="object-cover" />
      </figure>
      <div className="card-body my-auto">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="badge badge-outline badge-accent text-md px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
