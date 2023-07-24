"use client";
import { useState } from 'react';
import React from 'react';
const Quantity = () => {
    const [num, setNum] = useState(1)
    return (
        <div className='flex gap-x-4'>
            <div className='mt-0 rounded-md cursor-pointer select-none bg-black text-white flex justify-center font-bold items-center w-6 h-6'
                onClick={
                    () => {
                        setNum(num <= 1 ? 1 : num - 1)
                    }}>
                -
            </div>
            <span>{num}</span>
            <div className='mt-0 rounded-md cursor-pointer select-none bg-black text-white flex justify-center font-bold items-center w-6 h-6'
                onClick={
                    () => {
                        setNum(num + 1)
                    }}>
                +
            </div>
        </div>
    );
};
export default Quantity;