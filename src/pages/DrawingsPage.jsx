import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const DrawingsPage = () => {
  const { t } = useTranslation();

  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="lg:ml-52 flex-1 flex flex-col">
        <div className="pt-20 py-24 px-4 flex-1">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Drawings</span> & Illustrations
            </h1>
            <p className="text-lg font-light text-muted-foreground mb-16">
              Digital and traditional drawings exploring form, function, and artistic expression
            </p>

            <div className="grid grid-cols-1 gap-8 mt-16 place-items-center">
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full max-w-4xl scroll-mt-24">
                <div className="h-80 sm:h-96 overflow-hidden">
                  <img
                    src="/ProjectPreviews/Draw1.png"
                    alt="Industrial Design Studies"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-3 mb-6 justify-center w-full">
                    <span className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      Technical Drawing
                    </span>
                    <span className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      Industrial Design
                    </span>
                    <span className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      Object Studies
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl text-primary font-semibold mb-3 text-center">
                    Industrial Design Studies
                  </h3>
                  <p className="text-muted-foreground font-light text-base sm:text-lg mb-6 text-center max-w-3xl mx-auto">
                    Collection of object studies exploring industrial design principles, form
                    language, and material considerations through detailed technical drawings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
