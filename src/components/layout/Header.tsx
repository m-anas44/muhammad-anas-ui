"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/logo_white.png'
import { ShoppingCart, Search, MenuIcon, XIcon } from "lucide-react";
import { Input } from '../ui/input';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [inputVal, setInputVal] = useState("")
  return (
    <nav className='flex justify-between items-center flex-wrap text-white bg-gray-900 shadow-lg sticky top-0 
    z-50 px-8 lg:px-12 py-4'>

      <Link href={"/"} className="flex flex-row items-center select-none lg:mr-60">
        <Image src={logo} alt="logo" className="w-10" />
        <p className="text-3xl font-bold text-white">&nbsp;MARKET</p>
      </Link>
      <div className='block lg:hidden'>
        <button type="button" onClick={() => { setIsOpen(!isOpen) }} className='border p-1 rounded-lg border-gray-300'>
          <MenuIcon className={`fill-current ${isOpen ? "hidden" : "block"}`} />
          <XIcon className={`fill-current ${isOpen ? "block" : "hidden"}`} />
        </button>
      </div>
      {/* LINKS to show and hide font-bold text-red-500  */}
      <div className={`block flex-grow justify-between lg:flex lg:items-center 
      lg:w-auto w-full text-white
       ${isOpen ? "flex flex-col-reverse bg-gray-700 opacity-80 rounded-lg mt-5" : "hidden"}`}>

        <ul className="text-sm ml-3 lg:ml-0 lg:flex gap-x-4 gap-y-3">
          <li>
            <Link href={"/categories/female"} className='block lg:inline-block text-lg p-3'>Female</Link>
          </li>
          <li>
            <Link href={"/categories/male"} className='block lg:inline-block text-lg p-3'>Male</Link>
          </li>
          <li>
            <Link href={"/categories/kids"} className='block lg:inline-block text-lg p-3'>Kids</Link>
          </li>
          <li>
            <Link href={"/categories/sports"} className='block lg:inline-block text-lg p-3'>Sports</Link>
          </li>
          <li>
            <Link href={"/products"} className='block lg:inline-block text-lg p-3'>All</Link>
          </li>
        </ul>

        {/* search baar to show */}

        <div className={`lg:flex gap-x-3 ${isOpen ? "flex p-[12px] justify-between w-full" : "hidden"}`}>
          <div className="flex flex-row items-center w-full">
            <Input className="w-full border-gray-400 border-[1px] shadow-none rounded-l-full text-gray-400 lg:border p-[6px]"
              placeholder=" Search"
              onChange={(e) => setInputVal(e.target.value)} />
            <Link href={`/categories/${inputVal}`}>
              <button
                type="button"
                name="Search"
                className="border-gray-400 border-2 p-[7px] border-l-0 rounded-r-full">
                <Search className="text-gray-400" />
              </button>
            </Link>
          </div>
          <div className="w-16 h-10 flex rounded-full bg-white justify-center items-center">
            <ShoppingCart className="text-gray-900 text-2xl" />
          </div>
        </div>


      </div>
    </nav>
  );
};
export default Header;