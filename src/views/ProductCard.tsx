import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
const ProductCard = (props: {
  title: string;
  price: number;
  image: string | StaticImageData;
  category: string;
  id: number;
}) => {
  return (
    <Link href={`/products/${props.id}`}>
      <div className="border border-gray shadow-md hover:scale-105 transition duration-500 cursor-pointer select-none">
        <Image
          src={props.image}
          alt="product-image"
          className="bg-gray-200 w-[280px] h-auto" />
        <br />
        <div className="pl-2">
          <div>
            <h3 className="text-xl font-bold">{props.title}</h3>
            <p className="font-bold text-lg flex flex-row items-center">Category
              <sup className="text-sm font-normal"> [{props.category}]</sup>
            </p>
            <p className="text-lg font-bold">
              ${props.price.toFixed(1)}
              <sup className="text-xs font-normal">-5%</sup>
            </p>
          </div>
          <div>
            <Link href={`/products/${props.id}`}>
              <Button className="border border-black bg-black text-white hover:bg-slate-50 hover:text-black">
                <ShoppingCart />&nbsp;&nbsp;
                <p>Add To Cart</p>
              </Button>
            </Link>
          </div>
        </div>
        <br />
      </div>
    </Link>
  );
};
export default ProductCard;