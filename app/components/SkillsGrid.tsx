import { useState } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiPostgresql, 
  SiMongodb, 
  SiNextdotjs, 
  SiGraphql, 
  SiRedis, 
  SiKubernetes 
} from 'react-icons/si';

interface Skill {
  name: string;
  category: string;
  color: string;
  icon: React.ReactNode;
}

export function SkillsGrid() {
  const skills: Skill[] = [
    { name: 'React', category: 'frontend', color: 'cyan', icon: <FaReact size={32} /> },
    { name: 'Node.js', category: 'backend', color: 'green', icon: <FaNodeJs size={32} /> },
    { name: 'TypeScript', category: 'language', color: 'blue', icon: <SiTypescript size={28} /> },
    { name: 'Python', category: 'language', color: 'yellow', icon: <FaPython size={32} /> },
    { name: 'PostgreSQL', category: 'database', color: 'purple', icon: <SiPostgresql size={28} /> },
    { name: 'MongoDB', category: 'database', color: 'green', icon: <SiMongodb size={28} /> },
    { name: 'Docker', category: 'devops', color: 'cyan', icon: <FaDocker size={32} /> },
    { name: 'AWS', category: 'cloud', color: 'orange', icon: <FaAws size={32} /> },
    { name: 'Next.js', category: 'frontend', color: 'white', icon: <SiNextdotjs size={28} /> },
    { name: 'GraphQL', category: 'api', color: 'pink', icon: <SiGraphql size={28} /> },
    { name: 'Redis', category: 'database', color: 'red', icon: <SiRedis size={28} /> },
    { name: 'Kubernetes', category: 'devops', color: 'blue', icon: <SiKubernetes size={28} /> },
  ];

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      cyan: 'border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]',
      green: 'border-green-400 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]',
      blue: 'border-blue-400 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]',
      yellow: 'border-yellow-400 text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]',
      purple: 'border-purple-400 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]',
      orange: 'border-orange-400 text-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.5)]',
      white: 'border-gray-300 text-gray-300 shadow-[0_0_10px_rgba(209,213,219,0.5)]',
      pink: 'border-pink-400 text-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.5)]',
      red: 'border-red-400 text-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]',
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className={`
            border-2 bg-black/60 p-4 text-center cursor-pointer
            transition-all duration-200 relative flex flex-col items-center gap-3
            ${getColorClass(skill.color)}
            ${hoveredSkill === skill.name ? 'scale-105 bg-black/90' : ''}
          `}
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
        >
          <div className={`transition-transform duration-200 ${hoveredSkill === skill.name ? 'scale-110' : ''}`}>
            {skill.icon}
          </div>
          <div>
            <div className="text-sm font-bold">{skill.name}</div>
            <div className="text-xs text-gray-500 mt-1 uppercase">[{skill.category}]</div>
          </div>
          {hoveredSkill === skill.name && (
            <div className="absolute inset-0 border-2 border-current animate-ping opacity-20"></div>
          )}
        </div>
      ))}
    </div>
  );
}
