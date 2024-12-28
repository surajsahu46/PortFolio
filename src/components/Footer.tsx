import React from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  CodepenIcon,
  Dribbble,
  Mail,
  Phone,
  MapPin,
  Code2
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: CodepenIcon, href: 'https://codepen.io', label: 'CodePen' },
    { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            <p className="text-gray-400">
              Building amazing web experiences with modern technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span>sahu.suraj.3141@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span>+91 8691921917</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span>Kurla West, Mumbai-400070</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;