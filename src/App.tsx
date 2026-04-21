import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PageMeta } from "@/components/ui/PageMeta";

export function App() {
  return (
    <div className="min-h-screen bg-base text-text">
      <PageMeta pathname="/" />
      <a
        href="#content"
        className="focus-ring sr-only rounded-full bg-base px-4 py-2 text-text focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to content
      </a>
      <AmbientBackdrop />
      <Header />
      <main id="content" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
