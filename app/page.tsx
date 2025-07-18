import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/Section_devider";
import Skills from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4"> 
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
