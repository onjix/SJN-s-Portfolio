import { Introduce } from "./Introduce";

export const NavB = () => {
  return (
    <>
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
      <Introduce />
    </>
  );
};
