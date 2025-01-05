import "./App.css";
import Banner1 from "./components/Banner1/Banner1";
import Header from "./components/Header/Header";
import ObjectiveGrid from "./components/ObjectiveGrid/ObjectiveGrid";
import FeatureCarousel from "./components/FeatureCarousel/FeatureCarousel";
import FooterBlock from "./components/FooterBlock/FooterBlock";

function App() {
  return (
    <div className="min-h-screen min-w-full flex flex-col">
      <Header />
      {/* <h1 className="font-poppins text-xl font-bold">Hello, Tailwind!</h1> */}
      <Banner1 />
      <ObjectiveGrid />

      <FeatureCarousel />

      {/* temporary empty div for spacing */}
      <div style={{ height: "20vh" }}></div>

      <FooterBlock />

    </div>
  );
}

export default App;
