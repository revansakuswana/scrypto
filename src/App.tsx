import MainPageTemplate from "@/components/pages/main-page";
import SectionHome from "@/components/pages/section-home";
import SectionAbout from "@/components/pages/section-about";
import SectionTokenomics from "@/components/pages/section-tokenomics";
import SectionVision from "@/components/pages/section-vision";
import SectionChart from "@/components/pages/section-chart";
import SectionDexs from "@/components/pages/section-dexs";
import SectionNft from "@/components/pages/section-nft";
import SectionStaking from "@/components/pages/section-staking";
import SectionGallery from "@/components/pages/section-Gallery";
import "./App.css";

function App() {
  return (
    <>
      <MainPageTemplate
        sectionHome={<SectionHome />}
        sectionAbout={<SectionAbout />}
        sectionTokenomics={<SectionTokenomics />}
        sectionVision={<SectionVision />}
        sectionChart={<SectionChart />}
        sectionDexs={<SectionDexs />}
        sectionStaking={<SectionStaking />}
        sectionNft={<SectionNft />}
        sectionGallery={<SectionGallery />}
      />
    </>
  );
}

export default App;
