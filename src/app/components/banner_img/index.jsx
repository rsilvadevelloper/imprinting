import Image from "next/image";
import "./banner.css"
const Banner = ({ image }) => {
  return (
    <Image
      src={image}
      alt="logo imprinting"
      width={0}
      height={0}
      sizes="100vw"
    className="banner"
    />
  );
};

export default Banner;
