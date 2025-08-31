import HomePageTemplate from "@/components/pages/home-page";
import SectionOne from "@/components/pages/section-one";
import SectionTwo from "@/components/pages/section-two";
import SectionThree from "@/components/pages/section-three";
import SectionFour from "@/components/pages/section-four";
import SectionFive from "@/components/pages/section-five";
import SectionSix from "@/components/pages/section-six";
import SectionSeven from "@/components/pages/section-seven";
import SectionEight from "@/components/pages/section-eight";
import "./App.css";

function App() {
  return (
    <>
      <HomePageTemplate
        sectionOne={<SectionOne />}
        sectionTwo={<SectionTwo />}
        sectionThree={<SectionThree />}
        sectionFour={<SectionFour />}
        sectionFive={<SectionFive />}
        sectionSix={<SectionSix />}
        sectionSeven={<SectionSeven />}
        sectionEight={<SectionEight />}
      />
    </>
  );
}

export default App;
