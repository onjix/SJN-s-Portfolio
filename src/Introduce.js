import React, { useEffect } from "react";

export const Introduce = () => {
  useEffect(() => {
    function setIntroContainerHeight() {
      const introContainer = document.querySelector(".Intro-Container");

      if (introContainer) {
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        introContainer.style.height = `${windowHeight}px`;
      }
    }

    window.addEventListener("resize", setIntroContainerHeight);
    document.addEventListener("DOMContentLoaded", setIntroContainerHeight);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
    return () => {
      window.removeEventListener("resize", setIntroContainerHeight);
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 useEffect 실행

  return (
    <>
      <div className="Intro-Container" id="Home">
        <p className="IntroName">- 손지노 -</p>
        <p className="IntroName">포트폴리오</p>
        <br />
        <hr />
        <br />
        <br />
        <p className="IntroDe">
          안녕하세요. 풀스택 개발자를 목표로 하는 주니어 개발자입니다.
        </p>
        <p className="IntroDe">
          현재 갖고 있는 문제를 분석하고 창의적인 해결책을 도출하고 제시하는
          작업을 좋아합니다.
        </p>
        <br />
        <br />
        <br />
        <br />
        <div className="IntroBtn">
          <a href="#AboutMe">Learn More</a>
        </div>
      </div>
    </>
  );
};
