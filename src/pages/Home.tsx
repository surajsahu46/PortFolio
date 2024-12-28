import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download, Code2, Palette, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1",
    testimonial: "Working with Suraj was an absolute pleasure. His attention to detail and technical expertise helped us launch our product ahead of schedule."
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1",
    testimonial: "Suraj's ability to understand our business needs and translate them into elegant technical solutions was impressive. Highly recommended!"
  },
  {
    name: "Emily Davis",
    role: "Creative Director",
    company: "DesignHub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1",
    testimonial: "The attention to design details and user experience in Suraj's work sets him apart. A true professional who delivers exceptional results."
  }
];

const Home = () => {
  return (
    <>
      <SEO 
        title="Home"
        description="Suraj Sahu - Fullstack Developer & Designer specializing in creating beautiful and functional web experiences"
        keywords="fullstack developer, web designer, react developer, nodejs developer"
      />
      <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Crafting digital experiences with precision and creativity</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <Code2 className="h-12 w-12 mx-auto text-indigo-600 dark:text-indigo-400 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Clean Code</h3>
                <p className="text-gray-600 dark:text-gray-300">Writing maintainable, scalable, and efficient code that follows best practices.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <Palette className="h-12 w-12 mx-auto text-indigo-600 dark:text-indigo-400 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Modern Design</h3>
                <p className="text-gray-600 dark:text-gray-300">Creating beautiful, intuitive interfaces that users love to interact with.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <Globe className="h-12 w-12 mx-auto text-indigo-600 dark:text-indigo-400 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Web Performance</h3>
                <p className="text-gray-600 dark:text-gray-300">Optimizing applications for speed, accessibility, and user experience.</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What People Say</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Feedback from clients and collaborators</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.name}
                  {...testimonial}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;