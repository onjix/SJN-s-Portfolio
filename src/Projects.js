import DTT from "./assets/DTT.png";
import SoM from "./assets/SoM.png";
import Img from "./assets/Img.png";
import TE from "./assets/TE.png";
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
            <div className="ProjectsBox">
              <div className="ProjectsImg">
                <img src={DTT} alt="DTT" />
              </div>
              <div className="ProjectsDe">
                <div>
                  &nbsp;디지털 트윈 기술을 활용한 식당 예약 시스템입니다. 디지털
                  트윈 기술이 대두됨에 따라 기술 활용을 모색하였고 기존의 식당
                  예약시스템의 문제점을 발견하였습니다. 디지털 트윈 기술을
                  예약시스템에 도입하여 간접적으로 실제 매장의 내부를 3D객체를
                  통해 실시간으로 테이블 사용을 확인하는 목적입니다.
                </div>
                <div>
                  &nbsp;Git을 이용하여 다른 사람들과 협업을 하였고 React의
                  다양한 라이브러리와 함께 SpringBoot의 기본 지식을 쌓을 수
                  있었던 프로젝트입니다.
                </div>
                <br />
                <div>
                  &nbsp;✔️ &nbsp;주요기능: 회원가입, 로그인, 3D객체 출력, 예약,
                  예측, SSE
                </div>
                <div>
                  &nbsp;✔️ &nbsp;Github: https://github.com/onjix/DTT1.0
                </div>
                <div>&nbsp;✔️ &nbsp;Frontend: React, Three.js</div>
                <div>&nbsp;✔️ &nbsp;Backend: SpringBoot, Java</div>
                <div>&nbsp;✔️ &nbsp;App: Android Studio</div>
                <div>&nbsp;✔️ &nbsp;Database: MySQL, H2</div>
              </div>
            </div>
          </div>
          <div className="ProjectsContent">
            <div className="ProjectsName">
              경진대회 프로젝트 설명과 이벤트를 위한 웹페이지
              <div className="ProjectsName2">2022년도 및 1인 프로젝트</div>
            </div>
            <div className="ProjectsBox">
              <div className="ProjectsImg">
                <img src={Img} alt="Img" />
              </div>
              <div className="ProjectsDe">
                <div>
                  <br />
                  &nbsp;공학작품경진대회에서 진행한 프로젝트에 대한 설명과
                  이벤트(설문조사)참여를 위해 만든 웹페이지입니다.
                </div>
                <div>
                  &nbsp;처음으로 React를 사용해 웹페이지를 만들었고 만든
                  홈페이지를 Github를 이용하여 웹페이지를 호스팅하였습니다.
                </div>
                <br />
                <br />
                <br />
                <div>&nbsp;✔️ &nbsp;주요기능: 프로젝트 설명, 설문조사 링크</div>
                <div>
                  &nbsp;✔️ &nbsp;Github: https://github.com/onjix/bluesea.git
                </div>
                <div>&nbsp;✔️ &nbsp;사용기술: React</div>
              </div>
            </div>
          </div>
          <div className="ProjectsContent">
            <div className="ProjectsName">
              시각장애인분들을 위한 소리에 특화된 미로 게임
              <div className="ProjectsName2">2022년도 및 4인 프로젝트</div>
            </div>
            <div className="ProjectsBox">
              <div className="ProjectsImg">
                <img src={SoM} alt="SoM" />
              </div>
              <div className="ProjectsDe">
                <br />
                <div>
                  &nbsp;시각장애인분들을 위한 소리에 특화된 미로 게임입니다.
                  시각장애인분들에게 스트레스 해소 및 재미 등 도움을 주기 위해
                  진행한 프로젝트입니다.
                </div>
                <div>
                  &nbsp;처음으로 Arduino와 AppInventor를 사용하였고, 이 과정에서
                  블루투스 통신, 배열을 통한 미로게임 생성, 블록코딩 등 다양한
                  경험을 쌓을 수 있었던 프로젝트입니다.
                </div>
                <br />
                <br />
                <br />
                <div>&nbsp;✔️ &nbsp;주요기능: 모바일 게임</div>
                <div>
                  &nbsp;✔️ &nbsp;Github: https://github.com/onjix/SoundOfMaze
                </div>
                <div>&nbsp;✔️ &nbsp;사용기술: AppInventor, Arduino</div>
              </div>
            </div>
          </div>
          <div className="ProjectsContent">
            <div className="ProjectsName">
              Trash Eater
              <div className="ProjectsName2">2021년도 및 2인 프로젝트</div>
            </div>
            <div className="ProjectsBox">
              <div className="ProjectsImg">
                <img src={TE} alt="TE" />
              </div>
              <div className="ProjectsDe">
                <br />
                <div>
                  &nbsp;쓰레기 분리수거를 통해 포인트를 얻을 수 있는 게임입니다.
                  유리, 플라스틱, 일반쓰레기, 고철, 종이 총 5개를 휴대폰
                  카메라를 통해 구분하고 각각의 포인트를 얻을 수 있습니다.
                </div>
                <div>
                  &nbsp;복학후 처음하는 프로젝트였고 개발 능력이 낮았던
                  시기였기에 팀장님의 도움을 많이 받았고 프로젝트에 기여할 수
                  있도록 추가 아이디어 의견제시, css 작업, 캐릭터 생성을
                  하였습니다.
                </div>
                <br />
                <br />
                <br />
                <div>&nbsp;✔️ &nbsp;주요기능: 모바일 게임</div>
                <div>
                  &nbsp;✔️ &nbsp;Github: https://github.com/onjix/SoundOfMaze
                </div>
                <div>
                  &nbsp;✔️ &nbsp;사용기술: React, PHP, HTML/CSS, PixelStudio
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
