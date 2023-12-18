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
            <div className="SkillsImg">
              <img src={Frontend} alt="Frontend" />
            </div>
          </div>
          <div className="SkillsContent">
            <div className="SkillsName">Backend</div>
            <div className="SkillsImg">
              <img src={Backend} alt="Backend" />
            </div>
          </div>
          <div className="SkillsContent">
            <div className="SkillsName">Version Control</div>
            <div className="SkillsImg">
              <img src={VC} alt="Version Control" />
            </div>
          </div>
          <div className="SkillsContent">
            <div className="SkillsName">Communication</div>
            <div className="SkillsImg">
              <img src={Communication} alt="Communication" />
            </div>
          </div>
          <div className="SkillsContent">
            <div className="SkillsName">Deployment</div>
            <div className="SkillsImg">
              <img src={""} alt="Deployment" />
            </div>
          </div>
          <div className="SkillsContent">
            <div className="SkillsName">Certificate</div>
            <div className="SkillsImg">
              <img src={""} alt="Certificate" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
