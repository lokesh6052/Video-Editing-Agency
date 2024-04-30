"use client";
import React from "react";
import { Meteors } from "./ui/meteors";
import { SparklesCore } from "./ui/sparkles";

export function OurClients() {
  return (
    <>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-center">
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 w-full mb-10">
            Our Top Collaborate Projects
          </p>
          <div className="flex justify-center items-center gap-10 flex-wrap">
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-3xl text-white mb-2 relative z-50 text-center">
                  Windows 12 by{" "}
                  <span className="text-teal-500"> Microsoft </span>
                </h1>

                <Meteors number={40} />
              </div>
            </div>
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-3xl text-white mb-2 relative z-50 text-center">
                  Premiere Pro by <span className="text-red-500"> Adobe </span>
                </h1>

                {/* Meaty part - Meteor effect */}
                <Meteors number={40} />
              </div>
            </div>
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-3xl text-white mb-2 relative z-50 text-center">
                  S26 Samrtphone by{" "}
                  <span className="text-indigo-500"> Samsung </span>
                </h1>

                {/* Meaty part - Meteor effect */}
                <Meteors number={40} />
              </div>
            </div>
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-3xl text-white mb-2 relative z-50 text-center">
                  After Effects by <span className="text-red-500"> Adobe </span>{" "}
                </h1>

                {/* Meaty part - Meteor effect */}
                <Meteors number={40} />
              </div>
            </div>
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-3xl text-white mb-2 relative z-50 text-center">
                  HP 15s Series by <span className="text-indigo-500"> HP </span>{" "}
                </h1>

                {/* Meaty part - Meteor effect */}
                <Meteors number={40} />
              </div>
            </div>
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-3xl text-white mb-2 relative z-50 text-center">
                  Iphone 15s by <span className="text-zinc-400"> Apple </span>{" "}
                </h1>

                {/* Meaty part - Meteor effect */}
                <Meteors number={40} />
              </div>
            </div>
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-3xl text-white mb-2 relative z-50 text-center">
                  Food Delivery Services by{" "}
                  <span className="text-red-600"> Zomato </span>{" "}
                </h1>

                {/* Meaty part - Meteor effect */}
                <Meteors number={40} />
              </div>
            </div>
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-3xl text-white mb-2 relative z-50 text-center">
                  Canon Camera Series by{" "}
                  <span className="text-green-500"> Canon </span>{" "}
                </h1>

                {/* Meaty part - Meteor effect */}
                <Meteors number={40} />
              </div>
            </div>
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-3xl text-white mb-2 relative z-50 text-center">
                  Sony Camera Series by{" "}
                  <span className="text-blue-500"> Sony </span>{" "}
                </h1>

                {/* Meaty part - Meteor effect */}
                <Meteors number={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
