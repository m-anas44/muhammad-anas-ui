import { Button } from "@/components/ui/button";
import img1 from "/public/girl.webp";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Content = () => {
    return (
        <div className="bg-slate-100 mt-14">
            {/* Up Side */}
            <div className="flex flex-col p-20 gap-y-8">

                <div className="flex flex-col lg:flex-row justify-between gap-x-20 gap-y-10">
                    <span>
                        <h2 className="font-bold text-xl">Using Good Quality Materials</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </span>
                    <span>
                        <h2 className="font-bold text-xl font-sans">Using Good Quality Materials</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </span>
                    <span>
                        <h2 className="font-bold text-xl font-sans">Using Good Quality Materials</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </span>
                </div>

                <div className="">
                    <span className="">
                        <h2 className="font-bold text-xl font-sans">Using Good Quality Materials</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amt, consectetur <br />adipiscing elit.</p>
                    </span>
                </div>

                {/* Down Side */}

            </div>
            <div className="flex md:flex-row flex-col items-center gap-x-8 px-20 pb-10 gap-y-6">
                <div className="">
                    <Image src={img1} alt="image 1" className="bg-slate-200" />
                </div>
                <div className="flex flex-col gap-y-6 md:w-1/2">
                    <p className="text-sm font-sans">This piece is ethically crafted in our small family-owned 
                    workshop in Peru with unmatched attention to detail and care. The Natural color is the 
                    actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Link href={"/products"}>
                    <Button className="bg-black w-[60%] md:w-1/3 rounded-md text-white hover:bg-gray-900">All Products
                        <ArrowBigRight className="transition duration-300 only:translate-x-3" /></Button>
                        </Link>
                </div>
            </div>
        </div>
    );
};
export default Content;