"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
  {
    quote:
      "I never imagined video editing could be this enjoyable and professional until I discovered your platform. Premiere Pro tutorials here are top-notch!",
    name: "Sarah Thompson",
    title: "Digital Content Creator",
  },
  {
    quote:
      "Animation seemed like a daunting task, but your After Effects tutorials turned it into a creative playground. Thank you for demystifying the process!",
    name: "Jason Rodriguez",
    title: "Motion Graphics Designer",
  },
  {
    quote:
      "Canva has always been my go-to tool, but your insights took my designs to a whole new level. The visual enhancements are beyond compare!",
    name: "Emily Collins",
    title: "Social Media Manager",
  },
  {
    quote:
      "Your Premiere Pro tutorials are not just informative but also inspiring. They've given my videos the professional touch I've always desired.",
    name: "Daniel Ramirez",
    title: "YouTuber",
  },
  {
    quote:
      "After struggling with After Effects for months, your platform made everything crystal clear. Now, animation feels like second nature!",
    name: "Alicia Nguyen",
    title: "Freelance Animator",
  },
  {
    quote:
      "Canva was overwhelming until I found your guidance. Now, creating stunning visuals is a breeze, and my clients are thrilled!",
    name: "Michael Johnson",
    title: "Graphic Designer",
  },
  {
    quote:
      "Premiere Pro felt like a maze until I discovered your tutorials. The step-by-step approach made the learning curve smooth and enjoyable.",
    name: "Sophia Lee",
    title: "Film Student",
  },
  {
    quote:
      "Your After Effects tutorials are a game-changer! They've empowered me to bring my creative visions to life with confidence and finesse.",
    name: "David Smith",
    title: "Visual Effects Artist",
  },
  {
    quote:
      "Canva has never been this fun and easy! Your platform unlocked a whole new world of creativity for me. Thank you for the inspiration!",
    name: "Olivia Bennett",
    title: "Content Creator",
  },
  {
    quote:
      "Premiere Pro can be intimidating, but your tutorials break down complex concepts into digestible chunks. Now, I edit videos like a pro!",
    name: "Ethan Carter",
    title: "Small Business Owner",
  },
  {
    quote:
      "Your After Effects tutorials are nothing short of brilliant! They've given my projects the professional polish they needed to stand out.",
    name: "Isabella Martinez",
    title: "Filmmaker",
  },
  {
    quote:
      "Canva used to be overwhelming, but your tutorials changed everything. Now, I create eye-catching designs effortlessly!",
    name: "Lucas Thompson",
    title: "Marketing Specialist",
  },
  {
    quote:
      "Your Premiere Pro tutorials are a lifesaver! They've transformed my videos from amateur to professional in no time. Thank you!",
    name: "Grace Adams",
    title: "Content Creator",
  },
  {
    quote:
      "Animation was a mystery until I found your After Effects tutorials. Now, I'm confidently creating captivating visuals like never before!",
    name: "Nathan Scott",
    title: "Animator",
  },
  {
    quote:
      "Canva was a puzzle until I discovered your platform. Now, I design with ease and finesse, impressing clients every time!",
    name: "Emma Parker",
    title: "Graphic Designer",
  },
  {
    quote:
      "Premiere Pro seemed daunting until I started learning from your tutorials. Now, I edit videos with precision and flair!",
    name: "Jack Evans",
    title: "YouTuber",
  },
  {
    quote:
      "Your After Effects tutorials have been a revelation! They've given my projects the wow factor they were missing. Thank you!",
    name: "Sophie Wilson",
    title: "Motion Graphics Designer",
  },
  {
    quote:
      "Canva felt limiting until I discovered your tutorials. Now, I'm pushing the boundaries of design and loving every minute of it!",
    name: "Noah Taylor",
    title: "Freelance Designer",
  },
  {
    quote:
      "Premiere Pro used to be overwhelming, but your tutorials made it accessible and fun. Thanks for demystifying the editing process!",
    name: "Lily Robinson",
    title: "Film Enthusiast",
  },
  {
    quote:
      "Your After Effects tutorials are a game-changer! They've empowered me to unleash my creativity and take my projects to new heights.",
    name: "William Garcia",
    title: "Visual Effects Artist",
  },
];
function Testomonial() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.1] items-center justify-center relative overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 w-full mb-10 text-center">
        Our Clients Staisfaction Testimonails
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export default Testomonial;
