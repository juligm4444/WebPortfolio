import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { FeaturedWorkSection } from '../components/FeaturedWorkSection';
import { ContactSection } from '../components/ContactSection';
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
        <FeaturedWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
