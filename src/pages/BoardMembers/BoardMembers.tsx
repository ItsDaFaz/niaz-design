import "../../App.css";
import Header from "../../components/Header/Header";
import FooterBlock from "../../components/FooterBlock/FooterBlock";

import { useViewport } from "../../useViewport";
import BannerBoardMembers from "../../components/BannerBoardMembers/BannerBoardMembers";
function BoardMembers() {
  const { isMobile } = useViewport();
  console.log("isMobile", isMobile);
  return (
    <div className="min-h-screen min-w-full flex flex-col">
      <Header />

      <BannerBoardMembers />

      <FooterBlock />
    </div>
  );
}

export default BoardMembers;
