import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Professional Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">C. Eng. Chandika Sirimanne</h3>
            <p className="text-gray-300 mb-4">
              Deputy General Manager at Sri Lanka Telecom (SLT)
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading telecommunications infrastructure development with over 
              two decades of experience in advanced networking technologies 
              and project management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Professional Focus</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• 5G Network Planning & Implementation</li>
              <li>• Telecommunications Project Leadership</li>
              <li>• Network Infrastructure Optimization</li>
              <li>• Strategic Technology Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span className="text-sm">Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">chandika.sirimanne@slt.lk</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Linkedin className="w-4 h-4 mr-3" />
                <span className="text-sm">LinkedIn Profile</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} C. Eng. Chandika Sirimanne. All rights reserved. | 
            Senior Telecommunications Engineering Professional
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;