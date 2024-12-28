import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import ArticleGrid from '../components/ArticleGrid';

// ... (keep existing articles data)

const Articles = () => {
  return (
    <>
      <SEO 
        title="Articles"
        description="Technical articles and tutorials about web development and software engineering"
        keywords="web development, tutorials, react, javascript, typescript"
      />
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Articles</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Sharing knowledge and experiences in web development
            </p>
          </motion.div>

          <ArticleGrid articles={articles} />
        </div>
      </div>
    </>
  );
};

export default Articles;