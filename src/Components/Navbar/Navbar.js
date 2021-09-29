import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { dark } = props;

  const moonHTML = (
    <div onClick={props.flipTheme} className="theme-toggle">
      <div className="moon">
        <div className="inner-moon"></div>
      </div>
    </div>
  );

  const sunHTML = (
    <div onClick={props.flipTheme} className="theme-toggle">
      <div className="sun">
        <div className="sunglasses"></div>
        <div className="sun-smile"></div>
      </div>
    </div>
  );

  const moonOrSun = () => {
    return dark ? sunHTML : moonHTML;
  };

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
        {moonOrSun()}
      </nav>
    </div>
  );
};

export default Navbar;
