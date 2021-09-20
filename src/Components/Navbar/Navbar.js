import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/">
        <div className="navbar-title">CRYPTOCHART</div>
      </NavLink>
      <nav className="navbar-navigation">
        <NavLink
          exact
          to="/"
          className="nav-link"
          activeClassName="active-nav-link"
        >
          HOME
        </NavLink>
        <NavLink
          to="/news"
          className="nav-link"
          activeClassName="active-nav-link"
        >
          NEWS
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
