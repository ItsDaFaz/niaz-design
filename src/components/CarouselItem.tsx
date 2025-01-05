interface CarouselItemProps {
    title: string;
    description: string;
    image: string;
}

function CarouselItem({ title, description, image }: CarouselItemProps) {
  return (
    <div
        style={{
        background: "#EEEEEE",
        padding: "1rem",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "38vh",
        width: "38vh",
        }}
      >
        <img src={image} alt={title} style={{ width: "150px", height: "150px", borderRadius: "10px" }} />
        <div style={{ width: "100%", textAlign: "left" }}>
          <h3
          style={{
            color: "#515151",
            fontWeight: 500,
            fontSize:"24px"
          }}
          >{title}</h3>
          <p
            style={{
                color: "#929292",
                fontWeight: 400,
                fontSize: "15px",
                marginTop: "-1vh",
                paddingBottom: "2vh",
            }}
          >{description}</p>
        </div>
    </div>
  )
}

export default CarouselItem