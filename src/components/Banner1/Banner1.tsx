import bg1 from "../../assets/bg-1.png";
import banner1button from "../../assets/banner1-button-icon.png";
import "./Banner1.css";
import { Link } from "react-router-dom";
import { useViewport } from "../../useViewport";
const Banner1 = () => {
  const { isMobile } = useViewport();
  return (
    <div
      id="banner"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      <h1 id={isMobile ? "banner-h1-mobileview" : "banner-h1"}>
        BAYLA is Dedicated to Positioning Bangladesh as The World’s Most
        Sustainable Apparel Sourcing Destination by 2030.
      </h1>

      <p id={isMobile ? "banner-p-mobileview" : "banner-p"}>
        Committed to advancing capacity building, industry innovation, and
        sustainable growth through targeted research and comprehensive training
        programs.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "5vh",
          paddingBottom: "20vh",
        }}
      >
        <Link to="/join">
          <button
            style={{
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              margin: "1.25rem",
            }}
          >
            <span
              style={{
                color: "black",
                marginRight: "0.625rem",
              }}
            >
              Connect
            </span>
            <img
              src={banner1button}
              alt=""
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner1;
