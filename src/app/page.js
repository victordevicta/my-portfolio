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
      <div className="container mt-24 mx-auto px-6 sm:px-12 py-4">
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
