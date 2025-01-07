import "./ObjectiveGrid.css"
import { useViewport } from "../../useViewport";
function ObjectiveGrid() {
  const {isMobile} = useViewport();

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
      description:"Initiate and publish annual research focused on sustainability innovations, positioning BAYLA as a thought leader."
    },
    
    
  ]

  return (
    <div
      style={{
        display: isMobile ? "grid" : "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
        gap: isMobile ? "1rem" : "1rem",
        justifyContent: isMobile ? "center" : "center",
        alignItems: isMobile ? "center" : "center",
        paddingLeft: isMobile ? "4vw" : "14vw",
        paddingRight: isMobile ? "4vw" : "14vw",
        paddingTop: isMobile ? "8vh" : "8vh",
        }}
    >
      <div
        id={isMobile?"objective-grid-feature-mobileview":"objective-grid-feature"}
        >
        <h1
        id={isMobile?"objective-grid-feature-h1-mobileview":"objective-grid-feature-h1"}
        >
        5 Key Objectives
        </h1>
      </div>
      {objectives.map((n, index) => (
      <div
        key={index}
        id={isMobile?"objective-grid-feature-mobileview":"objective-grid-feature"}
      >
        <h3
        id={isMobile?"objective-grid-feature-h3-mobileview":"objective-grid-feature-h3"}
        >
        {n.title}
        </h3>

        <p
        id={isMobile?"objective-grid-feature-p-mobileview":"objective-grid-feature-p"}
        >
        {n.description}
        </p>
      </div>
      ))}
    </div>
  );
}

export default ObjectiveGrid;
