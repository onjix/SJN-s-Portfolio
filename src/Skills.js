import Frontend from "./asset/Frontend.png";
import Backend from "./asset/Backend.png";
import VC from "./asset/Github.png";
import Communication from "./asset/Figma.png";
export const Skills = () => {
  return (
    <>
      <div className="Skills-Container" id="Skills">
        <div className="Skills-Title">Skills</div>
        <div className="SkillsContents">
          <div className="SkillsContent">
            <div className="SkillsName">frontend</div>
            <div className="SkillsInfo">
              <ul>
                <li>HTML/CSS/JS</li>
                <li>React</li>
                <li>PHP</li>
                <li>Three.js</li>
              </ul>
            </div>
          </div>
          <div className="SkillsContent">
            <div className="SkillsName">Backend</div>
            <div className="SkillsInfo">
              <ul>
                <li>Java</li>
                <li>SpringBoot</li>
                <li>MySQL</li>
                <li>H2</li>
              </ul>
            </div>
          </div>
          <div className="SkillsContent">
            <div className="SkillsName">Tool</div>
            <div className="SkillsInfo">
              <ul>
                <li>Github</li>
                <li>Notion</li>
                <li>Figma</li>
                <li>VSCode</li>
                <li>IntelliJ</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
          <div className="SkillsContent">
            <div className="SkillsName">Certificate</div>
            <div className="SkillsInfo">
              <ul>
                <li>정보처리기사</li>
                <li>SQLD</li>
                <li>AI-900</li>
                <li>Toeic 805</li>
                <li>운전면허 1종 보통</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
