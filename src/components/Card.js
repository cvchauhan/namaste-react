import { IMG_URL } from "../constant/constant";
const Card = ({ resturant }) => {
  return (
    <div className="card">
      <img src={IMG_URL + resturant.info.cloudinaryImageId} />
      <h2 className="name">{resturant.info.name}</h2>
      <small>{resturant.info.cuisines.join(", ")}</small>
    </div>
  );
};

export default Card;
