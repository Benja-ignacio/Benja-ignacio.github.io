import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CvHeader from "./components/CvHeader";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import TecnologiesSection from "./components/TecnologiesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import SectionHeading from "./components/SectionHeading";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-page">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-contrast"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido" className="flex-1">
        <CvHeader />
        <AboutSection />

        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Trayectoria"
            title="Experiencia y formación"
            description="Un recorrido por mi etapa académica y mi experiencia laboral reciente."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <ExperienceSection />
            <EducationSection />
          </div>
        </section>

        <TecnologiesSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
