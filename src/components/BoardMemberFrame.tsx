interface BoardMemberFrameProps {
  name: string;
  designation: string;
  // image: string;
}

function BoardMemberFrame({ name, designation }: BoardMemberFrameProps) {
  return (
    <div
      style={{
        background: "#EEEEEE",
        // paddingTop: "0px",
        // paddingRight: "1rem",
        // paddingBottom: "1rem",
        // paddingLeft: "1rem",
        borderRadius: "28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60vh",
        width: "22xvh",
      }}
    >
      {/* <img src={image} alt={title} style={{ width: "150px", height: "150px", borderRadius: "10px" }} /> */}
      <div
        style={{ height: "41vh", width: "100%", backgroundColor: "#E4E4E4" }}
      ></div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <h3
          style={{
            color: "#515151",
            fontWeight: 500,
            fontSize: "22px",
            letterSpacing: "-0.02em",
            marginBottom: "0px",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            color: "#929292",
            fontWeight: 400,
            fontSize: "18px",
            letterSpacing: "-0.02em",
            marginTop: "0px",
            paddingBottom: "2vh",
          }}
        >
          {designation}
        </p>
      </div>
    </div>
  );
}

export default BoardMemberFrame;
