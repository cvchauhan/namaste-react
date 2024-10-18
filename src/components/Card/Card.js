import { IMG_URL } from "../../constant/constant";
import "./Card.css";

const Card = ({ restaurant }) => {
  return (
    <div className="card">
      <img
        src={IMG_URL + restaurant.info.cloudinaryImageId}
        alt={restaurant.info.name}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="name">{restaurant.info.name}</h2>
        <small className="cuisines">
          {restaurant.info.cuisines.join(", ")}
        </small>
      </div>
    </div>
  );
};

export default Card;
