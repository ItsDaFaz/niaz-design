function ObjectiveGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "18vw",
        paddingRight: "18vw",
        paddingTop: "18vh",
      }}
    >
        <div
         
          style={{
            background: "#0DA9C17D",
            padding: "1rem",
            borderRadius: "15px",
          }}
        >
          <h1
            style={{
              color: "#040404",
              textAlign: "left",
              marginLeft: "1rem",
              marginRight: "1rem",
              paddingTop: "4vh",
              paddingBottom: "5vh",
              fontWeight: 600,
              fontSize:"48px"
            }}
          >
            5 Key Objectives
          </h1>

          
        </div>
      {[1, 2, 3, 4, 5].map((n) => (
        <div
          key={n}
          style={{
            background: "#0DA9C17D",
            padding: "1rem",
            borderRadius: "15px",
          }}
        >
          <h3
            style={{
              color: "#515151",
              textAlign: "left",
              marginLeft: "1rem",
              marginRight: "1rem",
              paddingTop: "1vh",
              paddingBottom: "2.5vh",
              fontWeight: 500,
              fontSize:"24px"
            }}
          >
            Reduction in Carbon Emissions
          </h3>

          <p
            style={{
              color: "#3F3F3F",
              textAlign: "left",
              marginLeft: "1rem",
              marginRight: "1rem",
              fontWeight: 400,
              fontSize: "15px",
              paddingBottom: "2vh",
            }}
          >
            Support the industry in achieving a 30% reduction in carbon
            emissions through energy-efficient practices by 2030.
          </p>
        </div>
      ))}
    </div>
  );
}

export default ObjectiveGrid;
