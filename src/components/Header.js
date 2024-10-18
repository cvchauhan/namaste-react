import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://spa-company.com/wp-content/uploads/2020/03/dummy-logo-08.png" />
      </div>
      <div className="nav-bar">
        <ul className="menu">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/contact-us"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/cart"
            >
              Cart
            </NavLink>{" "}
            <small></small>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
