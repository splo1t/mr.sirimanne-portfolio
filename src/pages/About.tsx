import React from 'react';
import { Target, Users, Briefcase, Calculator } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Project Leader",
      description: "Leading complex telecommunications infrastructure projects across multiple domains"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Senior Project Consultant",
      description: "Providing strategic guidance on advanced networking technologies and implementations"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Project Programmer",
      description: "Architecting and programming critical telecommunications systems and solutions"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Budget Planner",
      description: "Managing multi-million dollar project budgets with precision and accountability"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Philosophy */}
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Philosophy
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Throughout my career in telecommunications engineering, I have been driven by a 
                passion for innovation and excellence in delivering critical infrastructure projects. 
                My approach combines technical expertise with strategic thinking, ensuring that every 
                project not only meets immediate objectives but also positions the organization for 
                future growth.
              </p>
              <p>
                I believe in the power of collaboration and continuous learning. The rapidly evolving 
                telecommunications landscape requires professionals who can adapt, lead teams effectively, 
                and maintain the highest standards of technical and ethical conduct. My international 
                training experiences have broadened my perspective and enhanced my ability to work in 
                diverse, multicultural environments.
              </p>
              <p>
                With over two decades of experience, I remain committed to pushing the boundaries of 
                what's possible in telecommunications, whether it's implementing cutting-edge 5G networks 
                or optimizing existing infrastructure for maximum efficiency and reliability.
              </p>
            </div>
          </div>

          {/* Career Highlights */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Career Highlights
            </h2>
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg hover:bg-purple-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;