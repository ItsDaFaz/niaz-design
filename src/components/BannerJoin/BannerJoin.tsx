import bg1 from "../../assets/bg-1.png";
import baylaGrey from "../../assets/baylaGrey.png";

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
          <div>
            <div id="mission-statement-container">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8vh",
                }}
              >
                <h1
                  style={{
                    fontWeight: "normal",
                    fontSize: "33px",
                  }}
                >
                  Join <span style={{ fontWeight: "bold" }}>BAYLA</span>
                </h1>
                <img
                  src={baylaGrey}
                  style={{ height: "70px" }}
                  alt="baylaGrey"
                />
              </div>
              <div>
                <p id="mission-p">
                  Bangladesh Apparel Youth Leaders Alliance (BAYLA) stands at
                  the forefront of the next wave of leadership within
                  Bangladesh's apparel industry. As a collective of emerging
                  leaders in the second generation/successors of the Bangladesh
                  Apparel sector, we are dedicated to uniting and empowering
                  youth voices.
                </p>
                <h5 id="mission-h5">Mission Statement:</h5>
                <p id="mission-p">
                  BAYLA (Bangladesh Apparel Youth Leaders Alliance) is dedicated
                  to positioning Bangladesh as the world’s most sustainable
                  apparel sourcing destination by 2030. We are committed to
                  advancing capacity building, industry innovation, and
                  sustainable growth through targeted research and comprehensive
                  training programs. Our goal is to drive excellence in
                  sustainable practices, ensuring the Bangladesh apparel
                  industry not only meets but leads in global sustainability
                  standards."
                </p>
                <h5 id="mission-h5">Core Positioning:</h5>
                <p id="mission-p">
                  As the next generation of industry leaders, BAYLA is focused
                  on creating a future-ready apparel sector by fostering a
                  culture of innovation, transparency, and responsibility.
                  Through strategic partnerships and a focus on sustainability
                  KPIs, BAYLA is committed to empowering Bangladesh’s apparel
                  industry to achieve top standards in Eco-friendly production,
                  resource efficiency, and social responsibility.
                </p>
                <p id="mission-p">
                  Join us in shaping the future of Bangladesh's apparel industry
                  and take the legacy forward.
                </p>
                <p id="mission-p">
                  Together we next-gen leaders will be writing the next chapter
                  of Bangladesh Apparel Industry 2030.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ marginTop: "1.5vh" }}>
            <form id="joinForm">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "6.7vh",
                }}
              >
                <div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    className="input-field"
                  />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                >
                  <div>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      placeholder="Designation"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      placeholder="Organization"
                      className="input-field"
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                >
                  <div>
                    <input
                      type="email"
                      // id="email"
                      name="email"
                      placeholder="E-mail"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      placeholder="Contact"
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    className="input-field"
                  />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                >
                  <div>
                    <input
                      // type="date"
                      // id="dob"
                      name="dob"
                      placeholder="Date of Birth"
                      className="input-field"
                    />
                  </div>
                  {!isMobile && (
                    <>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </>
                  )}
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button type="submit" id="submit-button">
                      Submit Application
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerJoin;
