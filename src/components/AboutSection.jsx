import { Briefcase, Code, User } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {''}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Innovative Designer & Creative Developer</h3>
            <p className="text-muted-foreground">
              As a designer and developer, I specialize in crafting intuitive, game-inspired
              interfaces with modern frontend technologies like React. My background in systems
              engineering and mobile development allows me to build experiences that are not only
              visually engaging but also structurally solid.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about blending creativity with logic from designing playful prototypes
              in Figma to implementing dynamic functionality with backend tools. Always curious and
              learning, I thrive at the intersection of design and code, building digital
              experiences that connect with people.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="general-button">
                Get in Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Mobile & Fullstack Development </h4>
                  <p className="text-muted-foreground">
                    Developing complete back-end & front-end applications with React Technology.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> UI/UX & Videogame Design </h4>
                  <p className="text-muted-foreground">
                    Creating interfaces and previews of mobile apps and videoagmes with high
                    prototyping tools
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Team & Project Management</h4>
                  <p className="text-muted-foreground">
                    {' '}
                    Planning and achieving projects through the application of agile metodologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
