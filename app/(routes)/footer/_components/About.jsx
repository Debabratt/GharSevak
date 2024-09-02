import React from 'react';
import Image from 'next/image'; // For optimized image handling
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function About() {
  return (
    <div className="min-h-screen bg-[#e2edfc] p-6">
      <header className="px-10 py-10">
        <h1 className="text-3xl font-bold mb-4">How We Started</h1>
        <p className="text-lg text-gray-700">At HomeServ, our journey began with a shared vision from a group of dedicated professionals who realized that the home services industry lacked transparency and efficiency. Founded by Debabrat Swain, our mission is simple: to provide exceptional home services while eliminating the middlemen. We believe that homeowners deserve direct access to skilled professionals without the hassle of intermediaries. By leveraging cutting-edge technology and a commitment to quality, we aim to transform the way home services are delivered, ensuring a seamless and trustworthy experience for every customer.

</p>
      </header>
      
      <main className="container mx-auto px-4 py-10">
        <section className="flex flex-col md:flex-row md:space-x-6 mb-12">
          <div className="flex-1 mb-6 md:mb-0">
          <Carousel className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <img 
              src="/sycon.jpg" 
              alt="Image 1" 
              className="w-full h-auto object-cover rounded-lg" 
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <img 
              src="/kamit.jpg" 
              alt="Image 2" 
              className="w-full h-auto object-cover rounded-lg" 
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <img 
              src="/deepakk.jpg" 
              alt="Image 3" 
              className="w-full h-auto object-cover rounded-lg" 
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <img 
              src="/eyi.jpg" 
              alt="Image 4" 
              className="w-full h-auto object-cover rounded-lg" 
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300" />
    </Carousel>
          </div>
          <div className="flex-1 px-5">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">At our company, we pride ourselves on offering unparalleled home services that cater to your every need. Our team is dedicated to delivering top-notch solutions, ensuring your home remains a haven of comfort and efficiency. Each professional in our team brings a wealth of knowledge and a passion for excellence, striving to solve any challenge and exceed your expectations</p>
          </div>
        </section>
        
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <p className="text-gray-600 mb-6">Integrity, excellence, and innovation drive everything we do. We strive to exceed expectations and deliver outstanding value to our customers.</p>
        </section>
      </main>

      <footer className="text-center py-6 bg-gray-200">
        <p className="text-gray-600">&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
