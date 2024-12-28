import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
  return (
    <div className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
              Available for Freelance
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Hi, I'm Suraj Sahu
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-indigo-600 dark:text-indigo-400 mb-6"
          >
            Fullstack Developer & Designer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            I craft beautiful and functional web experiences using modern technologies.
            Let's build something amazing together.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:scale-105"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </a>
            
            <SocialLinks />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3"
            alt="Developer workspace"
            className="rounded-lg shadow-2xl dark:opacity-80 transition-transform hover:scale-105 duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;