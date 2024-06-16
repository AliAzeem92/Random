import Image from "next/image";
import loc from "@/assets/location.svg";
import cal from "@/assets/calendar.svg";

const FeaImgCard = ({ src, alt, title, rating }) => {
  return (
    <div className="max-w-sm rounded shadow-lg px-6 py-4 flex justify-center ">
      <div>
        <Image
          src={src}
          alt={alt}
          className="w-[300px] h-[200px] object-cover rounded-[7px] "
        />
        <div>
          <h1 className="font-bold text-xl my-2">{title}</h1>
          <div className="flex">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "text-yellow-500" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 15l-5.568 2.925 1.064-6.2L1.5 6.35l6.31-.919L10 1l2.19 4.431 6.31.919-4.996 5.374 1.064 6.2L10 15z" />
              </svg>
            ))}
          </div>
          <div className="flex  gap-8 mt-[10px] ">
            <span className="flex gap-1 ">
              <Image src={loc} alt="location" />
              Location
            </span>
            <span className="flex gap-1 ">
              <Image src={cal} alt="date" />
              Date
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaImgCard;
