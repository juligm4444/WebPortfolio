import { useState } from 'react';
import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const iconMap = {
  'React.svg': '/assets/icons/React.svg',
  'HTML5.svg': '/assets/icons/HTML5.svg',
  'CSS3.svg': '/assets/icons/CSS3.svg',
  'JavaScript.svg': '/assets/icons/JavaScript.svg',
  'Tailwind CSS.svg': '/assets/icons/Tailwind CSS.svg',
  'Python.svg': '/assets/icons/Python.svg',
  'Java.svg': '/assets/icons/Java.svg',
  'SQL Developer.svg': '/assets/icons/SQL Developer.svg',
  'MongoDB.svg': '/assets/icons/MongoDB.svg',
  'Flutter.svg': '/assets/icons/Flutter.svg',
  'Android Studio.svg': '/assets/icons/Android Studio.svg',
  'Git.svg': '/assets/icons/Git.svg',
  'Visual Studio Code.svg': '/assets/icons/Visual Studio Code.svg',
  'Figma.svg': '/assets/icons/Figma.svg',
  'Unreal Engine.svg': '/assets/icons/Unreal Engine.svg',
  'Unity.svg': '/assets/icons/Unity.svg',
  'Adobe Photoshop.svg': '/assets/icons/Adobe Photoshop.svg',
  'Adobe Illustrator.svg': '/assets/icons/Adobe Illustrator.svg',
  'Angular.svg': 'assets/icons/Angular.svg',
  'Django.svg': 'assets/icons/Django.svg',
};

const skills = [
  { name: 'React', level: 60, category: 'Frontend', icon: 'React.svg' },
  { name: 'HTML', level: 60, category: 'Frontend', icon: 'HTML5.svg' },
  { name: 'CSS', level: 50, category: 'Frontend', icon: 'CSS3.svg' },
  { name: 'JavaScript', level: 60, category: 'Frontend', icon: 'JavaScript.svg' },
  { name: 'Tailwind CSS', level: 40, category: 'Frontend', icon: 'Tailwind CSS.svg' },
  { name: 'Python', level: 90, category: 'Backend', icon: 'Python.svg' },
  { name: 'Java', level: 85, category: 'Backend', icon: 'Java.svg' },
  { name: 'SQL Dev.', level: 70, category: 'Backend', icon: 'SQL Developer.svg' },
  { name: 'Mongo DB', level: 50, category: 'Backend', icon: 'MongoDB.svg' },
  { name: 'Flutter', level: 80, category: 'Mobile', icon: 'Flutter.svg' },
  { name: 'Android St.', level: 70, category: 'Mobile', icon: 'Android Studio.svg' },
  { name: 'React Native', level: 50, category: 'Mobile', icon: 'React.svg' },
  { name: 'Git', level: 90, category: 'Tools', icon: 'Git.svg' },
  { name: 'VS. Code', level: 90, category: 'Tools', icon: 'Visual Studio Code.svg' },
  { name: 'Figma', level: 80, category: 'Design', icon: 'Figma.svg' },
  { name: 'U. Engine 5', level: 70, category: 'Design', icon: 'Unreal Engine.svg' },
  { name: 'Unity', level: 60, category: 'Design', icon: 'Unity.svg' },
  { name: 'Photoshop', level: 40, category: 'Design', icon: 'Adobe Photoshop.svg' },
  { name: 'Illustrator', level: 50, category: 'Design', icon: 'Adobe Illustrator.svg' },
  { name: 'Angular', level: 50, category: 'Frontend', icon: 'Angular.svg' },
  { name: 'Django', level: 60, category: 'Frontend', icon: 'Django.svg' },
];

export const SkillsSection = () => {
  const [activeCategory, setCategory] = useState('all');
  const { t } = useTranslation();
  const [isLight, setIsLight] = useState(false);

  // Check theme on mount and when it changes
  React.useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains('light'));
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Map translation keys to categories
  const categories = [
    { key: 'all', label: t('skills.filter1') },
    { key: 'Frontend', label: t('skills.filter2') },
    { key: 'Backend', label: t('skills.filter3') },
    { key: 'Mobile', label: t('skills.filter4') },
    { key: 'Design', label: t('skills.filter5') },
    { key: 'Tools', label: t('skills.filter6') },
  ];

  const filteredSkills = skills
    .slice()
    .sort((a, b) => b.level - a.level)
    .filter((skill) => activeCategory === 'all' || skill.category === activeCategory);

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          {t('skills.title1')}{' '}
          <span className="text-4xl md:text-6xl text-primary">{t('skills.title2')}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setCategory(category.key)}
              className={cn(
                'px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition-colors duration-300 capitalize text-[20px]',
                activeCategory === category.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-foreground hover:bg-secondary'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 md:p-6 rounded-lg shadow-xs card-hover flex flex-row items-center gap-3 md:gap-4"
            >
              <div className="flex flex-col items-center w-20 md:w-28 flex-shrink-0">
                {skill.icon && (
                  <div className="w-12 h-12 md:w-16 md:h-16 mb-2 bg-white rounded-full flex items-center justify-center">
                    <img
                      src={iconMap[skill.icon]}
                      alt={skill.name}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                  </div>
                )}
                <h3
                  className="font-semibold text-primary text-[20px] text-center truncate w-full"
                  title={skill.name}
                >
                  {skill.name}
                </h3>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + '%' }}
                  />
                </div>
                <div className="text-center mt-1">
                  <span
                    className={cn(
                      'text-xs md:text-sm font-medium',
                      isLight ? 'text-emerald-100' : 'text-teal-900'
                    )}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
