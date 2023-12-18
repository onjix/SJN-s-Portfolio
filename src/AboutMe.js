import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export const AboutMe = () => {
  return (
    <>
      <div className="Aboutme-Container" id="AboutMe">
        <div className="Aboutme-Title">ABOUT ME</div>
        <div className="Aboutme-Item">
          <div className="Aboutme-Name">
            <div className="AboutmeWrapper">
              <div className="icon">
                <FaUser size={50} />
              </div>
              <div className="titleContainer">
                <div className="title">이름</div>
                <div className="titleInfo">손지노</div>
              </div>
            </div>
          </div>
          <div className="Aboutme-Birthday">
            <div className="AboutmeWrapper">
              <div className="icon">
                <FaCalendarAlt size={50} />
              </div>
              <div className="titleContainer">
                <div className="title">생년월일</div>
                <div className="titleInfo">99.08.13</div>
              </div>
            </div>
          </div>
          <div className="Aboutme-Address">
            <div className="AboutmeWrapper">
              <div className="icon">
                <FaAddressBook size={50} />
              </div>
              <div className="titleContainer">
                <div className="title">주소지</div>
                <div className="titleInfo">서울시 강서구</div>
              </div>
            </div>
          </div>
          <div className="Aboutme-Address">
            <div className="AboutmeWrapper">
              <div className="icon">
                <BsFillTelephoneFill size={50} />
              </div>
              <div className="titleContainer">
                <div className="title">연락처</div>
                <div className="titleInfo">010-4300-1618</div>
              </div>
            </div>
          </div>
          <div className="Aboutme-Address">
            <div className="AboutmeWrapper">
              <div className="icon">
                <IoMail size={50} />
              </div>
              <div className="titleContainer">
                <div className="title">이메일</div>
                <div className="titleInfo">sojino0813@naver.com`</div>
              </div>
            </div>
          </div>
          <div className="Aboutme-GitHub">
            <div className="AboutmeWrapper">
              <div className="icon">
                <FaGithub size={50} />
              </div>
              <div className="titleContainer">
                <div className="title">Github</div>
                <div className="titleInfo">https://github.com/onjix</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
