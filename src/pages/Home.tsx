import React from 'react';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/90 to-slate-900/90"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 relative z-10" data-aos="fade-right">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                C. Eng. Chandika Sirimanne
              </h1>
              <div className="space-y-2">
                <p className="text-xl text-purple-300 font-semibold">
                  Deputy General Manager – Sri Lanka Telecom (SLT)
                </p>
                <p className="text-lg text-gray-300">
                  Senior Project Manager – Telecommunication Engineering
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              I'm a multi-skilled, organized, and experienced Telecommunication Engineering professional, 
              passionate about delivering large-scale, cutting-edge infrastructure projects. With a career 
              spanning over two decades, I thrive in challenging, dynamic environments and continue to 
              seek growth through innovation and global experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Download className="mr-2" size={20} />
                Download CV
              </button>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail className="mr-2" size={20} />
                Let's Connect
              </Link>
            </div>

            {/* Quick Navigation */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Explore My Portfolio</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  to="/projects" 
                  className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:-translate-y-1"
                >
                  <span className="text-white font-medium">25+ Years Experience</span>
                  <ArrowRight className="w-4 h-4 text-purple-300" />
                </Link>
                <Link 
                  to="/awards" 
                  className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:-translate-y-1"
                >
                  <span className="text-white font-medium">Awards & Certifications</span>
                  <ArrowRight className="w-4 h-4 text-purple-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Professional Image Placeholder */}
          <div className="relative z-10" data-aos="fade-left">
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/assets/profile-pic.jpg"
                  alt="C. Eng. Chandika Sirimanne"
                  className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"
                  style={{ width: '320px', height: '320px' }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300"></div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400/60 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-400/40 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;