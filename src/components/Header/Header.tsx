import { Link } from "react-router-dom";
import baylaLogo from "../../assets/baylaLogo.png";
import headerMenu from "../../assets/header-menu.png";
import { useViewport } from "../../useViewport";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const { isMobile } = useViewport();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgb(255, 255, 255)",
        height: isMobile && menuOpen ? "40vh" : isMobile ? "10vh" : "12vh",
        display: "grid", // Use CSS Grid for layout
        gridTemplateColumns: "1fr auto 1fr", // Create three columns
        alignItems: "center", // Vertically align content
        padding: "0 7.5vw", // Padding for responsiveness
        boxSizing: "border-box",
        zIndex: 1000,
        transition: "height 0.3s ease", // Smooth transition for height change
      }}
    >
      {/* Empty div to push logo to center */}
      <div></div>

      {/* Centered Logo */}
      <Link to="/">
        <img
          src={baylaLogo}
          style={{
            height: isMobile ? "3rem" : "3.5rem",
            objectFit: "contain",
            marginTop: isMobile ? "0.5rem" : 0,
          }}
          alt="Logo"
        />
      </Link>

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
          <>
            <img
              src={headerMenu}
              style={{
                height: "10px",
                objectFit: "contain",
                cursor: "pointer",
                justifySelf: "end", // Aligns to the right edge
                marginRight: "1rem", // Ensure the menu button is inline with the rest of the items
                position: "absolute", // Force the image to stay on the right
                right: "7.5vw", // Align with the padding of the header
              }}
              alt="Menu"
              onClick={toggleMenu}
            />
            {menuOpen && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  marginTop: "3.0rem",
                  gap: "1.5rem", // Add vertical gaps between links
                }}
              >
                <Link to="/board-members">
                  <span id="header-right-items">Board Members</span>
                </Link>
                <span id="header-right-items">Blogs</span>
                <span id="header-right-items">Contact Us</span>
                <Link to="/join">
                  <span id="header-right-items">
                    <button>Join BAYLA</button>
                  </span>
                </Link>
              </div>
            )}
          </>
        ) : (
          <div>
            <Link to="/board-members">
              <span id="header-right-items">Board Members</span>
            </Link>
            <span id="header-right-items">Blogs</span>
            <span id="header-right-items">Contact Us</span>
            <Link to="/join">
              <span id="header-right-items">
                <button>Join BAYLA</button>
              </span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
