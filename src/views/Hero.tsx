import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import picture from "/public/hero_female_cover.webp";
import Ads from "./Ads";
import adPic1 from "/public/ad1.webp";
import adPic2 from "/public/ad2.webp";
import adPic3 from "/public/ad3.webp";
import adPic4 from "/public/ad4.webp";
const Hero = () => {
    return (
        <section className="flex justify-evenly flex-col lg:flex-row gap-y-5 py-12 flex-wrap">
            {/* Left Divison */}
            <div className="flex-1">
                <Badge className="py-4 px-6 bg-blue-200 text-blue-900 rounded-xl">Sale 70%</Badge>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-8">
                    An Industrial Take on Streetwear
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-8 text-lg motion-safe:animate-fadeIn">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <Button className="bg-orange-300 hover:bg-orange-400 border-0 lg:h-14 my-6 font-bold lg:text-xl">
                    &nbsp;&nbsp;&nbsp;
                    <ShoppingCart className="mr-3" />
                    Start Shopping
                    &nbsp;&nbsp;&nbsp;
                </Button>

                <div className="flex lg:justify-between flex-wrap gap-y-3 mt-7 py-10 justify-evenly">
                    <Ads image={adPic1} />
                    <Ads image={adPic2} />
                    <Ads image={adPic3} />
                    <Ads image={adPic4} />
                </div>
            </div>

            {/* Right Divison */}
            <div className="flex flex-1 justify-center">
                <div className="absolute lg:w-[500px]  lg:h-[500px]
                 bg-orange-200 rounded-full"></div>
                <Image src={picture} alt="hero_picture" className="relative h-fit" />
            </div>
        </section>
    );
};
export default Hero;