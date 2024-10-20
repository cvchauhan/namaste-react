import { useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL, MENU_IMG_URL } from "../../constant/constant";
import "./Menu.css";
import useMenuData from "../../hooks/useMenuData";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Cart/cartSlice";

const Menu = () => {
  const [visibleSections, setVisibleSections] = useState({}); // Track visible sections
  const { resId } = useParams();
  const { menu, loading } = useMenuData(
    `${MENU_API_URL}&restaurantId=${resId}`,
    setVisibleSections
  );
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    console.log(item);
    item.quantity = 1;
    const { id, name, defaultPrice, price, quantity } = item;
    let finalPrice = price ? price / 100 : defaultPrice / 100;
    dispatch(addtoCart({ id, name, price: finalPrice, quantity })); // Replace this with your add-to-cart logic
  };

  const toggleSection = (title) => {
    setVisibleSections((prev) => ({
      ...prev,
      [title]: !prev[title], // Toggle visibility
    }));
  };

  const renderMenuItem = (item) => (
    <li key={item.card.info.id} className="menu-item">
      <div className="menu-item-details">
        <h2>{item.card.info.name}</h2>
        <p className="menu-item-price">
          Rs.{" "}
          {item.card.info.price
            ? item.card.info.price / 100
            : item.card.info.defaultPrice / 100}
        </p>
      </div>
      {item.card.info.imageId && (
        <div className="menu-img-container">
          <img
            className="menu-img"
            src={MENU_IMG_URL + item.card.info.imageId}
            alt={item.card.info.name}
          />
          <button
            className="add-to-cart"
            onClick={() => handleAddToCart(item.card.info)}
          >
            Add
          </button>
        </div>
      )}
    </li>
  );

  const renderSkeletonLoader = () => (
    <ul>
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index} className="menu-item skeleton">
          <div className="menu-item-details">
            <h2 className="skeleton-title"></h2>
            <p className="skeleton-price"></p>
          </div>
          <div className="skeleton-img"></div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="menu-container">
      {loading
        ? renderSkeletonLoader()
        : menu.map((data, index) => {
            const { card } = data;
            const title = card?.card?.title;
            const itemCards = card?.card?.itemCards || [];
            const itemCategories = card?.card?.categories || [];

            return (
              title && (
                <div key={`${title}-${index}`}>
                  <h1
                    onClick={() => toggleSection(title)}
                    className="menu-title"
                  >
                    {title}{" "}
                    <span className="toggle-icon">
                      {visibleSections[title] ? "⬆️" : "⬇️"}
                    </span>
                  </h1>

                  {visibleSections[title] && (
                    <ul>
                      {itemCards.map(renderMenuItem)}
                      {itemCategories.flatMap((cat) =>
                        cat.itemCards?.map(renderMenuItem)
                      )}
                    </ul>
                  )}
                </div>
              )
            );
          })}
    </div>
  );
};

export default Menu;
