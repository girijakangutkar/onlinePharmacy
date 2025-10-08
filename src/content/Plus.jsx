import React from "react";
import construct from "../assets/52504.jpg";

const Plus = () => {
  return (
    // <div className="flex flex-col items-center justify-center mt-[20%] sm:mt-[5%] lg:mt-[8%] md:mt-[10%] xl:mt-[4%] 2xl:mt-[4%]">
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8 text-center">
      {/* Cartoon Image */}
      <img
        src={construct}
        alt="Under Construction"
        className="w-100 h-[50%] object-contain mb-3"
      />

      {/* Message */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        🚧 Sorry for the inconvenience!
      </h1>
      <p className="text-base md:text-lg text-gray-600">
        This page is currently under construction. We're working hard to bring
        <b> Plus</b> to you soon.
      </p>
    </div>
    // </div>
  );
};

export default Plus;
