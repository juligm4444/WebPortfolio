import { Navbar } from '../components/Navbar';
import { ThemeToggle } from '../components/ThemeToggle';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { Footer } from '../components/Footer';
import { CertificationsSection } from '../components/CertificationsSection';

export const Home = () => {
  return (
    <div id="root" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      {/* Main content with left margin for desktop sidebar */}
      <main className="lg:ml-52">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
};
