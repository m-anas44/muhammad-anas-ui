import Image from "next/image";
import { StaticImageData } from "next/image";
const Ads = (props: { image: StaticImageData }) => {
  return (
    <div className="bg-gray-100 p-3 bg-opacity-40 rounded-[5px]">
      <Image src={props.image} alt="ads" />
    </div>
  );
};
export default Ads;