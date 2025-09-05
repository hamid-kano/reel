import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { ROICalculator } from '../components/sections/ROICalculator';
import { IdeaGenerator } from '../components/sections/IdeaGenerator';
import { SocialPulse } from '../components/sections/SocialPulse';
import { About } from '../components/sections/About';
import { Portfolio } from '../components/sections/Portfolio';
import { Testimonials } from '../components/sections/Testimonials';
import { Clients } from '../components/sections/Clients';
import { ProjectSuccess } from '../components/sections/ProjectSuccess';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ROICalculator />
      <IdeaGenerator />
      <SocialPulse />
      <Portfolio />
      <Testimonials />
      <Clients />
      <ProjectSuccess />
      <Contact />
      <Footer />
    </>
  );
}