import DTT from "./asset/DTT.png";
import SoM from "./asset/SoM.png";
import Img from "./asset/Img.png";
import TE from "./asset/TE.png";
export const Projects = () => {
  return (
    <>
      <div className="Projects-Container" id="Projects">
        <div className="Projects-Title">Projects</div>
        <div className="ProjectsContents">
          <div className="ProjectsContent">
            <div className="ProjectsName">
              디지털 트윈 기술을 활용한 식당 예약 시스템
              <div className="ProjectsName2">2023년도 및 3인 프로젝트</div>
            </div>
            <div className="ProjectsImg">
              <img src={DTT} alt="DTT" />
            </div>
          </div>
          <div className="ProjectsContent">
            <div className="ProjectsName">
              경진대회 프로젝트 설명과 이벤트를 위한 웹페이지
              <div className="ProjectsName2">2022년도 및 1인 프로젝트</div>
            </div>
            <div className="ProjectsImg">
              <img src={Img} alt="Img" />
            </div>
          </div>
          <div className="ProjectsContent">
            <div className="ProjectsName">
              시각장애인분들을 위한 소리에 특화된 미로 게임
              <div className="ProjectsName2">2022년도 및 4인 프로젝트</div>
            </div>
            <div className="ProjectsImg">
              <img src={SoM} alt="SoM" />
            </div>
          </div>
          <div className="ProjectsContent">
            <div className="ProjectsName">
              Trash Eater
              <div className="ProjectsName2">2021년도 및 2인 프로젝트</div>
            </div>
            <div className="ProjectsImg">
              <img src={TE} alt="TE" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
