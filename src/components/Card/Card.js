import { IMG_URL } from "../../constant/constant";
import "./Card.css";

const Card = ({ restaurant }) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    areaName,
    avgRating,
    costForTwo,
    availability,
  } = restaurant.info;

  return (
    <div className="card">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt={name}
        className="card-image"
      />
      <div className="card-content">
        <h1>{availability.opened ? "Opened:🟢" : "Closed:🔴"}</h1>
        <h2 className="name">
          {name}- <small>{areaName}</small>
        </h2>
        <small className="cuisines">{cuisines.join(", ")}</small>
        <h4>Rating: {avgRating}</h4>
        <h4>Price: {costForTwo}</h4>
      </div>
    </div>
  );
};

export default Card;
