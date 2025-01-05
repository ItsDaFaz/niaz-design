import baylaLogo2 from "../../assets/baylaLogo2.png";
import "./FooterBlock.css";
function FooterBlock() {
  return (
    <div
      style={{
        background: "#F3F1F1",
        color: "#515151",
        padding: "2.5rem 0 1.5rem 0",
        margin: "0",
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      <div style={{ display: "flex", padding: "2.5rem 0" }}>
        <div
          style={{
            flex: 1,
            paddingLeft: "10vw",
            paddingRight: "5vw",
            textAlign: "left",
          }}
        >
          <img src={baylaLogo2} alt="Logo" style={{ height: "3.5rem" }} />
          <h3
            style={{
              color: "#515151",
              fontWeight: 500,
              fontSize: "24px",
              textAlign: "left",
              marginTop: "1rem",
              letterSpacing: "-0.02rem",
            }}
          >
            Subscribe to get latest
            <br /> industry updates
          </h3>
          <div
            style={{
              position: "relative",
              marginTop: "1rem",
              padding: "0.5rem 0",
            }}
          >
            <input
              type="text"
              placeholder="Email"
              id="email"
              style={{
                width: "100%",
                height: "3rem",
                minHeight: "5rem" /* new */,
                borderRadius: "16px",
                border: "none",
                padding: "1rem 1rem",
                boxSizing: "border-box",
                backgroundColor: "white",
                color: "black",
              }}
            />
            <button
              style={{
                position: "absolute",
                right: "0.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#1E1E1E",
                color: "white",
                border: "none",
                borderRadius: "16px",
                padding: "1rem 2rem 1rem 2rem",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        </div>
        
    <div style={{ flex: 1, paddingRight: "10vw" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {Array.from({ length: 12 }).map((_, index) => (
                <div
                    key={index}
                    style={{
                        flex: "1 1 50%",
                        padding: "0.5rem 0",
                    }}
                >
                    <a href="#" style={{ color: "#515151", textDecoration: "none" }}>
                        Link {index + 1}
                    </a>
                </div>
            ))}
        </div>
    </div>
      </div>
      <hr style={{ width: "100%", margin: "1rem 0" }} />
      
    <div style={{ display: "flex", justifyContent: "space-between", padding: "0 10vw" }}>
      <div>
        <span style={{ marginRight: "1rem" }}>
        <a href="#" style={{ color: "#515151", textDecoration: "none" }}>
          Privacy Policy
        </a>
        </span>
        <span style={{ marginRight: "1rem" }}>
        <a href="#" style={{ color: "#515151", textDecoration: "none" }}>
          Contact Information
        </a>
        </span>
        <span>
        <a href="#" style={{ color: "#515151", textDecoration: "none" }}>
          Address
        </a>
        </span>
      </div>
      <div>
        <span style={{ marginRight: "1rem" }}>
        <a href="#" style={{ color: "#515151", textDecoration: "none" }}>
          <i className="fab fa-facebook-f"></i>
        </a>
        </span>
        <span style={{ marginRight: "1rem" }}>
        <a href="#" style={{ color: "#515151", textDecoration: "none" }}>
          <i className="fab fa-twitter"></i>
        </a>
        </span>
        <span>
        <a href="#" style={{ color: "#515151", textDecoration: "none" }}>
          <i className="fab fa-instagram"></i>
        </a>
        </span>
      </div>
    </div>
    </div>
  );
}

export default FooterBlock;
