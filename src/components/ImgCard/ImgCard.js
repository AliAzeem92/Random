import Image from "next/image";

const ImgCard = ({ src, alt, title }) => {
  return (
    <div className="max-w-sm overflow-hidden ">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={200}
        className="h-[200px] object-cover rounded-[20px] "
      />
      <div className="py-4">
        <h1 className="font-bold text-xl mb-2">{title}</h1>
        <p className="text-[#b2b6b9] w-[260px] text-[12px] ">
          Get inspired with the latest trends and advice from our expertise
          vendors
        </p>
      </div>
    </div>
  );
};

export default ImgCard;
