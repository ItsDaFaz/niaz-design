function ObjectiveGrid() {

  interface Objective{
    title:string,
    description:string
  }
  const objectives:Objective[]=[
    {
      title:"Sustainability Compliance",
      description:"Aim for 80% of member factories to adopt recognized sustainability certifications and practices by 2030."
    },
    {
      title:"Reduction in Carbon Emissions",
      description:"Support the industry in achieving a 30% reduction in carbon emissions through energy-efficient practices by 2030."
    },
    
    {
      title:"Innovation in Sustainable Materials",
      description:"Increase the use of sustainable materials (recycled/organic) by 50% across member factories."
    },
    
    {
      title:"Capacity Building and Training",
      description:"Establish training programs for at least 5,000 young professionals in sustainable practices, leadership, and innovation by 2030."
    },
    
    {
      title:"Industry Research and Development",
      description:"nitiate and publish annual research focused on sustainability innovations, positioning BAYLA as a thought leader."
    },
    
    
  ]

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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        }}
      >
        <h1
        style={{
          color: "#040404",
          textAlign: "left",
          marginLeft: "1rem",
          marginRight: "1rem",
          paddingTop: "2vh",
          paddingBottom: "2vh",
          fontWeight: 600,
          fontSize:"48px"
        }}
        >
        5 Key Objectives
        </h1>
      </div>
      {objectives.map((n, index) => (
      <div
        key={index}
        style={{
        background: "#0DA9C17D",
        padding: "1rem",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        }}
      >
        <h3
        style={{
          color: "#515151",
          textAlign: "left",
          marginLeft: "1rem",
          marginRight: "1rem",
          paddingTop: "1vh",
          paddingBottom: "1vh",
          fontWeight: 500,
          fontSize:"24px"
        }}
        >
        {n.title}
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
        {n.description}
        </p>
      </div>
      ))}
    </div>
  );
}

export default ObjectiveGrid;
