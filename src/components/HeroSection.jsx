export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="conatiner max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opaciy-o animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-a"> Julián </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-b"> Galindo </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-c"> Mora </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl ax-auto opacity-0 animate-fade-in-delay-d">
            I design and develop digital experiences that flow from structure to aesthetics,
            blending backend logic with the intuition of human-centered design. Every line of code I
            write aims to unite functionality with creative expression.
          </p>
        </div>
      </div>
    </section>
  );
};
