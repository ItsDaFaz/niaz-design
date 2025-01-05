import CarouselItem from "../CarouselItem"

const CarouselItems = [{
    title: "Title 1",
    description: "Description 1",
    image: "https://via.placeholder.com/150"
}, {
    title: "Title 2",
    description: "Description 2",
    image: "https://via.placeholder.com/150"
}, {
    title: "Title 3",
    description: "Description 3",
    image: "https://via.placeholder.com/150"
}

]
function FeatureCarousel() {
  return (
    <div
        style={{
            paddingTop: "14vh",
            paddingLeft: "1.8vw",
            paddingRight: "1.8vw",
        }}
    >
        
        <h1
        style={{
          color: "#040404",
          textAlign: "center",
          marginLeft: "1rem",
          marginRight: "1rem",
          paddingTop: "2vh",
          paddingBottom: "2vh",
          fontWeight: 600,
          fontSize:"48px"
        }}
        >
        Featured
        </h1>

        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "1rem",
            }}
        >
            {CarouselItems.map((n, index) => (
                <CarouselItem key={index} title={n.title} description={n.description} image={n.image} />
            ))}
        </div>

    </div>
  )
}

export default FeatureCarousel