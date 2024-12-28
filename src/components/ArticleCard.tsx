import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
  index: number;
}

const ArticleCard = ({ title, description, date, readTime, category, link, index }: ArticleCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
            {category}
          </span>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="h-4 w-4 mr-1" />
            {readTime}
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
          <a
            href={link}
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            Read More
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ArticleCard;