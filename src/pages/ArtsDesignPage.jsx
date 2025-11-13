import { Link } from 'react-router-dom';
import { Palette, Brush, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ArtsDesignPage = () => {
  const { t } = useTranslation();

  const artsProjects = [
    {
      title: t('navbar.sketches'),
      description:
        'Hand-drawn sketches and conceptual artwork that captures creative ideas and inspiration.',
      image: '/ProjectPreviews/sketches-preview.png',
      tags: ['Hand-drawn', 'Concepts', 'Traditional'],
      path: '/projects/sketches',
      color: 'text-purple-500',
      icon: Brush,
    },
    {
      title: t('navbar.drawings'),
      description: 'Digital illustrations, traditional drawings, and artistic explorations.',
      image: '/ProjectPreviews/drawings-preview.png',
      tags: ['Digital Art', 'Illustrations', 'Traditional'],
      path: '/projects/drawings',
      color: 'text-pink-500',
      icon: Palette,
    },
    {
      title: t('navbar.creative-work'),
      description: 'Experimental art, masks, moodboards, videos and creative projects.',
      image: '/ProjectPreviews/creative-preview.png',
      tags: ['Experimental', 'Masks', 'Videos', 'Moodboards'],
      path: '/projects/creative',
      color: 'text-orange-500',
      icon: Sparkles,
    },
  ];

  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="lg:ml-52 flex-1 flex flex-col">
        <div className="pt-20 py-24 px-4 flex-1">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              <span className="text-primary">Arts & Design</span> Portfolio
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Discover my creative works including sketches, digital art, and experimental projects
              that showcase artistic expression.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artsProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <Link
                    key={index}
                    to={project.path}
                    className="group bg-card rounded-lg overflow-hidden shadow-lg card-hover transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <IconComponent className={`w-16 h-16 ${project.color}`} />
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-2 rounded-full bg-primary/10 ${project.color}`}>
                          <IconComponent size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary/80">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
