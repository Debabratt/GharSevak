import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#003359] text-white py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex-shrink-0 md:w-[20%] md:mr-8 mb-6">
          {/* Add your images here */}
          <img
            src="/foott.jpg"
            alt="Footer Image"
            className="w-full h-auto object-cover rounded-xl "
          />
        </div>
        <div className="flex-1 md:w-1/4  ">
          <Link href={'/footer'}>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
          </Link>
          <ul className="list-none space-y-1">
            <li><a href="/footer" className="hover:underline">Our Story</a></li>
            <li><a href="/footer" className="hover:underline">Our Team</a></li>
          </ul>
        </div>
        <div className="flex-1 md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="list-none space-y-1">
            <li>
              <a className="flex items-center hover:underline">
                <FontAwesomeIcon icon={faLocationPin} className="mr-2" />
                <span>Bhubaneswar, Odisha</span>
              </a>
            </li>
            <li>
              <a href="mailto:gharsevak@gmail.com" className="flex items-center hover:underline">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                gharsevak@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" className="flex items-center hover:underline">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +1 234 567 890
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">FAQs</h3>
          <ul className="list-none space-y-1">
            <li><a className="hover:underline">General Questions</a></li>
            <li><a className="hover:underline">Order Support</a></li>
            <li><a className="hover:underline">Shipping Info</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} GharSevak. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
