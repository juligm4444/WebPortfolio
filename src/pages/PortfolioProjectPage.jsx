import { Navbar } from '../components/Navbar';
import { WebsiteSection } from '../components/WebsiteSection';
import { Footer } from '../components/Footer';

export const PortfolioProjectPage = () => {
  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="lg:ml-52 flex-1 flex flex-col">
        <div className="pt-20 flex-1">
          <WebsiteSection />
        </div>
        <Footer />
      </main>
    </div>
  );
};
