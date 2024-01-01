import React, { Fragment } from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import HeroSection from "../Layout/Hero/HeroSection";
import ContentSection from "../Layout/Content/ContentSection";
import ServiceSection from "../Layout/Service/ServiceSection";
import AboutSection from "../Layout/About/AboutSection";
import Testimonial from "../Layout/Testimonial/Testimonial";
import ProcessSection from "../Layout/Process/ProcessSection";
import PerkSection from "../Layout/Perk/PerkSection";
import FAQsSection from "../Layout/FAQs/FAQsSection";

const Home = () => {
  return (
    <Fragment>
      <Header />

      <HeroSection />

      <div id="ourCraft">
        <ContentSection />
      </div>

      <ServiceSection />

      <div id="results">
        <Testimonial />
      </div>

      <div id="process">
        <ProcessSection />
      </div>

      <PerkSection />

      <AboutSection />

      <div id="faqs">
        <FAQsSection />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
