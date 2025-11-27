import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { SkillsSection } from '../components/SkillsSection';
import { CertificationsSection } from '../components/CertificationsSection';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      {/* Main content with responsive left margin for sidebar */}
      <main className="lg:ml-52 xl:ml-64 flex-1 flex flex-col min-h-screen">
        <HeroSection />
        <SkillsSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
};
