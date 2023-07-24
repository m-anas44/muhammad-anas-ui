import Image from "next/image";
import Link from "next/link";
import image from "public/logo_white.png";
import { ShoppingCart } from "lucide-react";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row gap-y-3 justify-between items-center px-8 lg:px-12 py-5 text-white bg-black">
      <Link href={"/"} className="flex flex-row items-center select-none">
        <Image src={image} alt="logo" className="w-10" />
        <p className="text-3xl font-bold text-white">&nbsp;MARKET</p>
      </Link>
      <ul className="flex gap-x-6 text-lg flex-wrap justify-center">
        <li>
          <Link href={"/categories/female"}>Female</Link>
        </li>
        <li>
          <Link href={"/categories/male"}>Male</Link>
        </li>
        <li>
          <Link href={"/categories/kids"}>Kids</Link>
        </li>
        <li>
          <Link href={"/categories/sports"}>Sports</Link>
        </li>
        <li>
          <Link href={"/products"}>All</Link>
        </li>
      </ul>
      <div className=" hidden lg:flex flex-row items-center">
        <Input className="w-60 rounded-none rounded-l-lg border" placeholder=" Search" />
        <button
          type="button"
          name="Search"
          className="border-white border  p-[7px] border-l-0 bg-white rounded-r-xl">
          <SearchIcon className="text-black " />
        </button>
      </div>
      <div className="w-10 h-10 rounded-full bg-white lg:flex justify-center items-center hidden lg:visible">
        <ShoppingCart className="text-black" />
      </div>
    </div>
  );
};
export default Header;