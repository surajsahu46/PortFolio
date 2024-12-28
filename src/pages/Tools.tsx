import React from 'react';
import type { Tool } from '../types';
import { Code2, GitBranch, Globe, Palette, Database, Terminal, Wrench } from 'lucide-react';

const toolsByCategory: Record<string, Tool[]> = {
  'Programming Languages & Frameworks': [
    { id: 1, name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', category: 'Frontend' },
    { id: 2, name: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg', category: 'Language' },
    { id: 3, name: 'Node.js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', category: 'Backend' },
    { id: 4, name: 'TypeScript', icon: 'https://cdn.worldvectorlogo.com/logos/typescript.svg', category: 'Language' },
    { id: 5, name: 'React Native', icon: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg', category: 'Mobile' },
    { id: 6, name: 'Express.js', icon: 'https://cdn.worldvectorlogo.com/logos/express-109.svg', category: 'Backend' },
    { id: 7, name: 'PHP', icon: 'https://cdn.worldvectorlogo.com/logos/php-1.svg', category: 'Backend' },
    { id: 8, name: 'Laravel', icon: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg', category: 'Backend' },
    { id: 9, name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', category: 'Language' },
    { id: 10, name: 'Flutter', icon: 'https://cdn.worldvectorlogo.com/logos/flutter.svg', category: 'Mobile' },
    { id: 11, name: 'Angular', icon: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg', category: 'Frontend' },
    { id: 12, name: 'Django', icon: 'https://cdn.worldvectorlogo.com/logos/django.svg', category: 'Backend' },
  ],
  'Version Control': [
    { id: 13, name: 'Git', icon: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg', category: 'VCS' },
    { id: 14, name: 'GitHub', icon: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg', category: 'Platform' },
    { id: 15, name: 'GitLab', icon: 'https://cdn.worldvectorlogo.com/logos/gitlab.svg', category: 'Platform' },
    { id: 16, name: 'Bitbucket', icon: 'https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg', category: 'Platform' },
  ],
  'Web Technologies': [
    { id: 17, name: 'HTML5', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg', category: 'Frontend' },
    { id: 18, name: 'CSS3', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg', category: 'Frontend' },
    { id: 19, name: 'Bootstrap', icon: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg', category: 'Frontend' },
    { id: 20, name: 'SASS', icon: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg', category: 'Frontend' },
    { id: 21, name: 'Webflow', icon: 'https://cdn.worldvectorlogo.com/logos/webflow-1.svg', category: 'Platform' },
  ],
  'Development Environments': [
    { id: 22, name: 'VS Code', icon: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg', category: 'IDE' },
    { id: 23, name: 'PyCharm', icon: 'https://cdn.worldvectorlogo.com/logos/pycharm-1.svg', category: 'IDE' },
    { id: 24, name: 'WebStorm', icon: 'https://cdn.worldvectorlogo.com/logos/webstorm-icon.svg', category: 'IDE' },
  ],
  'Design Tools': [
    { id: 25, name: 'Figma', icon: 'https://cdn.worldvectorlogo.com/logos/figma-5.svg', category: 'Design' },
  ],
  'Build Tools': [
    { id: 26, name: 'Webpack', icon: 'https://cdn.worldvectorlogo.com/logos/webpack-icon.svg', category: 'Build' },
  ],
  'Databases': [
    { id: 27, name: 'PostgreSQL', icon: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg', category: 'Database' },
    { id: 28, name: 'MySQL', icon: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg', category: 'Database' },
    { id: 29, name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg', category: 'Database' },
  ],
  'Testing': [
    { id: 30, name: 'Jest', icon: 'https://cdn.worldvectorlogo.com/logos/jest-2.svg', category: 'Testing' },
    { id: 31, name: 'Mocha', icon: 'https://cdn.worldvectorlogo.com/logos/mocha-1.svg', category: 'Testing' },
  ],
  'API Tools': [
    { id: 32, name: 'Postman', icon: 'https://cdn.worldvectorlogo.com/logos/postman.svg', category: 'API' },
  ],
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Programming Languages & Frameworks':
      return Code2;
    case 'Version Control':
      return GitBranch;
    case 'Web Technologies':
      return Globe;
    case 'Design Tools':
      return Palette;
    case 'Databases':
      return Database;
    case 'Development Environments':
      return Terminal;
    default:
      return Wrench;
  }
};

const Tools = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tools & Technologies</h1>
          <p className="text-xl text-gray-600">The tools and technologies I use to bring ideas to life</p>
        </div>

        <div className="space-y-12">
          {Object.entries(toolsByCategory).map(([category, tools]) => {
            const IconComponent = getCategoryIcon(category);
            return (
              <div key={category} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-6">
                  <IconComponent className="h-6 w-6 text-indigo-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {tools.map((tool) => (
                    <div
                      key={tool.id}
                      className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 mb-3 flex items-center justify-center">
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 text-center">{tool.name}</h3>
                      <span className="text-xs text-gray-500 mt-1">{tool.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tools;