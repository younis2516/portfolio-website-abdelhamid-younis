import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SystemPositioning from "@/components/SystemPositioning";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SystemPositioning />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  );
}
