"use client"
import React, { useState } from 'react';

const benefits = [
  {
    title: "Exclusive Access",
    description: "Unlock early access to new features and content before anyone else.",
    imgSrc: "/un.webp",
    price: "$49.99/month",
  },
  {
    title: "Premium Support",
    description: "Enjoy priority support from our dedicated team for quick resolutions.",
    imgSrc: "/supp.jpg",
    price: "$29.99/month",
  },
  {
    title: "Special Discounts",
    description: "Receive special discounts and offers only available to VIP members.",
    imgSrc: "/off.webp",
    price: "$19.99/month",
  },
];

function Vippage() {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const handlePaymentClick = (benefit) => {
    setSelectedBenefit(benefit);
    setShowPayment(true);
  };

  return (
    <div
    
      className="min-h-screen px-4 md:px-12 relative overflow-hidden bg-gray-50"
    >
      <div className="absolute -top-12 -left-12 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#AC7139] blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-0 -right-12 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#749CB6] blur-[80px] md:blur-[100px]" />
      
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Welcome to Vippage!</h1>
        <p className="mt-4 text-md md:text-lg text-gray-700">
          Discover the exclusive benefits and features of becoming a VIP member.
        </p>
      </div>

      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={benefit.imgSrc} alt={benefit.title} className="w-full h-48 object-cover" />
            <div className="p-4 sm:p-6 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{benefit.title}</h2>
              <p className="mt-2 text-gray-600">{benefit.description}</p>
              <div className="mt-4">
                <p className="text-lg font-semibold text-purple-700">{benefit.price}</p>
                <button
                  onClick={() => handlePaymentClick(benefit)}
                  className="mt-2 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-500"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPayment && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 px-4 sm:px-0">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-full sm:max-w-md w-full">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Complete Your Purchase</h2>
            <p className="text-gray-700 mb-4">
              You have selected the <span className="font-bold">{selectedBenefit.title}</span> plan for <span className="font-bold">{selectedBenefit.price}</span>.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowPayment(false)}
                className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-500"
              >
                Proceed to Payment
              </button>
              <button
                onClick={() => setShowPayment(false)}
                className="ml-2 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Vippage;
