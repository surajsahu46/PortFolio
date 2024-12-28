import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <motion.div 
      className="flex space-x-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      <a
        href="https://github.com/surajsahu-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform hover:scale-110"
      >
        <Github className="h-6 w-6" />
      </a>
      <a
        href="https://linkedin.com/in/surajsahu-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform hover:scale-110"
      >
        <Linkedin className="h-6 w-6" />
      </a>
    </motion.div>
  );
};

export default SocialLinks;