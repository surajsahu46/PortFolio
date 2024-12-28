import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600">Passionate about creating amazing web experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3"
              alt="About Me"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
            <p className="text-gray-600 mb-6">
              With over 5 years of experience in web development, I've worked on various projects
              ranging from small business websites to large-scale enterprise applications. My passion
              lies in creating intuitive and performant web applications that solve real-world problems.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Code className="h-8 w-8 mx-auto text-indigo-600 mb-2" />
                <h3 className="font-semibold">Clean Code</h3>
              </div>
              <div className="text-center">
                <Palette className="h-8 w-8 mx-auto text-indigo-600 mb-2" />
                <h3 className="font-semibold">Design</h3>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 mx-auto text-indigo-600 mb-2" />
                <h3 className="font-semibold">Performance</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.category} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;