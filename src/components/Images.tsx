"use client";
import React, { useEffect, useRef } from "react";
import img1 from "../assets/Images1.webp";
import img2 from "../assets/images2.webp";
import img3 from "../assets/Images3.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Images() {
  const parent = useRef<HTMLDivElement>(null);
  const first = useRef<HTMLDivElement>(null);
  const second = useRef<HTMLDivElement>(null);
  const third = useRef<HTMLDivElement>(null);
  const fourth = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top 90%",
        scrub: 1,
      },
    });

    tl.to(
      first.current,
      {
        x: "50%",
        scale: 1.2,
        ease: "power4.out",
      },
      "a",
    );

    tl.to(
      fourth.current,
      {
        x: "50%",
        scale: 1.2,
        ease: "power4.out",
      },
      "a",
    );

    tl.to(
      second.current,
      {
        x: "-30%",
        scale: 1.2,
        ease: "power4.out",
      },
      "a",
    );

    tl.to(
      third.current,
      {
        x: "-30%",
        scale: 1.2,
        ease: "power4.out",
      },
      "a",
    );
  }, []);

  return (
    <div
      ref={parent}
      className="relative flex h-[70vh] w-full items-center justify-center overflow-hidden bg-white sm:h-[125vh]"
    >
      <div
        ref={first}
        className="absolute right-7 top-24 h-[25%] w-24 sm:right-[26%] sm:h-[30%] sm:w-48"
      >
        <img
          src={img2.src}
          className="h-full w-full object-cover"
          alt="Image 2"
        />
      </div>
      <div
        ref={second}
        className="absolute left-1 top-[33%] h-[20%] w-40 sm:left-[15%] sm:h-[30%] sm:w-96"
      >
        <video
          muted
          loop
          autoPlay
          src={"/images-vid-2.mp4"}
          className="h-full w-full object-cover"
        />
      </div>
      <div
        ref={third}
        className="absolute bottom-0 left-0 h-[30%] w-36 sm:-bottom-[15%] sm:left-[14%] sm:h-[40%] sm:w-96"
      >
        <img
          src={img3.src}
          className="h-full w-full object-cover"
          alt="Image 3"
        />
      </div>
      <div
        ref={fourth}
        className="absolute -bottom-5 right-0 h-[30%] w-36 sm:right-[19%] sm:h-[40%] sm:w-[20%]"
      >
        <video
          src={"/images-vid.mp4"}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="h-2/3 w-[40%] sm:h-[80%] sm:w-[25%]">
        <img
          src={img1.src}
          className="h-full w-full object-cover"
          alt="Image 1"
        />
      </div>
    </div>
  );
}

export default Images;
