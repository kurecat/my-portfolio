import Header from "./component/Layout/Header";
import PortfolioHeroSection from "./component/HeroSection";
import AboutMeSection from "./component/AboutMeSection";
import WhatIFocusOnSection from "./component/WhatIFocusOnSection";
import ProjectsSection from "./component/ProjectsSection";
import DesignProcessSection from "./component/DesignProcessSection";
import SkillsSection from "./component/SkillsSection";
import ExperienceSection from "./component/ExperienceSection";
import ContactSection from "./component/ContactSection";

function App() {
  return (
    <>
      <Header />
      <PortfolioHeroSection />
      <AboutMeSection />
      <WhatIFocusOnSection />
      <ProjectsSection />
      <DesignProcessSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}

export default App;
