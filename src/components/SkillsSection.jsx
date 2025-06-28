import { useState } from 'react';
import { cn } from '@/lib/utils';

// Import SVGs from src/assets
import ReactIcon from '../assets/React.svg';
import HTMLIcon from '../assets/HTML5.svg';
import CSSIcon from '../assets/CSS3.svg';
import JavaScriptIcon from '../assets/JavaScript.svg';
import TailwindIcon from '../assets/Tailwind CSS.svg';
import PythonIcon from '../assets/Python.svg';
import JavaIcon from '../assets/Java.svg';
import SQLIcon from '../assets/SQL Developer.svg';
import MongoDBIcon from '../assets/MongoDB.svg';
import FlutterIcon from '../assets/Flutter.svg';
import AndroidStudioIcon from '../assets/Android Studio.svg';
import GitIcon from '../assets/Git.svg';
import VSCodeIcon from '../assets/Visual Studio Code (VS Code).svg';
import FigmaIcon from '../assets/Figma.svg';
import UnrealEngineIcon from '../assets/Unreal Engine.svg';
import UnityIcon from '../assets/Unity.svg';
import PhotoshopIcon from '../assets/Adobe Photoshop.svg';
import IllustratorIcon from '../assets/Adobe Illustrator.svg';

// Map icon names to imports
const iconMap = {
  'react.svg': ReactIcon,
  'html.svg': HTMLIcon,
  'css.svg': CSSIcon,
  'javascript.svg': JavaScriptIcon,
  'tailwindcss.svg': TailwindIcon,
  'python.svg': PythonIcon,
  'java.svg': JavaIcon,
  'sqldeveloper.svg': SQLIcon,
  'mongodb.svg': MongoDBIcon,
  'flutter.svg': FlutterIcon,
  'androidstudio.svg': AndroidStudioIcon,
  'git.svg': GitIcon,
  'vscode.svg': VSCodeIcon,
  'figma.svg': FigmaIcon,
  'unrealengine.svg': UnrealEngineIcon,
  'unity.svg': UnityIcon,
  'photoshop.svg': PhotoshopIcon,
  'illustrator.svg': IllustratorIcon,
};

const skills = [
  { name: 'React', level: 60, category: 'Frontend', icon: 'react.svg' },
  { name: 'HTML', level: 60, category: 'Frontend', icon: 'html.svg' },
  { name: 'CSS', level: 50, category: 'Frontend', icon: 'css.svg' },
  { name: 'JavaScript', level: 60, category: 'Frontend', icon: 'javascript.svg' },
  { name: 'Tailwind CSS', level: 40, category: 'Frontend', icon: 'tailwindcss.svg' },
  { name: 'Python', level: 90, category: 'Backend', icon: 'python.svg' },
  { name: 'Java', level: 85, category: 'Backend', icon: 'java.svg' },
  { name: 'SQL Dev.', level: 60, category: 'Backend', icon: 'sqldeveloper.svg' },
  { name: 'Mongo DB.', level: 50, category: 'Backend', icon: 'mongodb.svg' },
  { name: 'Flutter', level: 80, category: 'Mobile', icon: 'flutter.svg' },
  { name: 'Android St.', level: 70, category: 'Mobile', icon: 'androidstudio.svg' },
  { name: 'React Native', level: 50, category: 'Mobile', icon: 'react.svg' },
  { name: 'Git', level: 90, category: 'Tools', icon: 'git.svg' },
  { name: 'VS. Code', level: 90, category: 'Tools', icon: 'vscode.svg' },
  { name: 'Figma', level: 90, category: 'Tools', icon: 'figma.svg' },
  { name: 'U. Engine 5', level: 70, category: 'Tools', icon: 'unrealengine.svg' },
  { name: 'Unity', level: 60, category: 'Tools', icon: 'unity.svg' },
  { name: 'Photoshop', level: 40, category: 'Tools', icon: 'photoshop.svg' },
  { name: 'Illustrator', level: 50, category: 'Tools', icon: 'illustrator.svg' },
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
