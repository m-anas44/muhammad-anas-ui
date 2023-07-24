import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { ArrowBigRight } from 'lucide-react';
const InputSection = () => {
  return (
    <div className='w-full text-center px-12'>
      <div className='flex flex-row justify-center'>
        <p className='absolute text-6xl lg:text-9xl md:text-9xl pt-24 opacity-25 font-bold'> Newsletter</p>
      </div>
      <div className='flex flex-col justify-center text-center mt-24 relative'>
        <h2 className='text-3xl font-bold'>Subscribe Our Newsletter</h2>
        <p className='text-sm mt-7'>Get the latest information and promo offers directly</p>
        <div className='w-full flex justify-center mt-14'>
          <Input type='email' placeholder='Input Your Email' name='email' className='lg:w-3/12 border-gray' />
          <Button className="border border-black bg-black text-white hover:text-black hover:bg-slate-50 lg:text-base text-xs">
            <p>Get Started</p>
            <ArrowBigRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputSection;