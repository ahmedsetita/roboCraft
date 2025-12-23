import Hero from "@/components/Hero";
import Results from "@/components/Results";
import ProjectGallery from "@/components/ProjectGallery";
import CoreSkills from "@/components/CoreSkills";
import About from "@/components/About";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import Modules from "@/components/Modules";
import Certificate from "@/components/Certificate";
import TechTracks from "@/components/TechTracks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Results />
      <ProjectGallery />
      <CoreSkills />
      <About />
      <CurriculumAccordion />
      <Modules />
      <Certificate />
      <TechTracks />
      <Features />
      <FAQ />
      <ContactForm />
    </>
  );
}

