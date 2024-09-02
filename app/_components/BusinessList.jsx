import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';

function BusinessList({ businessList, title }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollCarousel = () => {
      if (carouselRef.current) {
        const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        if (carouselRef.current.scrollLeft >= maxScrollLeft) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += 2; // Adjust the speed of auto-scroll here
        }
      }
    };

    const interval = setInterval(scrollCarousel, 30); // Adjust the interval here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mt-5 px-5'>
      <h2 className='font-bold text-[22px] text-center mb-8'>{title}</h2>
      <div className='overflow-hidden rounded-xl shadow-md p-5 bg-white'>
        <div
          ref={carouselRef}
          className='flex space-x-4 overflow-x-auto no-scrollbar rounded-xl'
        >
          {businessList.length > 0 ? businessList.concat(businessList).map((business, index) => (
            <Link
              href={'/details/' + business.id}
              key={index}
              className='min-w-[300px] md:min-w-[350px] lg:min-w-[400px] shadow-md rounded-lg hover:shadow-lg cursor-pointer hover:shadow-primary hover:scale-105 transition-all ease-in-out'
            >
              <Image
                src={business?.images[0].url}
                alt={business.name}
                width={400}
                height={200}
                className='h-[150px] md:h-[200px] object-cover rounded-t-lg'
              />
              <div className='flex flex-col items-baseline p-3 gap-1 bg-white rounded-b-lg'>
                <h2 className='p-1 bg-purple-200 text-gray-500 rounded-full px-2 text-[12px]'>
                  {business.category.name}
                </h2>
                <h2 className='font-bold text-lg'>{business.name}</h2>
                <h2 className='text-gray-800'>{business.contactPerson}</h2>
                <h2 className='text-gray-700 text-sm'>{business.address}</h2>
                <Button className='rounded-lg mt-3 h-9 py-1 px-3 text-sm transition-all duration-150 '>
                  Book Now
                </Button>
              </div>
            </Link>
          )) : (
            Array(8).fill().map((_, index) => (
              <div
                key={index}
                className='min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[300px] bg-slate-200 rounded-lg animate-pulse'
              ></div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default BusinessList;
