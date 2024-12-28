import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  delay?: number;
}

const TestimonialCard = ({ name, role, company, image, testimonial, delay = 0 }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 relative"
    >
      <Quote className="absolute top-4 right-4 h-8 w-8 text-indigo-200 dark:text-indigo-800" />
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{role}</p>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">{company}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic">{testimonial}</p>
    </motion.div>
  );
};

export default TestimonialCard;