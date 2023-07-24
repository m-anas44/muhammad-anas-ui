import Image from "next/image";
import { StaticImageData } from "next/image";
const Ads = (props: { image: StaticImageData }) => {
  return (
    <div>
      <Image src={props.image} alt="ads" />
    </div>
  );
};
export default Ads;