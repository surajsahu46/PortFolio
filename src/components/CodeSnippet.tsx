import React from 'react';
import { motion } from 'framer-motion';

const CodeSnippet = () => {
  const code = `const Portfolio = {
  name: 'Suraj Sahu',
  role: 'Fullstack Developer',
  skills: {
    frontend: ['React', 'TypeScript', 'Tailwind'],
    backend: ['Node.js', 'Express', 'PostgreSQL'],
    tools: ['Git', 'Docker', 'AWS']
  },
  contact: {
    email: 'sahu.suraj.3141@gmail.com',
    phone: '+91 8691921917'
  }
};`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 rounded-lg p-4"
    >
      <pre className="text-gray-300 font-mono text-sm">
        <code>{code}</code>
      </pre>
    </motion.div>
  );
};

export default CodeSnippet;