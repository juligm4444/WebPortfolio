import { useState } from 'react';
import { cn } from '@/lib/utils';

const iconMap = {
  'React.svg': '/assets/React.svg',
  'HTML5.svg': '/assets/HTML5.svg',
  'CSS3.svg': '/assets/CSS3.svg',
  'JavaScript.svg': '/assets/JavaScript.svg',
  'Tailwind CSS.svg': '/assets/Tailwind CSS.svg',
  'Python.svg': '/assets/Python.svg',
  'Java.svg': '/assets/Java.svg',
  'SQL Developer.svg': '/assets/SQL Developer.svg',
  'MongoDB.svg': '/assets/MongoDB.svg',
  'Flutter.svg': '/assets/Flutter.svg',
  'Android Studio.svg': '/assets/Android Studio.svg',
  'Git.svg': '/assets/Git.svg',
  'Visual Studio Code.svg': '/assets/Visual Studio Code.svg',
  'Figma.svg': '/assets/Figma.svg',
  'Unreal Engine.svg': '/assets/Unreal Engine.svg',
  'Unity.svg': '/assets/Unity.svg',
  'Adobe Photoshop.svg': '/assets/Adobe Photoshop.svg',
  'Adobe Illustrator.svg': '/assets/Adobe Illustrator.svg',
};

// Update skills to use the correct icon file names:
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
  { name: 'Figma', level: 80, category: 'Tools', icon: 'Figma.svg' },
  { name: 'U. Engine 5', level: 70, category: 'Tools', icon: 'Unreal Engine.svg' },
  { name: 'Unity', level: 60, category: 'Tools', icon: 'Unity.svg' },
  { name: 'Photoshop', level: 40, category: 'Tools', icon: 'Adobe Photoshop.svg' },
  { name: 'Illustrator', level: 50, category: 'Tools', icon: 'Adobe Illustrator.svg' },
];

const categories = ['all', 'Frontend', 'Backend', 'Mobile', 'Tools'];

export const SkillsSection = () => {
  const [activeCategory, setCategory] = useState('all');
  const filteredSkills = skills
    .slice()
    .sort((a, b) => b.level - a.level)
    .filter((skill) => activeCategory === 'all' || skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-foreground hover:bg-secondary'
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-row items-center gap-4"
            >
              {/* Left: Icon and Name */}
              <div className="flex flex-col items-center w-28 flex-shrink-0">
                {skill.icon && (
                  <img
                    src={iconMap[skill.icon]}
                    alt={skill.name}
                    className="w-12 h-12 mb-2 object-contain"
                  />
                )}
                <h3
                  className="font-semibold text-lg text-center truncate w-full"
                  title={skill.name}
                >
                  {skill.name}
                </h3>
              </div>
              {/* Right: Progress Bar and Percentage */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + '%' }}
                  />
                </div>
                <div className="text-center mt-1">
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
