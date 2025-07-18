import { Navbar } from '../components/Navbar';
import { ThemeToggle } from '../components/ThemeToggle';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { CertificationsSection } from '../components/CertificationsSection';

export const Home = () => {
  return (
    <div id="root" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
