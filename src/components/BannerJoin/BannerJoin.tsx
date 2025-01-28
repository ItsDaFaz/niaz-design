import bg1 from "../../assets/bg-1.png";

import "./BannerJoin.css";
import { useViewport } from "../../useViewport";
const BannerJoin = () => {
  const { isMobile } = useViewport();
  return (
    <div
      id="banner"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      <div id="joinContainer">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "20px",
          }}
        >
          {/* Mission Statement */}
          <div>Content 1</div>
          <div>Content 2</div>
        </div>
      </div>
    </div>
  );
};

export default BannerJoin;
