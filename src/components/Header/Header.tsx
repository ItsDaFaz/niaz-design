import baylaLogo from "../../assets/baylaLogo.png";
import headerMenu from "../../assets/header-menu.png";
import { useViewport } from "../../useViewport";
import "./Header.css";
const Header = () => {
  const { isMobile } = useViewport();
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgb(255, 255, 255)",
        height: isMobile ? "8vh" : "12vh",
        display: "grid", // Use CSS Grid for layout
        gridTemplateColumns: "1fr auto 1fr", // Create three columns
        alignItems: "center", // Vertically align content
        padding: "0 7.5vw", // Padding for responsiveness
        boxSizing: "border-box",
      }}
    >
      {/* Empty div to push logo to center */}
      <div></div>

      {/* Centered Logo */}
      <img
        src={baylaLogo}
        style={{ height: "3.5rem", objectFit: "contain" }}
        alt="Logo"
      />

      {/* Menu Button on the far right */}
      <div
        style={{
          display: "flex",
          padding: 0,
          margin: 0,
          justifyContent: "flex-end",
          alignContent: "right",
        }}
      >
        {isMobile ? (
          <img
            src={headerMenu}
            style={{
              height: "15%",
              objectFit: "contain",
              cursor: "pointer",
              justifySelf: "end", // Aligns to the right edge
            }}
            alt="Menu"
          />
        ) : (
          <div>
            <span id="header-right-items">Board Members</span>
            <span id="header-right-items">Blogs</span>
            <span id="header-right-items">Contact Us</span>
            <span id="header-right-items">
              <button>Join BAYLA</button>
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
