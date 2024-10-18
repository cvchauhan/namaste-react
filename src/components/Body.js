import { useEffect, useState } from "react";
// import resturandData from "../constant/constant";
import Card from "./Card";
import { Link } from "react-router-dom";

const Body = () => {
  const [resturandData, setResturandData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621"
    );
    const json = await data.json();
    setResturandData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return (
    <div className="body-content">
      {resturandData.map((resturant) => {
        return (
          <Link to={"/resturant/" + resturant.info.id} key={resturant.info.id}>
            <Card resturant={resturant} />
          </Link>
        );
      })}
    </div>
  );
};
export default Body;
