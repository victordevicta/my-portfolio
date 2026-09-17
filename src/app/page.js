import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SectionDivider from "./components/SectionDivider";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="container mx-auto mt-24 px-6 py-4 sm:px-12">
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
      </div>
      <Footer />
    </main>
  );
}
