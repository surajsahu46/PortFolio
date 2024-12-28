import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import ProjectGrid from '../components/ProjectGrid';

// ... (keep existing projects data)

const Projects = () => {
  return (
    <>
      <SEO 
        title="Projects"
        description="Explore my portfolio of web development and design projects"
        keywords="web development, react, node.js, portfolio projects"
      />
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A collection of my recent work and side projects
            </p>
          </motion.div>

          <ProjectGrid projects={projects} />
        </div>
      </div>
    </>
  );
};

export default Projects;