import { Introduce } from "./Introduce";
import React, { useEffect, useState } from "react";

export const NavB = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className={scrolled ? "scrolled" : "HeaderContainer"}>
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
      {/* <Introduce /> */}
    </>
  );
};
