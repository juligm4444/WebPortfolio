import { Navbar } from '../components/Navbar';
import { ThemeToggle } from '../components/ThemeToggle';
import { HeroSection } from '../components/HeroSection';

export const Home = () => {
  return (
    <div id="root" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};
