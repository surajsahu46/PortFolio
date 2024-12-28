import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight, Calendar } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
}

interface ArticleGridProps {
  articles: Article[];
}

const ArticleGrid = ({ articles }: ArticleGridProps) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {articles.map((article, index) => (
        <motion.article
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`${
            index % 3 === 0 ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4'
          } group`}
        >
          <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  {article.category}
                </span>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {article.description}
              </p>
              <a
                href={article.link}
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group-hover:translate-x-2 transition-transform"
              >
                Read More
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default ArticleGrid;