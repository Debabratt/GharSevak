import React from 'react';

const services = [
  { 
    title: "Residential Moving", 
    description: "Efficient and reliable moving services for your home, ensuring a smooth transition to your new residence.",
    imgSrc: "/res.jpg",
    price: "$399.99",
    keyPoints: [
      "Careful packing and handling",
      "Timely delivery",
      "Flexible scheduling"
    ]
  },
  { 
    title: "Commercial Moving", 
    description: "Professional moving solutions for businesses, minimizing downtime and ensuring a seamless office relocation.",
    imgSrc: "/delivery-man.webp",
    price: "$799.99",
    keyPoints: [
      "Comprehensive office moving plans",
      "Specialized equipment for large items",
      "Customized moving strategies"
    ]
  },
  { 
    title: "Packing Services", 
    description: "Expert packing services to ensure your belongings are securely packed and ready for transport.",
    imgSrc: "/packers.webp",
    price: "$149.99",
    keyPoints: [
      "High-quality packing materials",
      "Expert packing techniques",
      "Unpacking and setup services"
    ]
  },
  // Add more items if needed
];

function Pack() {
  return (
    <div className="flex flex-col min-h-screen px-4 md:px-12 relative overflow-hidden bg-gray-50">
      <div className="absolute -top-12 -left-12 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#AC7139] blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-0 -right-12 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#749CB6] blur-[80px] md:blur-[100px]" />
      
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">Packers and Movers Services</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">Discover our comprehensive moving and packing services designed to make your relocation hassle-free.</p>
      </header>

      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 md:p-8 rounded-3xl shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
            <div className="md:w-full">
              <img src={service.imgSrc} alt={service.title} className="w-full h-30 md:h-64 object-cover rounded-2xl" />
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <div className="mt-6">
                <p className="text-xl font-semibold text-green-600">Price: {service.price}</p>
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

      {/* New Section: Why NoBroker's Packers and Movers? */}
      <div className="mt-16 px-8 py-12 bg-white rounded-3xl shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">Why GharSevak Packers and Movers?</h2>
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="w-10 h-10 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">1</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Lowest Price Guarantee</h3>
              <p className="mt-2 text-gray-600">Moving at a price you can afford - we’ll match any competitor’s quote.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 h-10 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">2</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Best Quality Service</h3>
              <p className="mt-2 text-gray-600">Safe and reliable packaging and moving services.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 h-10 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">3</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Reschedule Your Shifting Anytime</h3>
              <p className="mt-2 text-gray-600">Change your shifting date as per your convenience.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 h-10 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">4</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Support Assistance</h3>
              <p className="mt-2 text-gray-600">Dedicated support assistance for quick query resolution.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 h-10 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">5</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Professional Labor</h3>
              <p className="mt-2 text-gray-600">Expertly packing and moving your belongings with care.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-12">
        <p className="text-gray-700 text-lg">Get in touch with us today to schedule your move or packing service!</p>
      </footer>
    </div>
  );
}

export default Pack;
