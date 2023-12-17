import { Title } from "./Title";
import { Introduce } from "./Introduce";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export const NavB = () => {
  return (
    <Router>
      <div className="HeaderContainer">
        <Link to="#Home" className="HeaderTitle">
          SJN's Portfolio
        </Link>
        <div className="HeaderNavMenus">
          <Link to="#AboutMe" className="HeaderNavMenu">
            About me
          </Link>
          <Link to="#Skills" className="HeaderNavMenu">
            Skills
          </Link>
          <Link to="#Projects" className="HeaderNavMenu">
            Projects
          </Link>
        </div>
      </div>
    </Router>
  );
};
