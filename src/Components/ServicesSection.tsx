"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const words = `Discover professional-grade creativity at budget-friendly rates! At Vande Digital, we excel in affordable video editing and web development services. From polished visuals to sleek websites, we bring your vision to life with precision and affordability. Elevate your online presence effortlessly with our expert solutions.`;

const loadingStates = [
  {
    text: "Planning and Storyboarding",
  },
  {
    text: "Gathering Resources",
  },
  {
    text: "Animation with After Effects",
  },
  {
    text: "Video Editing with Premiere Pro",
  },
  {
    text: "Visual Enhancements with Canva",
  },
  {
    text: "Review and Feedback",
  },
  {
    text: "Export and Distribution",
  },
];
export function ServicesSection() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="absolute inset-auto z-40 h-44 w-full bg-gradient-to-b from-black to-transparent"></div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Elevate with our tailored services
          <TextGenerateEffect words={words} className="max-w-7xl" />
        </motion.h1>
        <br />
        <div className="w-full flex items-center justify-center">
          <Loader
            loadingStates={loadingStates}
            loading={loading}
            duration={2000}
          />
          {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
          <button
            onClick={() => setLoading(true)}
            className="bg-[#6432c0] hover:bg-[#7066de]/90 text-white mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
            style={{
              boxShadow:
                "0px -1px 0px 0px #9d00ff inset, 0px 1px 0px 0px #6a209f inset",
            }}
          >
            Our Services
          </button>
          {loading && (
            <button
              className="fixed top-4 right-4 text-black dark:text-white z-[120]"
              onClick={() => setLoading(false)}
            >
              <IconSquareRoundedX className="h-10 w-10" />
            </button>
          )}
        </div>
      </LampContainer>
    </>
  );
}
