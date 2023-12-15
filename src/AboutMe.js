import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const AboutMe = () => {
  const infos = [
    {
      f1: "iconImg1",
      f2: "이름",
      f3: "손지노",
    },
    {
      f1: "iconImg2",
      f2: "생년월일",
      f3: "99.08.13",
    },
    {
      f1: "iconImg3",
      f2: "주소지",
      f3: "서울시 강서구",
    },
    {
      f1: "iconImg4",
      f2: "Github",
      f3: "https://github.com/onjix",
    },
  ];
  return (
    <>
      <div className="Aboutme-Container">
        <div className="Aboutme-Name">
          <FaUser />
          <div>이름</div>
          <div>손지노</div>
        </div>
        <div className="Aboutme-Birthday">
          <FaCalendarAlt />
          <div>생년원일</div>
          <div>99.08.13</div>
        </div>
        <div className="Aboutme-Address">
          <FaAddressBook />
          <div>주소지</div>
          <div>서울시 강서구</div>
        </div>
        <div className="Aboutme-GitHub">
          <IoMail />
          <div>Github</div>
          <div>https://github.com/onjix</div>
        </div>
      </div>
    </>
  );
};
