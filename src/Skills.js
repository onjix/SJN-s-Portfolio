import { ProgressBar } from "./ProgressBar";
export const Skills = () => {
  return (
    <>
      <div className="Skills-Container" id="Skills">
        <div className="Skills-Title">Skills</div>
        <div className="SkillsContents">
          <div className="SkillsContent">
            <div className="SkillsName">frontend</div>
            <div className="SkillsInfos">
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•HTML/CSS/JS</div>
                <ProgressBar bgcolor="#00695c" completed={60} />
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•React</div>
                <ProgressBar bgcolor="#00695c" completed={60} />
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•PHP</div>
                <ProgressBar bgcolor="#00695c" completed={30} />
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•Three.js</div>
                <ProgressBar bgcolor="#00695c" completed={50} />
              </div>
            </div>
          </div>
          <div className="SkillsContent">
            <div className="SkillsName">Backend</div>
            <div className="SkillsInfos">
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•Java</div>
                <ProgressBar bgcolor="#6a1b9a" completed={60} />
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•SpringBoot</div>
                <ProgressBar bgcolor="#6a1b9a" completed={20} />
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•MySQL</div>
                <ProgressBar bgcolor="#6a1b9a" completed={60} />
              </div>
            </div>
          </div>
          <div className="SkillsContent">
            <div className="SkillsName">Tool</div>
            <div className="SkillsInfos">
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•Github</div>
                <ProgressBar bgcolor="#ef6c00" completed={50} />
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•Notion</div>
                <ProgressBar bgcolor="#ef6c00" completed={60} />
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•Figma</div>
                <ProgressBar bgcolor="#ef6c00" completed={40} />
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•VSCode</div>
                <ProgressBar bgcolor="#ef6c00" completed={60} />
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•IntelliJ</div>
                <ProgressBar bgcolor="#ef6c00" completed={30} />
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•Postman</div>
                <ProgressBar bgcolor="#ef6c00" completed={20} />
              </div>
            </div>
          </div>
          <div className="SkillsContent">
            <div className="SkillsName">Certificate</div>
            <div className="SkillsInfos">
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•정보처리기사</div>
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•SQLD</div>
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•AI-900</div>
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•Toeic 805</div>
              </div>
              <div className="SkillsInfo">
                <div className="SkillsInfoText">•운전면허 1종 보통</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
