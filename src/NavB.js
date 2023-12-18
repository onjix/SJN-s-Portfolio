import { Introduce } from "./Introduce";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export const NavB = () => {
  return (
    <Router>
      <div className="HeaderContainer">
        <a href="#Home" className="HeaderTitle">
          SJN's Portfolio
        </a>
        <div className="HeaderNavMenus">
          <a href="#AboutMe" className="HeaderNavMenu">
            About me
          </a>
          <a href="#Skills" className="HeaderNavMenu">
            Skills
          </a>
          <a href="#Projects" className="HeaderNavMenu">
            Projects
          </a>
        </div>
      </div>
    </Router>
  );
};
//'이미지: flaticon.com'.
