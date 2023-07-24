import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='flex justify-between flex-col rounded-l-lg lg:flex-row md:flex-row border-t-2 pt-3'>
      <div className='flex md:flex-row lg:flex-row flex-col gap-x-32 gap-y-6 mb-6 text-center justify-center'>
        <span>
          <h2 className='font-bold text-2xl'>Designed By.</h2>
          <p className='font-semibold text-sm text-gray-600'>Muhammad Anas</p>
        </span>
        <span>
          <h2 className='font-bold text-2xl'>Code Source.</h2>
          <p className='font-semibold text-sm text-gray-600 underline'>
            <Link href={'https://github.com/m-anas44'}>https://github.com/m-anas44</Link>
          </p>
        </span>
      </div>
      <div className='justify-center text-center'>
        <h2 className='font-bold text-2xl'>Copyright © 2023</h2>
        <p className='font-semibold text-sm text-gray-600'>Dine Market & Shop.</p>
      </div>
    </div>
  );
};
export default Footer;