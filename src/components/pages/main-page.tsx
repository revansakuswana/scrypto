import React from "react";
import Header from "@/components/pages/header";
import Footer from "@/components/pages/footer";
import { Toaster } from "@/components/ui/sonner";

// Definisikan tipe untuk props yang diterima oleh template
interface MainPageTemplateProps {
  sectionHome: React.ReactNode;
  sectionAbout: React.ReactNode;
  sectionTokenomics: React.ReactNode;
  sectionVision: React.ReactNode;
  sectionChart: React.ReactNode;
  sectionDexs: React.ReactNode;
  sectionStaking: React.ReactNode;
  sectionNft: React.ReactNode;
  sectionGallery: React.ReactNode;
}

const HomePageTemplate: React.FC<MainPageTemplateProps> = ({
  sectionHome,
  sectionAbout,
  sectionTokenomics,
  sectionVision,
  sectionChart,
  sectionDexs,
  sectionStaking,
  sectionNft,
  sectionGallery,
}) => {
  return (
    <div>
      <Header />
      <main>
        {sectionHome}
        {sectionAbout}
        {sectionTokenomics}
        {sectionVision}
        {sectionChart}
        {sectionDexs}
        {sectionStaking}
        {sectionNft}
        {sectionGallery}
      </main>
      <Footer />
      <Toaster richColors />
    </div>
  );
};

export default HomePageTemplate;
