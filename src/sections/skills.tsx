import React from 'react';
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiGraphql, SiNextdotjs, SiTailwindcss, SiSupabase, SiFirebase } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
  { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
  { name: 'NextJS', icon: <SiNextdotjs className="text-black" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-700" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Supabase', icon: <SiSupabase className="text-green-600" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
];

const Skills: React.FC = () => {
  return (
    <div className="py-10 mb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Principais Tecnologias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
