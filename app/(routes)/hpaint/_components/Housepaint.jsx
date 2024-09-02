import React from 'react';

const services = [
  { 
    title: "Interior Painting", 
    description: "Transform your indoor spaces with our professional interior painting services.",
    imgSrc: "/intp.jpg",
    price: "$199.99",
    keyPoints: [
      "High-quality paints and finishes",
      "Detail-oriented preparation",
      "Expert color consultation"
    ]
  },
  { 
    title: "Exterior Painting", 
    description: "Enhance your home's curb appeal with our exterior painting solutions.",
    imgSrc: "/exp.jpg",
    price: "$299.99",
    keyPoints: [
      "Durable and weather-resistant paints",
      "Thorough surface preparation",
      "Comprehensive warranty"
    ]
  },
  { 
    title: "Cabinet Painting", 
    description: "Refresh your cabinets with a new look and feel without the cost of replacement.",
    imgSrc: "/cab.jpg",
    price: "$399.99",
    keyPoints: [
      "Precision spraying techniques",
      "Custom color matching",
      "Long-lasting finishes"
    ]
  },
  // Add more items if needed
];

function Housepaint() {
  return (
<div
    
    className="min-h-screen px-4 md:px-12 relative overflow-hidden bg-gray-50"
  >
    <div className="absolute -top-12 -left-12 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#AC7139] blur-[80px] md:blur-[120px]" />
    <div className="absolute bottom-0 -right-12 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#749CB6] blur-[80px] md:blur-[100px]" />
    
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">House Painting Services</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">Explore our range of professional painting services to enhance your home.</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 md:p-8 rounded-3xl shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
            <div className="md:w-full">
              <img src={service.imgSrc} alt={service.title} className="w-full h-48 md:h-64 object-cover rounded-2xl" />
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <div className="mt-6">
                <p className="text-xl font-semibold text-indigo-600">Price: {service.price}</p>
                <ul className="mt-4 text-gray-500 list-disc list-inside">
                  {service.keyPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="text-center mt-12">
        <p className="text-gray-700 text-lg">Contact us today to get a free quote for your painting project!</p>
      </footer>
    </div>
  );
}

export default Housepaint;
