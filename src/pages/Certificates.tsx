import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import type { Certificate } from '../types';

const certificates: Certificate[] = [
  {
    id: 1,
    name: 'Advanced React Development',
    issuer: 'Frontend Masters',
    date: 'January 2024',
    link: '#'
  },
  {
    id: 2,
    name: 'Full Stack Development',
    issuer: 'Udacity',
    date: 'December 2023',
    link: '#'
  },
  {
    id: 3,
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: 'November 2023',
    link: '#'
  }
];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h1>
          <p className="text-xl text-gray-600">Professional certifications and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center mb-6">
                <Award className="h-12 w-12 text-indigo-600" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                <a
                  href={cert.link}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                >
                  View Certificate
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;