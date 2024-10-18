import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton"; // Install this package
import "react-loading-skeleton/dist/skeleton.css"; // CSS for skeleton
import "./Body.css";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621"
      );
      const json = await response.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurantData(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

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
