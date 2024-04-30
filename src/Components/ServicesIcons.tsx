"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function ServicesIcons() {
  return (
    <>
      <div className="absolute inset-auto z-1 h-44 w-full bg-gradient-to-b from-slate-950 to-transparent"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full pt-4">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Visions to realities. Expertise inframes
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Enhancing over 50,000 designs monthly, our Canva services redefine
              creativity. Join our community for reliable solutions, endless
              inspiration, and unparalleled learning opportunities. Elevate your
              designs with our expert touch.
            </p>
          </div>
          <Image
            src="/products/realcanva.jpg"
            width={490}
            height={490}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[1px] filter -bottom-5 object-contain rounded-2xl z-[-1]"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Mastering Premiere Pro's art
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200 font-bold ">
            Crafting over 100,000 videos monthly, our Premiere Pro services
            embody excellence. Trust us for reliable solutions, boundless
            creativity, and continuous learning. Elevate your videos with our
            premier editing expertise.
          </p>
          <Image
            src="/products/premiere pro.jpg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[1px] filter bottom-10 object-contain rounded-2xl z-[-1] blur-sm greyscale"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-xl">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Transforming visions into captivating realities. Expertise in
              every frame!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Transforming over 100,000 videos monthly, our After Effects
              expertise sets the industry standard. With us, expect reliability,
              creativity, and boundless learning. Elevate your videos with our
              unmatched editing prowess.
            </p>
          </div>
          <Image
            src="/products/affterEffects.jpg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:right-[5%] bottom-3 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </>
  );
}
