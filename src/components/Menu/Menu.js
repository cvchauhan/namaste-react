import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_IMG_URL } from "../../constant/constant";
import "./Menu.css";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    if (resId) {
      getMenudata();
    }
  }, [resId]);

  const getMenudata = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=${resId}`
      );
      const json = await response.json();
      const cards =
        json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      setMenu(cards);
    } catch (error) {
      console.error("Failed to fetch menu data:", error);
    }
  };

  const renderMenuItem = (item) => (
    <li key={item.card.info.id} className="menu-item">
      <div className="menu-item-details">
        <h2>{item.card.info.name}</h2>
        <p className="menu-item-price">Rs. {item.card.info.price / 100}</p>
      </div>
      {item.card.info.imageId && (
        <img
          className="menu-img"
          src={MENU_IMG_URL + item.card.info.imageId}
          alt={item.card.info.name}
        />
      )}
    </li>
  );

  return (
    <div className="menu-container">
      {menu.map((data, index) => {
        const { card } = data;
        const title = card?.card?.title;
        const itemCards = card?.card?.itemCards || [];
        const itemCategories = card?.card?.categories || [];

        return (
          title && (
            <div key={`${title}-${index}`}>
              <h1>{title}</h1>
              <ul>
                {itemCards.map(renderMenuItem)}
                {itemCategories.flatMap((cat) =>
                  cat.itemCards?.map(renderMenuItem)
                )}
              </ul>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Menu;
