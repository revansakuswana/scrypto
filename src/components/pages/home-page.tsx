import React from "react";
import Header from "@/components/pages/header";
import Footer from "@/components/pages/footer";
import { Toaster } from "@/components/ui/sonner";

// Definisikan tipe untuk props yang diterima oleh template
interface HomePageTemplateProps {
  sectionOne: React.ReactNode;
  sectionTwo: React.ReactNode;
  sectionThree: React.ReactNode;
  sectionFour: React.ReactNode;
  sectionFive: React.ReactNode;
  sectionSix: React.ReactNode;
  sectionSeven: React.ReactNode;
  sectionEight: React.ReactNode;
  sectionNine: React.ReactNode;
}

const HomePageTemplate: React.FC<HomePageTemplateProps> = ({
  sectionOne,
  sectionTwo,
  sectionThree,
  sectionFour,
  sectionFive,
  sectionSix,
  sectionSeven,
  sectionEight,
  sectionNine,
}) => {
  return (
    <div>
      <Header />
      <main>
        {sectionOne}
        {sectionTwo}
        {sectionThree}
        {sectionFour}
        {sectionNine}
        {sectionFive}
        {sectionSix}
        {sectionSeven}
        {sectionEight}
      </main>
      <Footer />
      <Toaster richColors />
    </div>
  );
};

export default HomePageTemplate;
