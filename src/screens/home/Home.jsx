import React from "react";
import PerksOfUsingOurBuilders from "./perksOfUsingOurBuilders/PerksOfUsingOurBuilders";
import ProfessionalResume from "./professionalResume/ProfessionalResume";
import FootDoor from "./sections/footDoor/FootDoor";
import Hero from "./sections/hero/Hero";
import JobHeroesSayAboutUs from "./sections/jobHeroesSayAboutUs/JobHeroesSayAboutUs";
import PowerfulResources from "./sections/powerfulResources/PowerfulResources";
import ResumeSlider from "./sections/resumeSlider/ResumeSlider";
import Trustpilot from "./sections/trustpilot/Trustpilot";

const Home = () => {
  console.log("2 + '2' =", 2 + "2");
  console.log("2 - '2' =", 2 - "2");

  return (
    <div>
      {/* Jump Start Your Career */}
      <Hero />
      {/* Slider */}
      <ResumeSlider />
      {/* We're on Trustpilot*/}
      <Trustpilot />
      {/* Perks of Using Our Builders */}
      <PerksOfUsingOurBuilders />
      {/* Professional Resume Examples for Inspiration */}
      <ProfessionalResume />
      {/* What Job Heroes Say About Us */}
      <JobHeroesSayAboutUs />
      {/* More Powerful Resources */}
      <PowerfulResources />
      {/* Let's Get Your Foot in the Door */}
      <FootDoor />
    </div>
  );
};

export default Home;
