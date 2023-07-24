import Image from 'next/image';
import React from 'react';
import leftImg from "/public/girl.webp";
import rightImg1 from "/public/event2.webp";
import rightImg2 from "/public/event3.webp"
const Promotions = () => {
  return (
    <div>
      <div className="text-center py-5 pb-10">
        <h3 className="text-sm font-bold">PROMOTIONS</h3>
        <h1 className="font-bold text-[24px] text-blue-800">Our Promotions Events</h1>
      </div>
      {/* Promotion section */}
      <div className='flex flex-col md:flex-row lg:flex-row items-center gap-3'>
        <div className='flex-1 flex flex-col gap-y-3'>
          <div className='bg-black flex flex-col lg:flex-row text-center items-center justify-evenly'>
            <span className='text-white'>
              <h2 className='text-3xl font-bold '>GET UP TO 60%</h2>
              <h4 className='text-md font-semibold'>For the summer season</h4>
            </span>
            <span>
              <Image src={leftImg} alt='left image' />
            </span>
          </div>
          <div className='bg-gray-300 text-center p-9 flex flex-col gap-y-3'>
            <h2 className='text-3xl font-bold '>GET 30% OFF</h2>
            <h4 className='text-sm font-semibold'>Use Promo Code</h4>
            <span className='bg-slate-500 font-bold text-xl p-2 rounded-xl'>DINE WEEK & SALE
            </span>
          </div>
        </div>
        <div className='flex-1 flex flex-col md:flex-row lg:flex-row gap-x-3 gap-y-3'>
          <div className='bg-orange-300'>
            <div className='text-center bg-black text-white bg-opacity-60'>
              <p className='font-bold text-xl'>Flex T-Shirt</p>
              <p className='text-sm'><del>$50</del>&nbsp;&nbsp; $30</p>
            </div>
            <Image src={rightImg1} alt='right image 1' />
          </div>
          <div className='bg-slate-400 flex flex-col justify-between'>
            <div className='text-center bg-black text-white bg-opacity-60'>
              <p className='font-bold text-xl'>Flex SweetShirt</p>
              <p className='text-sm'><del>$50</del>&nbsp;&nbsp; $30</p>
            </div>
            <Image src={rightImg2} alt='right image 2' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;