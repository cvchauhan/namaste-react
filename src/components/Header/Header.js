import { NavLink } from "react-router-dom";
import "./Header.css";
import image from "../../constant/image";
// import useShowOnline from "../../hooks/useShowOnline";

const Header = () => {
  // const status = useShowOnline();
  return (
    <header className="header">
      <div className="logo">
        <img src={image.logo} alt="Company Logo" className="logo-img" />
      </div>
      <nav className="nav-bar">
        <ul className="menu">
          {/* <li className="link">{status ? "🟢" : "🔴"}</li> */}
          {["Home", "About", "Contact Us", "Cart"].map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to={`/${item.toLowerCase().replace(" ", "-")}`}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
