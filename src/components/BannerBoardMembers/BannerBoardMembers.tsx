import bg1 from "../../assets/bg-1.png";
import "./BannerBoardMembers.css";

import { useViewport } from "../../useViewport";
import BoardMemberFrame from "../BoardMemberFrame";

interface Member {
  name: string;
  designation: string;
}
const BannerBoardMembers = () => {
  const { isMobile } = useViewport();
  const members: Member[] = [
    {
      name: "Abrar H Sayem",
      designation: "President",
    },
    {
      name: "Sakib Ahmed",
      designation: "Senior Vice President",
    },
    {
      name: "Rafee Mahmood",
      designation: "Vice President",
    },
    {
      name: "Md Shariar Ahmed",
      designation: "Secretary",
    },
    {
      name: "Aqib Jafri Sharif",
      designation: "Additional Secretary",
    },
    {
      name: "Hasin Arman Ayon",
      designation: "Treasurer",
    },
  ];
  return (
    <div
      id="banner"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      <div style={{ marginTop: "15.5vh" }}>
        <h1
          style={{
            color: "white",
            fontFamily: "Poppins",
            fontWeight: "normal",
            fontSize: "48px",

            marginBottom: "8vh",
          }}
        >
          <span style={{ fontWeight: 600, backgroundColor: "#FFFFFF00" }}>
            BAYLA
          </span>{" "}
          Board
        </h1>
      </div>
      <div id="joinContainer">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: "10.4vh",
          }}
        >
          {members.map((member, index) => (
            <BoardMemberFrame
              key={index}
              name={member.name}
              designation={member.designation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerBoardMembers;
