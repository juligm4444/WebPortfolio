import { Link } from 'react-router-dom';
import { Code, Smartphone, Palette, FolderOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Projects = () => {
  const { t } = useTranslation();

  const projectCategories = [
    {
      title: t('navbar.websites'),
      description: 'Web applications and portfolio websites',
      icon: Code,
      path: '/projects/websites',
      color: 'text-blue-500',
    },
    {
      title: t('navbar.mobile-apps'),
      description: 'Mobile applications and app prototypes',
      icon: Smartphone,
      path: '/projects/mobile',
      color: 'text-green-500',
    },
    {
      title: t('navbar.design-projects'),
      description: 'UI/UX designs, sketches, and creative work',
      icon: Palette,
      path: '/projects/design',
      color: 'text-purple-500',
    },
    {
      title: t('navbar.other-projects'),
      description: 'Additional projects and experiments',
      icon: FolderOpen,
      path: '/projects/other',
      color: 'text-orange-500',
    },
  ];

  return (
    <div id="root" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="lg:ml-52">
        <div className="pt-20 py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Explore my work across different categories - from web development to mobile apps and
              creative design projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Link
                    key={index}
                    to={category.path}
                    className="group bg-card rounded-lg p-8 card-hover transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className={`p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors ${category.color}`}
                      >
                        <IconComponent size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary/80">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground">{category.description}</p>
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
