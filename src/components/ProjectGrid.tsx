import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`${
            index % 5 === 0 ? 'col-span-12 md:col-span-8' : 
            index % 5 === 1 ? 'col-span-12 md:col-span-4' :
            index % 5 === 2 ? 'col-span-12 md:col-span-6' :
            index % 5 === 3 ? 'col-span-12 md:col-span-6' :
            'col-span-12'
          } group`}
        >
          <div className="relative h-full overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.githubLink}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={project.liveLink}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </a>
                    </div>
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ArrowRight className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;