import React from 'react';
import { motion } from 'framer-motion';

interface StatCounterProps {
  label: string;
  value: number;
  suffix?: string;
  delay?: number;
}

const StatCounter = ({ label, value, suffix = '', delay = 0 }: StatCounterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
        className="text-4xl font-bold text-indigo-600 dark:text-indigo-400"
      >
        {value}{suffix}
      </motion.div>
      <div className="text-gray-600 dark:text-gray-300 mt-2">{label}</div>
    </motion.div>
  );
};

export default StatCounter;