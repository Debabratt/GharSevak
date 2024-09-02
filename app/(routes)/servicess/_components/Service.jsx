import React from "react";

// Sample images for demonstration
const serviceImages = {
  'AC Repair': '/ac.jpg',
  'House Cleaning': '/deep.webp',
  'Electrical Services': '/ref.jpg',
  'Painting': '/exp.jpg'
};

const servicesList = [
  { id: 1, title: 'AC Repair', description: 'Expert AC repair services to keep you cool and comfortable.' },
  { id: 2, title: 'House Cleaning', description: 'Thorough cleaning services to keep your home spotless.' },
  { id: 3, title: 'Electrical Services', description: 'Professional electrical services for all your needs.' },
  { id: 4, title: 'Painting', description: 'High-quality painting services to refresh your space.' },
  // Add more services as needed
];

const Service = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-5 py-10">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Home Services</h1>
        <p className="text-lg text-gray-600 mb-8">
          At <strong>Gharsevak</strong>, we take pride in offering top-notch home services tailored to meet all your needs. 
          Our team of skilled professionals is dedicated to providing high-quality, reliable, and efficient services 
          to ensure your home is always in its best shape. Whether you need expert AC repair, thorough house cleaning, 
          professional electrical services, or refreshing painting, Gharsevak is here to help. Experience exceptional 
          service and peace of mind with our trusted team.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          {servicesList.map(service => (
            <div key={service.id} className="bg-gray-200 rounded-lg p-6 w-full sm:w-80 text-center shadow-md">
              <img 
                src={serviceImages[service.title]} 
                alt={service.title} 
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
