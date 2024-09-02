import React from 'react';

const services = [
  { 
    title: "Regular Cleaning", 
    description: "Our regular cleaning service keeps your home spotless on a recurring schedule.",
    imgSrc: "/regular.webp",
    price: "$99.99",
    keyPoints: [
      "Weekly or bi-weekly service",
      "General dusting and vacuuming",
      "Kitchen and bathroom cleaning"
    ]
  },
  { 
    title: "Deep Cleaning", 
    description: "For those times when you need a thorough, top-to-bottom clean.",
    imgSrc: "/deep.webp",
    price: "$199.99",
    keyPoints: [
      "Detailed cleaning of all surfaces",
      "Includes behind appliances",
      "Sanitizing high-touch areas"
    ]
  },
  { 
    title: "Move-In/Move-Out Cleaning", 
    description: "Perfect for getting your new place ready or leaving your old home in great shape.",
    imgSrc: "/lastt.webp",
    price: "$149.99",
    keyPoints: [
      "Comprehensive cleaning of entire property",
      "Removal of old stains and odors",
      "Preparation for inspection"
    ]
  },
  // Add more items if needed
];

function Houseclean() {
  return (
    <div
    
      className="min-h-screen px-4 md:px-12 relative overflow-hidden bg-gray-50"
    >
      <div className="absolute -top-12 -left-12 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#AC7139] blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-0 -right-12 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#749CB6] blur-[80px] md:blur-[100px]" />
      
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">House Cleaning Services</h1>
        <p className="mt-2 text-gray-600">We offer professional house cleaning services tailored to your needs.</p>
      </header>

      <main className="space-y-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse md:space-x-reverse md:space-x-6">
            <div className="md:w-1/2">
              <img src={service.imgSrc} alt={service.title} className="w-full h-48 object-cover rounded-xl" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-xl font-semibold text-gray-700">{service.title}</h2>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <div className="mt-4">
                <p className="text-lg font-semibold text-purple-700">Price: {service.price}</p>
                <ul className="mt-2 text-gray-500 list-disc list-inside">
                  {service.keyPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="text-center mt-8">
        <p className="text-gray-600">Contact us today to schedule your cleaning service!</p>
      </footer>
    </div>
  );
}

export default Houseclean;
