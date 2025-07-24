import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Award, GraduationCap } from 'lucide-react';

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder certificates data
  const certificates = [
    {
      id: 1,
      title: "5G Network Planning Certification",
      issuer: "Ericsson Academy",
      year: "2023",
      type: "Professional",
      image: "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Project Management Professional (PMP)",
      issuer: "Project Management Institute",
      year: "2020",
      type: "Professional",
      image: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Master of Engineering in Telecommunications",
      issuer: "University of Moratuwa",
      year: "2005",
      type: "Academic",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Bachelor of Engineering in Electronics",
      issuer: "University of Moratuwa",
      year: "1999",
      type: "Academic",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Network Security Specialist",
      issuer: "Cisco Systems",
      year: "2018",
      type: "Professional",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "Advanced Wireless Communications",
      issuer: "Nokia Solutions",
      year: "2016",
      type: "Professional",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const professionalCerts = certificates.filter(cert => cert.type === "Professional");
  const academicCerts = certificates.filter(cert => cert.type === "Academic");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  const openFullscreen = (index: number) => {
    setSelectedImage(index);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Awards & Certifications
          </h1>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive collection of professional certifications and academic qualifications 
            earned throughout my telecommunications engineering career.
          </p>
        </div>

        {/* Certificate Slider */}
        <div className="mb-16">
          <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {certificates.map((cert, index) => (
                <div key={cert.id} className="min-w-full relative">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden cursor-pointer"
                       onClick={() => openFullscreen(index)}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold">Click to view fullscreen</span>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex items-center mb-2">
                      {cert.type === "Professional" ? (
                        <Award className="w-5 h-5 text-blue-700 mr-2" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-green-700 mr-2" />
                      )}
                      <span className="text-sm font-medium text-gray-500">{cert.type} • {cert.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-gray-600">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-blue-700' : 'bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Categorized Certificates */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Certifications */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Award className="w-6 h-6 text-blue-700 mr-3" />
              Professional Certifications
            </h2>
            <div className="space-y-4">
              {professionalCerts.map((cert) => (
                <div key={cert.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                  <h3 className="font-semibold text-gray-900">{cert.title}</h3>
                  <p className="text-gray-600 text-sm">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Qualifications */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 text-green-700 mr-3" />
              Academic Qualifications
            </h2>
            <div className="space-y-4">
              {academicCerts.map((cert) => (
                <div key={cert.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                  <h3 className="font-semibold text-gray-900">{cert.title}</h3>
                  <p className="text-gray-600 text-sm">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fullscreen Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={certificates[selectedImage].image}
                alt={certificates[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-1">{certificates[selectedImage].title}</h4>
                <p className="text-sm">{certificates[selectedImage].issuer} • {certificates[selectedImage].year}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Awards;