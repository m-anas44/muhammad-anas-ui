import { Button } from "@/components/ui/button";
import Quantity from "@/views/Quantity";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { getCurrentProduct } from "../../../../sanity/lib/query";


const sizes = ["XS", "SM", "MD", "LG", "XL"];
const Page = async ({ params }: { params: { id: number } }) => {
  const product = await getCurrentProduct(params.id);
  console.log("\n\n\n\n\n")
  console.log(product)
  return (
    <div className="flex justify-between flex-wrap flex-col lg:flex-row gap-y-5 items-center p-14">

      <div className="flex justify-between items-center gap-x-5 lg:flex-row flex-wrap">
        {/* Left Side */}
        <div>
          {product.image && (
            <Image src={product.image} alt={product.name} width={1280} height={1080} className="w-[280px]" />
          )}
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
              {
                sizes.map((item) => (
                  <div key={item} className="border border-black hover:bg-black hover:text-white p-1 mt-5 hover:shadow-md hover:scale-110 duration-300 text-xs 
                  cursor-pointer select-none flex items-center">
                    <span className="text-[11px] font-bold">{item}</span>
                  </div>
                ))
              }
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

    </div>
  );
};
export default Page;
