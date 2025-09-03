import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { About } from '../components/sections/About';
import { Portfolio } from '../components/sections/Portfolio';
import { Testimonials } from '../components/sections/Testimonials';
import { Clients } from '../components/sections/Clients';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}