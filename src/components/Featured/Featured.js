import React from "react";
import Img from "@/assets/Img.svg";
import FeaImgCard from "../ImgCard/FeaImgCard";

export default function Featured() {
  return (
    <div>
      <h1 className="font-bold text-[25px] ">Featured Vendors</h1>
      <p className="text-[#b2b6b9] font-[500] ">
        Get inspired with the latest trends and advice from our expertise
        vendors
      </p>
      <div className="flex gap-4 mt-[20px] ">
        <FeaImgCard
          src={Img}
          alt="Sample Image"
          title="Sample Title"
          rating={3}
        />
        <FeaImgCard
          src={Img}
          alt="Sample Image"
          title="Sample Title"
          rating={3}
        />
        <FeaImgCard
          src={Img}
          alt="Sample Image"
          title="Sample Title"
          rating={3}
        />
        <FeaImgCard
          src={Img}
          alt="Sample Image"
          title="Sample Title"
          rating={3}
        />
      </div>
    </div>
  );
}
