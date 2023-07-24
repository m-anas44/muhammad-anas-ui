import { Button } from "@/components/ui/button";
import { Products } from "@/utils/mock";
import Quantity from "@/views/Quantity";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const getProductDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

const sizes = ["XS", "SM", "MD", "LG", "XL"];
const Page = ({ params }: { params: { id: string } }) => {
  const result = getProductDetail(params.id);
  return (
    <div className="flex justify-between flex-wrap flex-col lg:flex-row gap-y-5 items-center">
      {result.map((product) => (
        <div
          key={product.id}
          className="flex justify-between items-center gap-x-5 lg:flex-row flex-wrap"
        >
          {/* Left Side */}
          <div>
            <Image src={product.image} alt={product.name} />
          </div>
          {/* Right Side */}
          <div className="pl-2 lg:border-l border-hidden">
            <div>
              <h1 className="text-2xl font-sans font-bold">{product.name}</h1>
              <h2 className="text-base font-semibold font-sans text-gray-500">
                {product.tagline}
              </h2>
            </div>
            <div>
              <h3 className="text-sm mt-8 font-bold">SELECT SIZE</h3>
              <div className="flex gap-x-4">
                {sizes.map((item) => (
                  <div key={item} className="border border-black hover:bg-black hover:text-white p-1 mt-5 hover:shadow-md hover:scale-110 duration-300 text-xs 
                  cursor-pointer select-none flex items-center">
                    <span className="text-[11px] font-bold">{item}</span>
                  </div>
                ))}
              </div>
              {/* Quantities */}
              <div className="flex mt-6 gap-x-7 items-center">
                <h3 className="text-md font-bold">Quantity</h3>
                <Quantity />
              </div>
              {/* Button Add to cart and price */}
              <div className="flex items-center mt-6 gap-x-4 flex-wrap gap-y-4">
                <Button className="border border-black bg-black text-white hover:text-black hover:bg-slate-50">
                  <ShoppingCart />
                  &nbsp;&nbsp;
                  <p>Add To Cart</p>
                </Button>
                <h2 className="text-2xl font-bold">
                  ${product.price.toFixed(1)}
                  <sup className="text-xs font-normal">-5%</sup>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Page;
