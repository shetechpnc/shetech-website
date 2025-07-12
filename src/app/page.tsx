"use client";
import React from "react";
import Home from "../app/pages/home/page";
import About from '../app/pages/about/page'
import FAQPage from "./pages/faq/page";
import TeamSection from './pages/home/TeamSection'
import Gallery from './pages/gallery/page'
const Page: React.FC = () => {
  return (
    <>
      <Home />
      <About />
     <FAQPage />
     <TeamSection />
     <Gallery />
    </>
  );
};

export default Page;


