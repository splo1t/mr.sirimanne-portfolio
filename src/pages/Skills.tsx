import React from 'react';
import { Radio, Users, Zap, Settings, Shield, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Leadership",
      icon: <Radio className="w-6 h-6" />,
      skills: [
        "Telecom Network Planning",
        "5G & Advanced Wireless Technologies",
        "Network Architecture Design",
        "Infrastructure Optimization"
      ]
    },
    {
      title: "Project Management",
      icon: <Users className="w-6 h-6" />,
      skills: [
        "Large-Scale Project Leadership",
        "Multi-Million Dollar Budget Planning",
        "Stakeholder Coordination",
        "Risk Management & Mitigation"
      ]
    },
    {
      title: "Advanced Technologies",
      icon: <Zap className="w-6 h-6" />,
      skills: [
        "5G Core Network Implementation",
        "WiMAX & LTE Technologies",
        "RAN Sharing (MOCN)",
        "Network Slicing & Edge Computing"
      ]
    },
    {
      title: "Operations & Strategy",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        "Network Operations Management",
        "Vendor Management & Negotiations",
        "Strategic Technology Planning",
        "Performance Optimization"
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        "Network Security Implementation",
        "Regulatory Compliance",
        "Risk Assessment & Management",
        "Security Architecture Design"
      ]
    },
    {
      title: "Leadership & Innovation",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: [
        "Team Leadership & Development",
        "Innovation Strategy",
        "Change Management",
        "International Collaboration"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Core Competencies & Skills
          </h1>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Over two decades of experience in telecommunications engineering, project management, 
            and strategic technology leadership across multiple domains and international markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-700 text-white rounded-lg mr-4">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Professional Highlights */}
        <div className="mt-16 bg-blue-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Professional Highlights</h2>
            <p className="text-blue-100">
              Key achievements and metrics that define my career journey
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-100 text-sm">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100 text-sm">Major Projects Led</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100 text-sm">International Trainings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100 text-sm">Technology Generations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;