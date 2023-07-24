import React from 'react';
import Image from 'next/image';
import image from "/public/logo_white.png";
import { Facebook, Twitter, Linkedin } from 'lucide-react';
const FooterContent = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center flex-wrap'>
      {/* left portion */}
      <div className='flex-1 pb-9 text-center lg:text-left flex flex-col justify-center lg:justify-normal'>
        <div className="flex flex-row items-center select-none justify-center lg:justify-normal">
          <Image src={image} alt="logo" className="w-10 bg-black p-1" />
          <p className="text-3xl font-bold">&nbsp;MARKET</p>
        </div>
        <p className='font-bold text-2xl mt-8 font-sans justify-center lg:justify-normal'>Small, artisan label that offers a thoughtfully curated
          collection of high quality everyday essentials made.</p>
        <div className='flex gap-x-5 mt-8 justify-center lg:justify-normal'>
          <Facebook />
          <Twitter />
          <Linkedin />
        </div>
      </div>
      {/* right portion */}
      <div className='flex-1 flex flex-wrap gap-x-8 lg:flex-row justify-center lg:justify-evenly text-center gap-y-8'>
        <ul className='flex flex-col gap-y-3'>
          <li className='text-2xl font-bold'>Company</li>
          <li className='li_style'>About</li>
          <li className='li_style'>Terms of Use</li>
          <li className='li_style'>Privacy Policy</li>
          <li className='li_style'>How it Works</li>
          <li className='li_style'>Contact Us</li>
        </ul>
        <ul className='flex flex-col gap-y-3'>
          <li className='text-2xl font-bold'>Support</li>
          <li className='li_style'>Support Career</li>
          <li className='li_style'>24/7 Service</li>
          <li className='li_style'>Quick Chat</li>
        </ul>
        <ul className='hidden sm:flex md:flex lg:flex flex-col gap-y-3'>
          <li className='text-2xl font-bold'>Company</li>
          <li className='li_style'>Whatsapp</li>
          <li className='li_style'>24/7 Chat</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterContent;