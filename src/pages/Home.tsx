import React from 'react';
import IntroSection from '../components/sections/IntroSection';
import ServiceSection from '../components/sections/ServiceSection';
import AboutSection from '../components/sections/AboutSection';
import PartnerSection from '../components/sections/PartnerSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import ProjectSection from '../components/sections/ProjectSection';
import BrandSection from '../components/sections/BrandSection';
import ContactSection from '../components/sections/ContactSection';
import BlogSection from '../components/sections/BlogSection';

const Home: React.FC = () => {
  return (
    <>
      <IntroSection />
      <ServiceSection />
      <AboutSection />
      <PartnerSection />
      <TestimonialSection />
      <ProjectSection />
      <BrandSection />
      <ContactSection />
      <BlogSection />
    </>
  );
};

export default Home;
