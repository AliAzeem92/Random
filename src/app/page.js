import React from "react";
import Featured from "@/components/Featured/Featured";
import Beyond from "@/components/Beyond/Beyond";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";

export default function page() {
  return (
    <div className="bg-[#d9d9d9]  min-h-screen ">
      <div className="bg-[#fcfcfc]  min-h-screen sm:mx-[50px] md:mx-[70px] mx-[30px]  ">
        <div className="px-[60px] ">
          <Featured />
          <br />
          <br />
          <br />
          <Beyond />
          <br />
        </div>
        <div>
          <About />
          <Footer />
        </div>
      </div>
    </div>
  );
}
