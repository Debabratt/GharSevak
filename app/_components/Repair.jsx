import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Sample data for carousel with 5 images
const repairItems = [
  { title: "AC Repair", imgSrc: "/ac.jpg" },
  { title: "Washing Machine Repair", imgSrc: "/wash.jpg" },
  { title: "Refrigerator Repair", imgSrc: "/ref.jpg" },
  
  { title: "Microwave Repair", imgSrc: "/micro.jpg" },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function Repair() {
  return (
    <div className="bg-gray-100 p-8 mt-5">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 text-left pl-4 lg:pl-16">AC and Appliance Repair</h1>
      </header>

      <main className="px-4 md:px-8 lg:px-16 py-5">
        <Carousel 
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={true}
          arrows={true}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {repairItems.map((item, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-lg mx-2 md:mx-4 h-60">
              {/* Image div */}
              <div className="relative h-full">
                <img 
                  src={item.imgSrc} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-t-xl"
                />
                {/* Title div */}
                <div className="absolute top-0 left-0 w-full p-4 bg-opacity-50 bg-gray-700 rounded-t-xl">
                  <h2 className="text-white text-lg font-semibold">{item.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </main>
    </div>
  );
}

export default Repair;
