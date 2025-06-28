import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowParagraph(true), 2500); // match typewriter duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="conatiner max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="typewriter inline-block text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm Julián Galindo Mora
          </h1>
          {showParagraph && (
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl ax-auto opacity-0 animate-fade-in-delay-d">
              I design and develop digital experiences that flow from structure to aesthetics,
              blending backend logic with the intuition of human-centered design. Every line of code
              I write aims to unite functionality with creative expression.
            </p>
          )}
          {showParagraph && (
            <div className="pt-4 opacity-0 animate-fade-in-delay-d">
              <a href="#projects" className="general-button">
                View My Work
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
