import React from 'react';

function Services() {
  return (
    <div className="mt-5 w-full bg-[#f2f4f5]">
      <div className="py-5 px-4">
        <h2 className="font-semibold text-xl px-10 ">Our Services</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-10 py-8">
        {[
          'Home Cleaning',
          'Painting',
          'Plumbing',
          'Electrician',
          'AC Repair',
          'Carpet Cleaning',
          'Window Washing',
          'Gardening',
          'Pest Control',
          'Gutter Cleaning',
          'Appliance Repair',
          'Furniture Assembly',
          'Roof Repair',
          'Drywall Installation',
          'Handyman Services',
          'Power Washing',
          'Moving Services',
          'HVAC Maintenance',
          'Locksmith',
          'Basement Finishing',
          'Kitchen Remodeling',
        ].map((service, index) => (
          <div
            key={index}
            className="bg-gray-200 text-black p-2 rounded-xl shadow-md max-w-[150px] text-center flex-grow flex-shrink-0 min-h-[30px]"
          >
            <h3 className="font-light text-xs md:text-sm">{service}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
