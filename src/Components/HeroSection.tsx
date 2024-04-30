"use client";

import React, { useRef } from "react";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";
function HeroSection() {
  const opts = {
    height: "550",
    width: "940",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className=" w-full rounded-md flex flex-col items-center justify-center relative mx-auto py-10 md:py-0 bg-dot-white/[0.15]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Transform your videos with expert editing for an unforgettable digital
          presence.
          <br />
          <Highlight className="text-black dark:text-white relative z-20 mb-5">
            Welcome to Vande Digital!
          </Highlight>
        </motion.h1>
        <div className="mt-20 flex justify-center items-center">
          <Link href={"/contact"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-transparent text-black dark:text-white border-neutral-200 dark:border-slate-800 text-4xl font-bold "
            >
              Book Now🔖
            </Button>
          </Link>
        </div>
      </HeroHighlight>
    </div>
  );
}

export default HeroSection;
