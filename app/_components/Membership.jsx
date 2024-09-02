import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Membership() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='mt-5 w-full  h-auto bg-slate-50'>
      <div className='text-center  '>
        <h5 className='text-xl py-5 md:text-2xl lg:text-3xl font-semibold'>Offers for You</h5>
      </div>
      <div className='flex justify-center py-5'>
        <div className='w-full md:w-[70vw] px-4'>
          <Carousel responsive={responsive}>
            <div className="w-full h-[40vw] md:w-[20vw] md:h-[11vw] bg-[url('https://assets.nobroker.in/hs-new/public/Home-Services/backgroundCar.png')] rounded-2xl p-3 flex flex-col justify-center">
            <Link href={'/vip'}>
              <h2 className='text-[#898989] py-2 md:py-3 font-bold text-base md:text-lg'>VIP MEMBERSHIP</h2>
              <div className=''>
              
                <h1 className='font-bold   md:text-lg lg:text-xxl text-[#FFEAA6]'>
                  Get extra 15% discount
                </h1>
                <h1 className='font-bold  md:text-lg lg:text-xl text-[#FFEAA6]'>
                  on home services
                </h1>
              </div>
              <Button className='mt-4 px-4 ml-3 mb-5  bg-[#615e61] text-[#ecf0f1] rounded-2xl w-max h-auto'>
                <h1 className='font-light'>Know More</h1>
              </Button>
              </Link>
             
            </div>


            <div className='w-full h-[40vw] md:w-[20vw] md:h-[11vw] bg-[#b7e5f4] rounded-2xl'>
              <h2 className='text-[#257C98] px-5 py-2 md:py-3 font-light text-base md:text-lg'>Lowest rates</h2>
              <div className=''>
                <h1 className='font-bold  px-5   md:text-lg lg:text-xxl text-[#257C98]'>
                 Upto 60% off on
                </h1>
                <h1 className='font-bold px-5 md:text-lg lg:text-xl text-[#257C98]'>
                  Home Cleaning
                </h1>
              </div>
              <Link href={'/hclean'}>
              <Button className='mt-4 px-4 ml-3  bg-[#f5f2f5] text-[#46707e] rounded-2xl w-max h-auto'>
                <h1 className='font-light'>Book Now</h1>
              </Button>
              </Link>
              </div>



            <div className='w-full h-[40vw] md:w-[20vw] md:h-[11vw] bg-[#CCEBE5] rounded-2xl'>
              <h2 className='text-[#257C98] px-5 py-2 md:py-3  font-light text-base md:text-lg'>Festive Sale</h2>
              <div className=''>
                <h1 className='font-bold  px-5   md:text-lg lg:text-xxl text-[#257C98]'>
                Flat 25% off on
                </h1>
                <h1 className='font-bold px-5 md:text-lg lg:text-xl text-[#257C98]'>
                Home Painting

                </h1>
              </div>
              <Link href={'/hpaint'}>
              <Button className='mt-4 px-4 ml-3  bg-[#f5f2f5] text-[#46707e] rounded-2xl w-max h-auto'>
                
                <h1 className='font-light'>Explore Now</h1>
               
              </Button>
              </Link>
              </div>

            <div className='w-full h-[40vw] md:w-[20vw] md:h-[11vw] bg-[#F0F6D6] rounded-2xl'>
            <h2 className='text-[#257C98] px-5 py-2 md:py-3  font-light text-base md:text-lg'>House shifting bonanza</h2>
              <div className=''>
                <h1 className='font-bold  px-5   md:text-lg lg:text-xxl text-[#257C98]'>
                Upto 30% off on
                </h1>
                <h1 className='font-bold px-5 md:text-lg lg:text-xl text-[#257C98]'>
                Packers & Movers


                </h1>
              </div>
              <Link href={'/packers'}>
              <Button className='mt-4 px-4 ml-3  bg-[#f5f2f5] text-[#276743] rounded-2xl w-max h-auto'>
                <h1 className='font-light'>Estimate Moving Cost</h1>
              </Button>
              </Link>
            </div>
            <div className='w-full h-[40vw] md:w-[20vw] md:h-[11vw] bg-[#F2EDFC] rounded-2xl'>
            <h2 className='text-[#257C98] px-5 py-2 md:py-3  font-light text-base md:text-lg'>Festive Sale</h2>
              <div className=''>
                <h1 className='font-bold  px-5   md:text-lg lg:text-xxl text-[#55389B]'>
                Flat 25% off on
                </h1>
                <h1 className='font-bold px-5 md:text-lg lg:text-xl text-[#55389B]'>
                Home Painting

                </h1>
              </div>
              
              
              <Button className='mt-4 px-4 ml-3  bg-[#f5f2f5] text-[#55389B] rounded-2xl w-max h-auto'>
                
                <h1 className='font-light'>Explore Now</h1>
               
              </Button>
             
              </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Membership;
