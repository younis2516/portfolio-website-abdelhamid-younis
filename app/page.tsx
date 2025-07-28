"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/Section_devider";
import Skills from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import VisitorPopup from '@/components/VisitorPopup';
import React, { useEffect, useState } from 'react';


export default function Home() {
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
    const visited = localStorage.getItem('visited');
    if (!visited) {
      setShowPopup(true);
    }
  }, []);
  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showPopup]);

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <main className="flex flex-col items-center px-4"> 
    {showPopup && (
        <div className="fixed inset-0 z-50 bg-white/50 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <VisitorPopup onClose={handlePopupClose} />
        </div>
      )}
      <Intro />
        <SectionDivider />
        {/* <About />
         <SectionDivider /> */}
        <Testimonials/>
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact/>

    </main>
  )
}
