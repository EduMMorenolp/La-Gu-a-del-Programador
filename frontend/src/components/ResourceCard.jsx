import { FaStar, FaRegStar } from 'react-icons/fa';

const ResourceCard = ({ title, description, onFavorite, isFavorite }) => {
  return (
    <div className="resource-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onFavorite}>
        {isFavorite ? <FaStar color="gold" /> : <FaRegStar />}
      </button>
    </div>
  );
};

export default ResourceCard;
