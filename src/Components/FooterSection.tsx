import React from "react";

function FooterSection() {
  return (
    <>
      <div className="relative flex justify-center items-center w-full">
        <div className="absolute inset-0 w-full h-[10rem] bg-gradient-to-r from-pink-600 to-blue-500 blur-xl"></div>
        <p className="mt-16 z-10 text-4xl font-bold">
          Created by Lokesh Purohit with ❤️
        </p>
      </div>
    </>
  );
}

export default FooterSection;
