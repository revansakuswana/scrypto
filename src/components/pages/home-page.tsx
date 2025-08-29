import React from "react";
import Header from "@/components/pages/header";
import Footer from "@/components/pages/footer";

// Definisikan tipe untuk props yang diterima oleh template
interface HomePageTemplateProps {
  sectionOne: React.ReactNode;
  sectionTwo: React.ReactNode;
  sectionThree: React.ReactNode;
  sectionFour: React.ReactNode;
  sectionFive: React.ReactNode;
  sectionSix: React.ReactNode;
}

const HomePageTemplate: React.FC<HomePageTemplateProps> = ({
  sectionOne,
  sectionTwo,
  sectionThree,
  sectionFour,
  sectionFive,
  sectionSix,
}) => {
  return (
    <div>
      <Header />
      <main>
        {sectionOne}
        {sectionTwo}
        {sectionThree}
        {sectionFour}
        {sectionFive}
        {sectionSix}
      </main>
      <Footer />
    </div>
  );
};

export default HomePageTemplate;
