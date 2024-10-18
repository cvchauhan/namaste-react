import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://spa-company.com/wp-content/uploads/2020/03/dummy-logo-08.png"
          alt="Company Logo"
          className="logo-img"
        />
      </div>
      <nav className="nav-bar">
        <ul className="menu">
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
