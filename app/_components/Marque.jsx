import { motion } from 'framer-motion';
import React from 'react';

function Marque() {
  const text = "Your Home! Our Passion";

  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed=".1" 
      className='w-full max-w-full py-2 bg-gray-100'
    >
      <div className='border-t-2 border-b-2 border-slate-50 flex overflow-hidden whitespace-nowrap px-4 sm:px-6'>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className='flex'
          style={{ whiteSpace: 'nowrap' }}
        >
          {[...Array(20)].map((_, i) => (
            <h1
              key={i}
              className='text-xs sm:text-sm md:text-lg lg:text-xl leading-none font-semibold uppercase py-5 px-4 sm:px-6 text-[#1D2436]'
            >
              {text}
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Marque;
