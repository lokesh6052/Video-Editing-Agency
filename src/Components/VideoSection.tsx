"use client";
import React, { useRef } from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import YouTube from "react-youtube";
import { SparklesCore } from "./ui/sparkles";
import NumberCounter from "../Components/ui/NumberCounter";
import { useOnScreen } from "../hooks/useOnScreen";
import { Vortex } from "./ui/vortex";
function VideoSection() {
  const counterRef = useRef<HTMLSpanElement>(null); // Declare counterRef using useRef
  const isVisible = useOnScreen(counterRef); // Determine visibility using useOnScreen hook
  const opts = {
    height: "550",
    width: "940",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="w-full flex flex-col overflow-hidden antialiased bg-black/10 bg-dot-white/[0.15]">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full overflow-hidden"
      >
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Step into the
                <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none relative z-20">
                  Digital Spotlight
                </span>
                <div className="w-full  h-25 relative">
                  {/* Gradients */}
                  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                  <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                  <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                  {/* Core component */}
                  {/* <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                /> */}

                  {/* Radial Gradient to prevent sharp edges */}
                  <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(500px_120px_at_top,transparent_20%,white)]"></div>
                </div>
              </h1>
            </>
          }
        >
          {/* <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}

          <YouTube videoId="YJwrViuyNpg" opts={opts} />
        </ContainerScroll>
      </Vortex>
    </div>
  );
}

export default VideoSection;
