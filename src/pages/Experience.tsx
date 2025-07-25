import React from 'react';
import { Calendar, MapPin, Award, Building } from 'lucide-react';

const Experience = () => {
  const keyProjects = [
    {
      title: "Development of TDM development projects",
      period: "2001-2002",
      description: "Pioneer development of Time Division Multiplexing systems for enhanced telecommunications capacity at Sri Lanka Telecom",
      technologies: ["TDM", "Digital Communications", "System Architecture"]
    },
    {
      title: "IP & Data Networking development projects in Sri Lanka Telecom",
      period: "2002-2005",
      description: "Led the transformation to IP-based networking infrastructure, establishing the foundation for modern data communications",
      technologies: ["IP Networking", "Data Communications", "Network Infrastructure"]
    },
    {
      title: "Development of Metro Ethernet development Projects",
      period: "2005-2007",
      description: "Spearheaded Metro Ethernet network deployment for high-speed enterprise connectivity across metropolitan areas",
      technologies: ["Metro Ethernet", "Enterprise Networking", "High-Speed Connectivity"]
    },
    {
      title: "Planning of IP DSLAM development in Sri Lanka Telecom",
      period: "2008-2010",
      description: "Strategic planning and implementation of IP-based Digital Subscriber Line Access Multiplexers for broadband services",
      technologies: ["IP DSLAM", "Broadband Access", "Network Planning"]
    },
    {
      title: "Development of WiMAX e network for Sri Lanka Telecom",
      period: "2011-2013",
      description: "Project leader for nationwide WiMAX network deployment, enabling high-speed internet access across Sri Lanka",
      technologies: ["WiMAX", "Wireless Broadband", "Network Rollout"]
    },
    {
      title: "Development of 4G LTE (TDD, B38) network in Sri Lanka Telecom",
      period: "2014-2018",
      description: "Led the implementation of 4G LTE TDD technology on Band 38, revolutionizing mobile broadband services",
      technologies: ["4G LTE", "TDD Technology", "Band 38", "Mobile Broadband"]
    },
    {
      title: "Expansion of 4.5G LTE (TDD, B41) network in Sri Lanka Telecom",
      period: "2019-2021",
      description: "Managed the expansion of advanced 4.5G LTE network on Band 41, enhancing network capacity and performance",
      technologies: ["4.5G LTE", "TDD Technology", "Band 41", "Network Expansion"]
    },
    {
      title: "Development of RAN sharing network (MOCN) in Sri Lanka Telecom",
      period: "2022 onwards",
      description: "Spearheading Multi-Operator Core Network sharing initiatives to optimize resource utilization and reduce operational costs",
      technologies: ["MOCN", "RAN Sharing", "Network Optimization", "Resource Management"]
    },
    {
      title: "Initial planning of 5G network in Sri Lanka Telecom",
      period: "2024 onwards",
      description: "Leading the strategic planning and implementation roadmap for Sri Lanka's next-generation 5G network infrastructure",
      technologies: ["5G Core", "Network Planning", "Next-Gen Infrastructure", "Strategic Implementation"]
    }
  ];

  const internationalTraining = [
    {
      organization: "Ericsson",
      country: "Philippines",
      topic: "Telecom Field Service",
      period: "1-Mar-1999 to 27-Mar-1999"
    },
    {
      organization: "Shearwater",
      country: "United Kingdom",
      topic: "IP And Data Networking",
      period: "2-Dec-2001 to 16-Dec-2001"
    },
    {
      organization: "Tellabs",
      country: "Finland",
      topic: "Manage Access Network",
      period: "30-May-2003 to 13-Jun-2003"
    },
    {
      organization: "Cisco",
      country: "Finland",
      topic: "Manage Access Network",
      period: "30-May-2003 to 13-Jun-2003"
    },
    {
      organization: "4RF",
      country: "New Zealand",
      topic: "Data Radios",
      period: "27-Nov-2005 to 3-Dec-2005"
    },
    {
      organization: "Alcatel",
      country: "France",
      topic: "L2 Transport Networking",
      period: "5-Mar-2006 to 18-Mar-2006"
    },
    {
      organization: "Cisco",
      country: "India",
      topic: "CCNP-II",
      period: "10-Feb-2007 to 26-Feb-2007"
    },
    {
      organization: "Tellabs",
      country: "Denmark",
      topic: "SDH Transport Network",
      period: "26-Nov-2008 to 21-Dec-2008"
    },
    {
      organization: "Cisco",
      country: "Singapore",
      topic: "VoIP Security",
      period: "18-May-2009 to 6-Jun-2009"
    },
    {
      organization: "Huawei",
      country: "China",
      topic: "WiMAX-E Network",
      period: "21-Sep-2010 to 17-Oct-2010"
    },
    {
      organization: "Samsung",
      country: "South Korea",
      topic: "4G LTE Fundamentals",
      period: "2-May-2015 to 17-May-2015"
    },
    {
      organization: "ZTE",
      country: "China",
      topic: "4G LTE Radio Planning",
      period: "23-Jan-2016 to 1-Feb-2016"
    },
    {
      organization: "Alcatel",
      country: "France",
      topic: "4G LTE Network Operation",
      period: "24-Dec-2017 to 28-Jan-2018"
    },
    {
      organization: "Nokia",
      country: "Australia",
      topic: "OSS Platform",
      period: "2-Apr-2019 to 9-Apr-2019"
    },
    {
      organization: "ZTE",
      country: "China",
      topic: "ePC (PGW) Operation",
      period: "1-Aug-2020 to 7-Aug-2020"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Key Projects & Career Timeline (1999–2024)
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of major telecommunications infrastructure projects and 
            international training experiences spanning over two decades of professional excellence.
          </p>
        </div>

        {/* Key Projects */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8" data-aos="fade-up">
            <Building className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Major Project Leadership at Sri Lanka Telecom
            </h2>
          </div>
          <div className="space-y-8">
            {keyProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 lg:mb-0">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-purple-600 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.period}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-sm rounded-full hover:from-purple-200 hover:to-blue-200 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Training */}
        <div>
          <div className="flex items-center justify-center mb-8" data-aos="fade-up">
            <Award className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">
              International Training & Knowledge Development
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalTraining.map((training, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-purple-600">{training.period.split(' to ')[0].split('-')[2] || 'Training'}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {training.organization}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{training.country}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  {training.topic}
                </p>
                <p className="text-xs text-gray-500">
                  {training.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;