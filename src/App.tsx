import HomePageTemplate from "@/components/pages/home-page";
import SectionOne from "@/components/pages/section-one";
import SectionTwo from "@/components/pages/section-two";
import SectionThree from "@/components/pages/section-three";
import SectionFour from "@/components/pages/section-four";
import SectionFive from "@/components/pages/section-five";
import SectionSix from "@/components/pages/section-six";
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
      />
    </>
  );
}

export default App;
