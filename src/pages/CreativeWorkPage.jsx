import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const CreativeWorkPage = () => {
  const { t } = useTranslation();

  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="lg:ml-52 xl:ml-64 flex-1 flex flex-col">
        <div className="pt-20 py-24 px-4 flex-1">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-h1 font-bold mb-6 text-primary">
              <span className="text-primary">Creative</span> Work
            </h1>
            <p className="text-lg font-light text-muted-foreground mb-16">
              Experimental projects, concept art, and innovative design explorations
            </p>

            <div className="grid grid-cols-1 gap-8 mt-16 place-items-center">
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full max-w-4xl scroll-mt-24">
                <div className="h-80 sm:h-96 overflow-hidden">
                  <img
                    src="/ProjectPreviews/Design1.png"
                    alt="HnO Investigation Project"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-3 mb-6 justify-center w-full">
                    <span className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      Architectural Design
                    </span>
                    <span className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      Futuristic Concepts
                    </span>
                    <span className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      Investigation
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl text-primary font-semibold mb-3 text-center">
                    HnO Investigation
                  </h3>
                  <p className="text-muted-foreground font-light text-base sm:text-lg mb-6 text-center max-w-3xl mx-auto">
                    Architectural and futuristic design concept exploring innovative spatial
                    solutions and conceptual frameworks for future living environments.
                  </p>
                </div>
              </div>

              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full max-w-4xl scroll-mt-24">
                <div className="h-80 sm:h-96 overflow-hidden">
                  <img
                    src="/ProjectPreviews/Sketch2.png"
                    alt="T-Shirt Design with Technical Specs"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-3 mb-6 justify-center w-full">
                    <span className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      Graphic Design
                    </span>
                    <span className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      Apparel Design
                    </span>
                    <span className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      Technical Specs
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl text-primary font-semibold mb-3 text-center">
                    Technical T-Shirt Design
                  </h3>
                  <p className="text-muted-foreground font-light text-base sm:text-lg mb-6 text-center max-w-3xl mx-auto">
                    Technical apparel design showcasing graphic design skills combined with
                    production specifications and material considerations.
                  </p>
                </div>
              </div>

              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full max-w-4xl scroll-mt-24">
                <div className="h-80 sm:h-96 overflow-hidden">
                  <img
                    src="/ProjectPreviews/Sketch 3.png"
                    alt="Airplane Mode UI Concept"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-3 mb-6 justify-center w-full">
                    <span className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      UI/UX Design
                    </span>
                    <span className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      Digital Art
                    </span>
                    <span className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      Interface Concept
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl text-primary font-semibold mb-3 text-center">
                    Airplane Mode UI Concept
                  </h3>
                  <p className="text-muted-foreground font-light text-base sm:text-lg mb-6 text-center max-w-3xl mx-auto">
                    Digital interface concept exploring user experience design through creative
                    interpretation of familiar technology interactions.
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
