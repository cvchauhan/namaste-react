import Card from "../Card/Card";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton"; // Install this package
import "react-loading-skeleton/dist/skeleton.css"; // CSS for skeleton
import "./Body.css";
import useResData from "../../hooks/useResData";
import { API_URL } from "../../constant/constant";

const Body = () => {
  const { loading, restaurantData } = useResData(API_URL);
  console.log(restaurantData);
  return (
    <div className="body-content">
      {loading
        ? Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="card">
              <Skeleton height={180} /> {/* Skeleton for image */}
              <div className="card-content">
                <Skeleton count={1} height={24} />{" "}
                {/* Skeleton for restaurant name */}
                <Skeleton count={1} height={16} style={{ marginTop: 6 }} />{" "}
                {/* Skeleton for cuisines */}
              </div>
            </div>
          ))
        : restaurantData.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
              className="restaurant-link"
            >
              <Card restaurant={restaurant} />
            </Link>
          ))}
    </div>
  );
};

export default Body;
