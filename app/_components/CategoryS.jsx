import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

function CategoryS({ categories }) {
  return (
    <div    className=' items-center flex flex-col gap-4 bg-[#F7F7F8]'>
      <h2 className='mt-20 font-semibold text-2xl tracking-wide'>
        Search <span className='text-primary'>Services</span>
      </h2>
      <h2 className='text-gray-500'>Explore Pros and Book Services Quickly</h2>
      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
      <Input placeholder='Search'
            className="rounded-full md:w-[300px]" />
            <Button className="rounded-full h-[46px] ">
                <Search className='h-4 w-4'/>
            </Button>
      </div>
      {/* categoris */}
      <div className='mx-4 md:mx-22 lg:mx-52  grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {categories.length > 0 ? (categories.map((category, index) => (
            <Link
            
              href={`/search/${category.name}`}
              key={index} className={'flex flex-col items-center justify-center gap-2 bg-red-50 p-1 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out'} >
              <Image
                src={category.icon.url}
                alt='icon'
                width={35}
                height={35}



              />

              <h2 className='text-blue-600'>{category.name}</h2>
            </Link>
          ))
        ) : (
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className='h-[120px] w-full bg-green-200 animate-pulse rounded-lg'
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CategoryS;
