import React from "react";
import { SparklesCore } from "./ui/sparkles";
import NumberCounter from "./ui/NumberCounter";

function SomeNumbersSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[40rem] w-full">
        <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          WORKING EXPERIENCE IN THE
          <br />
          VIDEO EDITING
          <div className="w-full  h-10 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(500px_120px_at_top,transparent_20%,white)]"></div>
          </div>
        </h1>
        <div className=" flex justify-between items-center flex-wrap gap-10 w-[70rem] h-[30rem] mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 to-teal-500 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col items-center justify-center h-[10rem] w-[15rem]">
              <h1 className="text-white text-4xl font-bold">200M+</h1>
              <p className="text-white font-bold text-xl">Satisfied Clients</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-600 to-green-500 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col items-center justify-center h-[10rem] w-[15rem]">
              <h1 className="text-white text-4xl font-bold">1145+</h1>
              <p className="text-white font-bold text-xl">Working Projects</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 to-pink-500 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col items-center justify-center h-[10rem] w-[15rem]">
              <h1 className="text-white text-4xl font-bold">1000M+</h1>
              <p className="text-white font-bold text-xl">Line of Code</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SomeNumbersSection;
