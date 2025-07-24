import React from 'react';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                C. Eng. Chandika Sirimanne
              </h1>
              <div className="space-y-2">
                <p className="text-xl text-blue-700 font-semibold">
                  Deputy General Manager – Sri Lanka Telecom (SLT)
                </p>
                <p className="text-lg text-gray-700">
                  Senior Project Manager – Telecommunication Engineering
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              I'm a multi-skilled, organized, and experienced Telecommunication Engineering professional, 
              passionate about delivering large-scale, cutting-edge infrastructure projects. With a career 
              spanning over two decades, I thrive in challenging, dynamic environments and continue to 
              seek growth through innovation and global experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-md">
                <Download className="mr-2" size={20} />
                Download CV
              </button>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-200"
              >
                <Mail className="mr-2" size={20} />
                Let's Connect
              </Link>
            </div>

            {/* Quick Navigation */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore My Portfolio</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  to="/experience" 
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
                >
                  <span className="text-gray-700 font-medium">25+ Years Experience</span>
                  <ArrowRight className="w-4 h-4 text-blue-700" />
                </Link>
                <Link 
                  to="/skills" 
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
                >
                  <span className="text-gray-700 font-medium">Core Skills</span>
                  <ArrowRight className="w-4 h-4 text-blue-700" />
                </Link>
              </div>
            </div>
          </div>

          {/* Professional Image Placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">CS</span>
                </div>
                <p className="text-gray-500 text-sm">Professional Image</p>
                <p className="text-gray-400 text-xs mt-1">Placeholder</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-100 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;