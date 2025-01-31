import "../../App.css";
import BannerJoin from "../../components/BannerJoin/BannerJoin";
import Header from "../../components/Header/Header";
import FooterBlock from "../../components/FooterBlock/FooterBlock";

import { useViewport } from "../../useViewport";

function Join() {
  const { isMobile } = useViewport();
  console.log("isMobile", isMobile);
  return (
    <div className="min-h-screen min-w-full flex flex-col">
      <Header />
      <BannerJoin />

      <FooterBlock />
    </div>
  );
}

export default Join;
